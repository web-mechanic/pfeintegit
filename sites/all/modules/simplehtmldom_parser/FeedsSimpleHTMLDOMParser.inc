<?php

class FeedsSimpleHTMLDOMParser extends FeedsParser {

  public function parse(FeedsSource $source, FeedsFetcherResult $fetcher_result) {
    if (!function_exists('str_get_html')) {
      require drupal_get_path('module', 'simplehtmldom_parser') .'/simple_html_dom.php';
    }
    $html = str_get_html($fetcher_result->getRaw());
    $items = array();
    foreach ($html->find($this->config['root_node']) as $node) {
      $elements = array();
      foreach ($this->config['extractions'] as $title => $extraction) {
        $elements[$title] = $this->extractItem($node, $extraction);
      }
      $items[] = $elements;
    }
    
    $html->clear();
    unset($html);
    
    return new FeedsParserResult($items, $source->feed_nid);
  }
  
  protected function extractItem($node, $extraction) {
    if ($extraction['multivalue']) {
      $values = array();
      foreach ($node->find($extraction['pattern']) as $item) {
        $values[] = $this->processItem($item, $extraction);
      } 
      return $values;
    } else {
      return $this->processItem($node->find($extraction['pattern'], $extraction['offset']), $extraction);
    }
  }
  
  protected function processItem($node, $extraction) {
    $attr = $extraction['attribute'];
    $value = (string)$node->$attr;
    if ($extraction['stripspace']) {
      $value = $this->stripSpace($value);
    }
    if (!empty($extraction['rewrite'])) {
      $value = str_replace('[value]', $value, $extraction['rewrite']);
    }
    return $value;
  }
  
  protected function stripSpace($value) {
    return trim(preg_replace('/\s\s+/', ' ', $value));
  }

  public function getMappingSources() {
    $items = array();
    foreach ($this->config['extractions'] as $key => $extraction) {
      $items[$key] = array(
        'name' => $extraction['name'],
        'description' => t('Extracted element as defined in SimpleHTMLDOM Parser configuration.'),
      );
    }
    return $items;
  }
  
  public function configDefaults() {
    return array(
      'root_node' => '',
      'extractions' => array(),
    );
  }
  
  public function configForm(&$form_state) {
    watchdog('config', '<pre>'. print_r($form_state, TRUE) .'</pre>');
    $form = array();
    $key = 0;
    $form['simplehtmldom_help'] = array(
      '#type' => 'fieldset',
      '#collapsed' => TRUE,
      '#collapsible' => TRUE,
      '#title' => t('SimpleHTMLDOM help'),
    );
    $form['simplehtmldom_help']['markup'] = array(
      '#markup' => _simplehtmldom_parser_help(),
    );
    $form['settings'] = array(
      '#type' => 'fieldset',
      '#title' => t('Main settings'),
    );
    $form['settings']['root_node'] = array(
      '#type' => 'textfield',
      '#title' => t('Root node pattern'),
      '#description' => t('The SimpleHTMLDOM selector pattern for extracting root nodes'),
      '#default_value' => $this->config['root_node'],
    );
    $form['extractions'] = array(
      '#type' => 'fieldset',
      '#title' => t('Extractions'),
      '#tree' => TRUE,
    );
    if (!empty($this->config['extractions'])) {
      foreach ($this->config['extractions'] as $key => $extraction) {
        $form['extractions'][$key] = $this->configElement($extraction);
      }
    }
    $form['new-extraction'] = $this->configElement();
    $form['new-extraction']['#tree'] = TRUE;
    $form['new-extraction']['#title'] = t('Add new extraction');
    return $form;
  }
  
  public function configFormSubmit(&$values) {
    $extractions = array();
    if (isset($values['extractions'])) {
      foreach ($values['extractions'] as $key => $extraction) {
        if (empty($extraction['name'])) {
          unset($values['extractions'][$key]);
        }
      }
    }
    if (!empty($values['new-extraction']['name'])) {
      $values['extractions'][] = $values['new-extraction'];
    }
    parent::configFormSubmit($values);
  }

  protected function configElement($values = array('name' => '', 'pattern' => '', 
    'attribute' => '', 'multivalue' => FALSE, 'offset' => 0, 'stripspace' => FALSE, 'rewrite' => '')) {
    return array(
      '#type' => 'fieldset',
      '#collapsed' => TRUE,
      '#collapsible' => TRUE,
      '#title' => $values['name'],
      'name' => array(
        '#type' => 'textfield',
        '#title' => t('Name'),
        '#description' => t('Enter a name for this extraction, to be used when creating mappings.'),
        '#default_value' => $values['name'],
      ),
      'pattern' =>  array(
        '#type' => 'textfield',
        '#title' => t('Pattern'),
        '#description' => t('Enter a SimpleHTMLDOM query to extract this element.'),
        '#default_value' => $values['pattern'],
      ),
      'attribute' => array(
        '#type' => 'textfield',
        '#title' => t('Attribute'),
        '#description' => t('Which SimpleHTMLDOM attriute to extract from the element.'),
        '#default_value' => $values['attribute'],
      ),
      'multivalue' => array(
        '#type' => 'checkbox',
        '#title' => t('Return multiple values'),
        '#description' => t('If this option is selected then this extraction will return multiple values, one for each match.
          If this option is set then the offset below is ignored'),
        '#default_value' => $values['multivalue'],
      ),
      'offset' => array(
        '#type' => 'textfield',
        '#size' => 5,
        '#title' => t('Offset'),
        '#description' => t('When multiple items are matched return this item. Default to 0 which returns the first match.'),
        '#default_value' => $values['offset'],
      ),
      'stripspace' => array(
        '#type' => 'checkbox',
        '#title' => t('Strip excess whitespace'),
        '#description' => t('Remove any excess whitespace from the extracted value.'),
        '#default_value' => $values['stripspace'],
      ),
      'rewrite' => array(
        '#type' => 'textfield',
        '#title' => t('Rewrite result'),
        '#description' => t('Rewrite the extracted value. The token [value] is replaced with the extacted value.'),
        '#default_value' => $values['rewrite'],
      ),
    );
  }
}


function _simplehtmldom_parser_help() {
  return t('SimpleHTMLDOM is a parser that allows you to extract information from a HTML page with selectors just like jQuery. 
  More information is available at http://simplehtmldom.sourceforge.net/index.htm');
}
















