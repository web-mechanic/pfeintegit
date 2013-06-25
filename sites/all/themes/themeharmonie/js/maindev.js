
  (function() {
    var config = {
      kitId: 'lqz6sck',
      scriptTimeout: 3000
    };
    var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
  })();

jQuery(document).ready(function($) {

//scroll vers le haut

$(document).ready(function () {
    $(".mainNav").tinyNav();
});



$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    });

    $('.toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});

$(function () {
    $('input[type="text"]').each(function() { 
        var $this = $(this); 
        $this.attr("placeholder", $this.attr("value")).removeAttr("value"); 
    });

        $('input[type="email"]').each(function() { 
        var $this = $(this); 
        $this.attr("placeholder", $this.attr("value")).removeAttr("value"); 
    });
});

$(function () {

$('.listImage li a').attr('class', 'fancybox')

$('.fancybox').fancybox();

});

  $(function() {
    $(".slider").responsiveSlides();

    $(".slider").responsiveSlides({
  auto: false,             // Boolean: Animate automatically, true or false
  speed: 700,            // Integer: Speed of the transition, in milliseconds
  timeout: 10000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: true,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
  });




/*$(document).ready(function () {

  
    // validate signup form on keyup and submit
    var validator = $("#webform-client-form-107").validate({
        rules: {
            submitted[nom]: {
                required: true,
                minlength: 2
            },
            submitted[e_mail]: {
                required: true,
                email: true
            },
            submitted[sujet]: {
                required: true,
                minlength: 2
            },
            submitted[texte]: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            submitted[nom]: {
                required: "Merci d'entrer votre nom",
                minlength: jQuery.format("Votre nom doit faire au moins 2 caractères")
            },
            submitted[e_mail]: {
                required: "Merci d'entrer une adresse e-mail valide",
                minlength: "Merci d'entrer une adresse e-mail valide"
            },
            submitted[sujet]: {
                required: "Merci de préciser un sujet",
                minlength: jQuery.format("Merci de préciser un sujet d'au moins 2 caractères")
            },
            submitted[texte]: {
                required: "Et un message! C'est mieux si vous souhaitez vraiment nous contacter :)",
                minlength: jQuery.format("De plus de {0} caractères")
            }
        },
        // set this class to error-labels to indicate valid fields
        success: function (label) {
            label.addClass("checked");
        }


    });
});
*/
$(document).ready(function(){

$(window).scroll(function () { 

//Distance entre le footer et le dessus
footertotop = ($('.footer').position().top);
//Hauteur désirée en partant du bas
scrolltop = $(document).scrollTop()+295;
//Différence entre les valeurs calculées
difference = scrolltop-footertotop;

//Si il scroll plus bas, on met une hauteur négative

if (scrolltop > footertotop) {

$('.sbLeft').css('margin-top',  0-difference);
}

else  {
$('.sbLeft').css('margin-top', 0);
}


});

});

$(document).ready(function () {

 var locations = [
      ['Local de répétition 40, rue des Grandes Ruelles 4520 Antheit', 50.544655,5.2272]
    ];

      // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#519fc4" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
 var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 9,
    scrollwheel: false,
    center: new google.maps.LatLng(50.651202,5.634613),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('Map'),
    mapOptions);

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));

       map.mapTypes.set('map_style', styledMap);
       map.setMapTypeId('map_style');
    }

});


});