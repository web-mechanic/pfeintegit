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

//Validation du formulaire

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
});