"use strict";
$(document).ready(function () {

//+++++++++++++++++++++++++++++++++++++++++++
//     bainner slider Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++     
    $("#owl-demo").owlCarousel({
        autoPlay: true,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        navigationText: false,
        pagination: false
    });
//+++++++++++++++++++++++++++++++++++++++++++
//     Our-Services Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++ 
    $("#our-services-owl").owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: ['<i class="icon-back"></i>', '<i class="icon-next"></i>'],
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3]

    });
    //+++++++++++++++++++++++++++++++++++++++++++
//    isotop gallry Jquery Code start
//+++++++++++++++++++++++++++++++++++++++++++

// external js: isotope.pkgd.js
    $(window).load(function () {
        setTimeout(function () {
            $('#preloader').velocity({
                opacity: 0.1,
                translateY: "-80px"
            }, {
                duration: 400,
                complete: function () {
                    $('#hola').velocity({
                        translateY: "-100%"
                    }, {
                        duration: 1000,
                        easing: [0.7, 0, 0.3, 1],
                        complete: function () {
                            $('body').addClass('animate-border divide');
                        }
                    });
                }
            });
        }, 1000);
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
//            fitRows: {
//                gutter: 16
//            }
        });
    });
    var $grid = $('.grid');
// filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
// bind filter button click
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({filter: filterValue});
    });
// change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
//+++++++++++++++++++++++++++++++++++++++++++
//     index2-our-services-owl Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++ 
    $("#index2-our-services-owl").owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: ['<i class="icon-back"></i>', '<i class="icon-next"></i>'],
        pagination: false,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
//+++++++++++++++++++++++++++++++++++++++++++
//     Testimonail Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++ 
    $("#testimonail-owl").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ['<i class="icon-back"></i>', '<i class="icon-next"></i>'],
        pagination: false,
        singleItem: true

    });
//+++++++++++++++++++++++++++++++++++++++++++
//      Partners Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++ 
    $("#partner-owl").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        items: 8,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [979, 4]

    });
//+++++++++++++++++++++++++++++++++++++++++++
//     blog detail slide Jquery Code stat
//+++++++++++++++++++++++++++++++++++++++++++   
    $("#owl-blog").owlCarousel({
        autoPlay: true,
        navigation: true,
        slideSpeed: 900,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        navigationText: ['<i class="fa fa-angle-left slide-angle"></i><span>PREV</span>', '<span>NEXT</span><i class="fa fa-angle-right slide-angle"></i>'],
        pagination: false
    });
//+++++++++++++++++++++++++++++++++++++++++++
//     price-slider Jquery Code stat
//+++++++++++++++++++++++++++++++++++++++++++
    $("#slider").slider({
        range: "min",
        animate: true,
        value: 1,
        min: 10,
        max: 1000,
        step: 10,
        slide: function (event, ui) {
            update(1, ui.value); //changed
        }
    });
    $("#slider2").slider({
        range: "min",
        animate: true,
        value: 2,
        min: 10,
        max: 1000,
        step: 10,
        slide: function (event, ui) {
            update(2, ui.value); //changed
        }
    });
    $("#slider3").slider({
        range: "min",
        animate: true,
        value: 3,
        min: 0,
        max: 1000,
        step: 10,
        slide: function (event, ui) {
            update(3, ui.value); //changed
        }
    });
    $("#slider4").slider({
        range: "min",
        animate: true,
        value: 4,
        min: 0,
        max: 1000,
        step: 10,
        slide: function (event, ui) {
            update(3, ui.value); //changed
        }
    });
    $("#slider5").slider({
        range: "min",
        animate: true,
        value: 4,
        min: 0,
        max: 1000,
        step: 10,
        slide: function (event, ui) {
            update(3, ui.value); //changed
        }
    });
    $("#slider6").slider({
        range: "min",
        animate: true,
        value: 4,
        min: 0,
        max: 1000,
        step: 10,
        slide: function (event, ui) {
            update(3, ui.value); //changed
        }
    });
    $("#slider7").slider({
        range: "min",
        animate: true,
        value: 4,
        min: 0,
        max: 1000,
        step: 10,
        slide: function (event, ui) {
            update(3, ui.value); //changed
        }
    });
    update();
    function update(slider, val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider = 1 ? val : $("#amount").val();
        var $amount2 = slider = 2 ? val : $("#amount2").val();
        var $amount3 = slider = 3 ? val : $("#amount3").val();
        $("#amount").val($amount);
        $("#amount-label").text($amount);
        $("#amount2").val($amount2);
        $("#amount2-label").text($amount2);
        $("#amount3").val($amount3);
        $("#amount3-label").text($amount3);
        $('#slider a').html('<label>' + $amount + '</label>');
        $('#slider2 a').html('<label>' + $amount2 + '</label>');
        $('#slider3 a').html('<label>' + $amount3 + '</label>');
        $('#slider4 a').html('<label>' + $amount3 + '</label>');
        $('#slider5 a').html('<label>' + $amount3 + '</label>');
        $('#slider6 a').html('<label>' + $amount3 + '</label>');
        $('#slider7 a').html('<label>' + $amount3 + '</label>');
    }
    /* ---------------------------------------
     Ajax Code for Contact Form
     --------------------------------------- */
    jQuery('.contact_wrap').on('click', '.contact_now', function (e) {
        e.preventDefault();
        var $this = jQuery(this);

        var serialize_data = $this.parents('.contact_wrap').find('.contact_form').serialize();
        var dataString = serialize_data;

        $this.parents('.contact_wrap').find('.message_contact').html('').hide();
        jQuery($this).parents('fieldset').append("<i class='fa fa-refresh fa-spin'></i>");
        $this.parents('.contact_wrap').find('.message_contact').removeClass('alert-success');
        $this.parents('.contact_wrap').find('.message_contact').removeClass('alert-danger');

        var path = document.location
        var loc = window.location;
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/'));
        var dir = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));

        jQuery.ajax({
            type: "POST",
            url: dir + '/php/mailer.php',
            data: dataString,
            dataType: "json",
            success: function (response) {
                jQuery($this).parents('fieldset').find('i').remove();
                jQuery('.message_contact').show();
                if (response.type == 'error') {
                    $this.parents('.contact_wrap').find('.message_contact').addClass('alert alert-danger').show();
                    $this.parents('.contact_wrap').find('.message_contact').html(response.message);
                } else {
                    $this.parents('.contact_wrap').find('.contact_form').get(0).reset();
                    $this.parents('.contact_wrap').find('.message_contact').addClass('alert alert-success').show();
                    $this.parents('.contact_wrap').find('.message_contact').html(response.message);
                }
            }
        });

        return false;

    });
});