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
/*//Validation du formulaire

$(document).ready(function () {
    // validate signup form on keyup and submit
    var validator = $("#contactform").validate({
        rules: {
            contactname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            contactname: {
                required: "Merci d'entrer votre nom",
                minlength: jQuery.format("Votre nom doit faire au moins 2 caractères")
            },
            email: {
                required: "Merci d'entrer une adresse e-mail valide",
                minlength: "Merci d'entrer une adresse e-mail valide"
            },
            subject: {
                required: "Merci de préciser un sujet",
                minlength: jQuery.format("Merci de préciser un sujet d'au moins 2 caractères")
            },
            message: {
                required: "Et un message! C'est mieux si vous souhaitez vraiment nous contacter :)",
                minlength: jQuery.format("De plus de {0} caractères")
            }
        },
        // set this class to error-labels to indicate valid fields
        success: function (label) {
            label.addClass("checked");
        }


    });
});*/

$(document).ready(function () {

 var locations = [
      ['Local de répétition', 50.544655,5.2272]
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