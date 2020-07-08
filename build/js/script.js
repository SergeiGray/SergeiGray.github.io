'use strict';

(function () {
  var hangFlexslider = function () {
    if($(window).width() > 1450) {
      $('.decisions__slider').flexslider({
        selector: ".decisions__slider_container > li",
        controlsContainer: ".decisions__flipping",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: true,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 450,
        itemMargin: 24,
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
        startAt: 0,
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
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
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

    if($(window).width() < 1451 && $(window).width() > 1150) {
      $('.decisions__slider').flexslider({
        selector: ".decisions__slider_container > li",
        controlsContainer: ".decisions__flipping",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: true,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 360,
        itemMargin: 24,
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
        startAt: 0,
        smoothHeight: true,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 1140,
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
        startAt: 0,
        smoothHeight: true,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 1140,
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

    if($(window).width() < 1151 && $(window).width() > 750) {
      $('.services__slider').flexslider({
        selector: ".services__slider_container > li",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 660,
        itemMargin: 30,
        minItems: 1,
        maxItems: 1,
        move: 1,
        controlNav: true,
        directionNav: false,
        touch: true,
        animationLoop: true,
        animationSpeed: 900,
        keyboard: false,
     });

      $('.decisions__slider').flexslider({
        selector: ".decisions__slider_container > li",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 285,
        itemMargin: 24,
        minItems: 1,
        maxItems: 6,
        move: 1,
        controlNav: true,
        directionNav: false,
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
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 720,
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
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 720,
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

      $('.customers__slider').flexslider({
        selector: ".customers__slider_container > li",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 228,
        itemMargin: 0,
        minItems: 1,
        maxItems: 6,
        move: 1,
        controlNav: false,
        directionNav: false,
        touch: true,
        animationLoop: true,
        animationSpeed: 900,
        keyboard: false,
     });
    }

    if($(window).width() < 751) {
      $('.services__slider').flexslider({
        selector: ".services__slider_container > li",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 276,
        itemMargin: 30,
        minItems: 1,
        maxItems: 1,
        move: 1,
        controlNav: true,
        directionNav: false,
        touch: true,
        animationLoop: true,
        animationSpeed: 900,
        keyboard: false,
     });

      $('.decisions__slider').flexslider({
        selector: ".decisions__slider_container > li",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 276,
        itemMargin: 10,
        minItems: 1,
        maxItems: 6,
        move: 1,
        controlNav: true,
        directionNav: false,
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
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 290,
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
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 276,
        itemMargin: 10,
        minItems: 1,
        maxItems: 6,
        move: 1,
        controlNav: true,
        directionNav: false,
        touch: true,
        animationLoop: true,
        animationSpeed: 900,
        keyboard: false,
     });

      $('.customers__slider').flexslider({
        selector: ".customers__slider_container > li",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
        keyboard: true,
        prevText: '',
        nextText: '',
        itemWidth: 160,
        itemMargin: 0,
        minItems: 1,
        maxItems: 6,
        move: 1,
        controlNav: false,
        directionNav: false,
        touch: true,
        animationLoop: true,
        animationSpeed: 900,
        keyboard: false,
     });
    }
  }

  var getShadowMenu = function () {
    if($(window).width() > 1150) {
      $(window).scroll(function() {
        if($(this).scrollTop() >= 70) {
            $('.header').addClass('header__shadow');
        }
        else{
            $('.header').removeClass('header__shadow');
        }
      });
    };

    // if($(window).width() < 751) {
    //   $(window).scroll(function() {
    //     if($(this).scrollTop() >= 64) {
    //         $('.header').addClass('header__shadow');
    //     }
    //     else{
    //         $('.header').removeClass('header__shadow');
    //     }
    //   });
    // };
  };

  var slowScroll = function () {
    $(document).ready(function() {
      if($(window).width() > 1150) {
        $('#landing_scroll_down, #go_to_services').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#services'), {
            axis: 'y',
            duration: 900,
            offset: -75,
          });
        });

        $('#go_to_technologies').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#technologies'), {
            axis: 'y',
            duration: 900,
            offset: -75,
          });
        });

        $('#go_to_values').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#values'), {
            axis: 'y',
            duration: 900,
            offset: -75,
          });
        });

        $('#go_to_decisions').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#decisions'), {
            axis: 'y',
            duration: 900,
            offset: -75,
          });
        });

        $('#go_to_timeline').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#timeline'), {
            axis: 'y',
            duration: 900,
            offset: -75,
          });
        });

        $('#go_to_experience').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#experience'), {
            axis: 'y',
            duration: 900,
            offset: -75,
          });
        });

        $('#go_to_contacts').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#contacts'), {
            axis: 'y',
            duration: 900,
            offset: -75,
          });
        });
      };

      if($(window).width() < 1151) {
        $('#landing_scroll_down, #go_to_services').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#services'), {
            axis: 'y',
            duration: 900,
            offset: 0,
          });
        });

        $('#go_to_technologies').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#technologies'), {
            axis: 'y',
            duration: 900,
            offset: 0,
          });
        });

        $('#go_to_values').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#values'), {
            axis: 'y',
            duration: 900,
            offset: 0,
          });
        });

        $('#go_to_decisions').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#decisions'), {
            axis: 'y',
            duration: 900,
            offset: 0,
          });
        });

        $('#go_to_timeline').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#timeline'), {
            axis: 'y',
            duration: 900,
            offset: 0,
          });
        });

        $('#go_to_experience').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#experience'), {
            axis: 'y',
            duration: 900,
            offset: 0,
          });
        });

        $('#go_to_contacts').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#contacts'), {
            axis: 'y',
            duration: 900,
            offset: 0,
          });
        });
      }
    });
  };

  var getShowServices = function () {

    var check = function (itemCheck, itemShow, itemLink) {
        $(itemCheck).prop('checked') ? $(itemShow).removeClass('display_off') && $(itemLink).addClass('active') : $(itemShow).addClass('display_off') && $(itemLink).removeClass('active');
    };

    if($(window).width() > 1150 ) {
      $(".services .radio__input").change( function() {
          check('#services_1', '.block_1', '.item_1');
          check('#services_2', '.block_2', '.item_2');
          check('#services_3', '.block_3', '.item_3');
          check('#services_4', '.block_4', '.item_4');
          check('#services_5', '.block_5', '.item_5');
          check('#services_6', '.block_6', '.item_6');
      });
    };
  };

  var showMenu = function () {
    $('.open_menu').click( function (evt) {
      evt.preventDefault();
      $('.menu, .overlay').addClass('display_on');
    });

    $('.close, .overlay, .menu .item').click( function (evt) {
      evt.preventDefault();
      $('.menu, .overlay').removeClass('display_on');
    });
  };

  var getMarquee = function () {
    $('.marquee_1').marquee({
      direction: 'right',
      duplicated: true,
      speed: 40,
      startVisible: true
    });

    $('.marquee_2').marquee({
      direction: 'left',
      duplicated: true,
      speed: 30,
      startVisible: true
    });

    $('.marquee_3').marquee({
      direction: 'right',
      duplicated: true,
      speed: 30,
      startVisible: true
    });
  };

  hangFlexslider();
  getShadowMenu();
  slowScroll();
  getShowServices();
  showMenu();
  getMarquee();

}());
