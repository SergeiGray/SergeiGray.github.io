'use strict';

(function () {
  var hangFlexslider = function () {
    $('.decisions__slider').flexslider({
      selector: ".decisions__slider_container > li",
      controlsContainer: ".decisions__flipping",
      animation: "slide",
      easing: "swing",
      slideshow: false,
      startAt: 1,
      smoothHeight: true,
      keyboard: true,
      prevText: '',
      nextText: '',
      itemWidth: 450,
      itemMargin: 28,
      minItems: 1,
      maxItems: 6,
      move: 1,
      controlNav: false,
      directionNav: true,
      touch: true,
      animationLoop: true,
      animationSpeed: 900,
      keyboard: false,
   });

    $('.timeline__slider').flexslider({
      selector: ".timeline__slider_container > li",
      controlsContainer: ".timeline__flipping",
      animation: "slide",
      easing: "swing",
      slideshow: false,
      startAt: 1,
      smoothHeight: true,
      keyboard: true,
      prevText: '',
      nextText: '',
      itemWidth: 1400,
      itemMargin: 0,
      minItems: 1,
      maxItems: 1,
      move: 1,
      controlNav: false,
      directionNav: true,
      touch: true,
      animationLoop: true,
      animationSpeed: 900,
      keyboard: false,
   });

    $('.experience__slider').flexslider({
      selector: ".experience__slider_container > li",
      controlsContainer: ".experience__flipping",
      animation: "fade",
      easing: "swing",
      slideshow: false,
      startAt: 1,
      smoothHeight: true,
      keyboard: true,
      prevText: '',
      nextText: '',
      itemWidth: 1400,
      itemMargin: 0,
      minItems: 1,
      maxItems: 1,
      move: 1,
      controlNav: false,
      directionNav: true,
      touch: true,
      animationLoop: true,
      animationSpeed: 900,
      keyboard: false,
   });
  }

  var getShadowMenu = function () {
    if($(window).width() > 750) {
      $(window).scroll(function() {
        if($(this).scrollTop() >= 75) {
            $('.header').addClass('header__shadow');
        }
        else{
            $('.header').removeClass('header__shadow');
        }
      });
    };

    if($(window).width() < 751) {
      $(window).scroll(function() {
        if($(this).scrollTop() >= 64) {
            $('.header').addClass('header__shadow');
        }
        else{
            $('.header').removeClass('header__shadow');
        }
      });
    };
  };

  var slowScroll = function () {
    $(document).ready(function() {
      if($(window).width() > 750) {
        $('#landing_scroll_down').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#services'), {
            axis: 'y',
            duration: 900,
            offset: -75,
          });
        });
      };

      // if($(window).width() < 751) {
      //   $('#landing-link').click(function (evt) {
      //     evt.preventDefault();
      //     $('body').scrollTo(
      //       $('#reasons'), {
      //       axis: 'y',
      //       duration: 900,
      //       offset: -64,
      //     });
      //   });

      //   $('#reasons-link').click(function (evt) {
      //     evt.preventDefault();
      //     $('body').scrollTo(
      //       $('#greeting'), {
      //       axis: 'y',
      //       duration: 900,
      //       offset: -64,
      //     });
      //   });
      // };
    });
  };

  var getShowServices = function () {

    var check = function (itemCheck, itemShow, itemLink) {
        $(itemCheck).prop('checked') ? $(itemShow).removeClass('display_off') && $(itemLink).addClass('active') : $(itemShow).addClass('display_off') && $(itemLink).removeClass('active');
    };

    $(".services .radio__input").change( function() {
        check('#services_1', '.block_1', '.item_1');
        check('#services_2', '.block_2', '.item_2');
        check('#services_3', '.block_3', '.item_3');
        check('#services_4', '.block_4', '.item_4');
        check('#services_5', '.block_5', '.item_5');
        check('#services_6', '.block_6', '.item_6');
    });
  };

  hangFlexslider();
  getShadowMenu();
  slowScroll();
  getShowServices();

}());
