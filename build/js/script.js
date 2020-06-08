'use strict';

(function () {

  var hangFlexslider = function () {
    $(document).ready(function() {
      if($(window).width() > 750) {
        $('.greeting__slider').flexslider({
          selector: ".greeting__slider_container > li",
          controlsContainer: ".greeting__flipping",
          animation: "slide",
          easing: "swing",
          slideshow: false,
          startAt: 1,
          smoothHeight: true,
          keyboard: true,
          prevText: '',
          nextText: '',
          itemWidth: 624,
          itemMargin: -312,
          minItems: 1,
          maxItems: 6,
          move: 1,
          controlNav: true,
          directionNav: true,
          touch: true,
          animationLoop: false,
          animationSpeed: 900,
          keyboard: false,
          startAt: 2,
          start: function(slider) {
            $(slider.slides[slider.currentSlide]).addClass('greeting__slider_active');
            $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_next');
            $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_prev');
            // $(slider.slides).addClass('greeting__slider_shift');
          },
          before: function(slider) {
            slider.last = slider.count - 1;
            if (slider.direction === "next") {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide + 2]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_prev');
            }
            if (slider.direction === "prev") {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide - 2]).addClass('greeting__slider_prev');
            }
          },
          after: function(slider) {
          }
        });
        $('.result__slider').flexslider({
                selector: ".result__slider_container > li",
                controlsContainer: ".result__flipping",
                animation: "slide",
                easing: "swing",
                slideshow: false,
                startAt: 1,
                smoothHeight: true,
                keyboard: true,
                prevText: '',
                nextText: '',
                itemWidth: 340,
                itemMargin: 25,
                minItems: 1,
                maxItems: 6,
                move: 1,
                controlNav: false,
                directionNav: true,
                touch: true,
                animationLoop: false,
                animationSpeed: 900,
                keyboard: false,
                startAt: 2,
                start: function(slider) {
                  $(slider.slides[slider.currentSlide]).addClass('result__slider_active');
                  $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_next');
                  $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_prev');
                  // $(slider.slides).addClass('greeting__slider_shift');
                },
                before: function(slider) {
                  slider.last = slider.count - 1;
                  if (slider.direction === "next") {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide + 2]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_prev');
                  }
                  if (slider.direction === "prev") {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide - 2]).addClass('result__slider_prev');
                  }
                },
                after: function(slider) {
                }
        });
      }

      if($(window).width() < 751) {
        $('.greeting__slider').flexslider({
          selector: ".greeting__slider_container > li",
          controlsContainer: ".greeting__flipping",
          animation: "slide",
          easing: "swing",
          slideshow: false,
          startAt: 2,
          smoothHeight: true,
          keyboard: true,
          prevText: '',
          nextText: '',
          itemWidth: 280,
          itemMargin: 0,
          minItems: 1,
          maxItems: 6,
          move: 1,
          controlNav: true,
          directionNav: true,
          touch: true,
          animationLoop: false,
          animationSpeed: 900,
          keyboard: false,
          start: function(slider) {
            $(slider.slides[slider.currentSlide]).addClass('greeting__slider_active');
            $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_next');
            $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_prev');

            // console.log(slider.controlNav);

            // console.log(slider);
            // console.log(slider.currentSlide);
            // console.log(slider.count);
            // console.log(slider.controlNavScaffold[0].childElementCount);
          },
          before: function(slider) {
            slider.last = slider.count - 1;
            if (slider.direction === "next") {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide + 2]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_prev');
            }
            if (slider.direction === "prev") {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide - 2]).addClass('greeting__slider_prev');
            }
          },
          after: function(slider) {
          }
        });
        $('.result__slider').flexslider({
                selector: ".result__slider_container > li",
                controlsContainer: ".result__flipping",
                animation: "slide",
                easing: "swing",
                slideshow: false,
                startAt: 2,
                smoothHeight: true,
                keyboard: true,
                prevText: '',
                nextText: '',
                itemWidth: 280,
                itemMargin: 0,
                minItems: 1,
                maxItems: 6,
                move: 1,
                controlNav: false,
                directionNav: true,
                touch: true,
                animationLoop: false,
                animationSpeed: 900,
                keyboard: false,
                start: function(slider) {
                  $(slider.slides[slider.currentSlide]).addClass('result__slider_active');
                  $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_next');
                  $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_prev');
                  // $(slider.slides).addClass('greeting__slider_shift');
                },
                before: function(slider) {
                  slider.last = slider.count - 1;
                  if (slider.direction === "next") {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide + 2]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_prev');
                  }
                  if (slider.direction === "prev") {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide - 2]).addClass('result__slider_prev');
                  }
                },
                after: function(slider) {
                }
        });
        $('.team__slider').flexslider({
                selector: ".team__slider_container > li",
                controlsContainer: ".team__flipping",
                animation: "slide",
                easing: "swing",
                slideshow: false,
                startAt: 1,
                smoothHeight: true,
                keyboard: true,
                prevText: '',
                nextText: '',
                itemWidth: 280,
                itemMargin: 0,
                minItems: 1,
                maxItems: 6,
                move: 1,
                controlNav: true,
                directionNav: true,
                touch: true,
                animationLoop: true,
                animationSpeed: 900,
                // start: function(slider) {
                //   $(slider.slides[slider.currentSlide]).addClass('team__slider_active');
                //   $(slider.slides[slider.currentSlide + 1]).addClass('team__slider_next');
                //   $(slider.slides[slider.currentSlide - 1]).addClass('team__slider_prev');
                // },
                // before: function(slider) {
                //   // slider.last = slider.count - 1;
                //   if (slider.direction === "next") {
                //     $(slider.slides).removeClass('team__slider_active team__slider_next team__slider_prev');
                //     $(slider.slides[slider.currentSlide + 1]).addClass('team__slider_active');
                //     $(slider.slides[slider.currentSlide + 2]).addClass('team__slider_next');
                //     $(slider.slides[slider.currentSlide]).addClass('team__slider_prev');
                //   }
                //   if (slider.direction === "prev") {
                //     $(slider.slides).removeClass('team__slider_active team__slider_next team__slider_prev');
                //     $(slider.slides[slider.currentSlide - 1]).addClass('team__slider_active');
                //     $(slider.slides[slider.currentSlide]).addClass('team__slider_next');
                //     $(slider.slides[slider.currentSlide - 2]).addClass('team__slider_prev');
                //   }
                // },
                // after: function(slider) {
                // }
        });
      }
    });
  };

  var showMenu = function () {
    $('.menu__burger').click( function (evt) {
      evt.preventDefault();
      $('.menu__close, .menu__clause').addClass('display_on');
      $('.menu__burger, .menu__logo').addClass('display_off');
      $('.menu__list').addClass('menu__list_col');
      $('.menu__button').addClass('menu__button_open');
    });
    $('.menu__close').click( function (evt) {
      evt.preventDefault();
      $('.menu__close, .menu__clause').removeClass('display_on');
      $('.menu__burger, .menu__logo').removeClass('display_off');
      $('.menu__list').removeClass('menu__list_col');
      $('.menu__button').removeClass('menu__button_open');
    });
  };

  var slowScroll = function () {
    $(document).ready(function() {
      if($(window).width() > 750) {
        $('#landing-link').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#reasons'), {
            axis: 'y',
            duration: 1500,
            offset: -80,
          });
        });

        $('#reasons-link').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#greeting'), {
            axis: 'y',
            duration: 1500,
            offset: -80,
          });
        });
      };

      if($(window).width() < 751) {
        $('#landing-link').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#reasons'), {
            axis: 'y',
            duration: 1500,
            offset: -64,
          });
        });

        $('#reasons-link').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#greeting'), {
            axis: 'y',
            duration: 1500,
            offset: -64,
          });
        });
      };
    });
  };

  var getBlockQuestionsSlider = function () {
    $('#questions-button').click( function (evt) {
        evt.preventDefault();
        $('.questions__hidden').slideToggle('fast', function() {
          $(evt.target).parents('.item').toggleClass('active');
        });
    });
  };

  var showPopUpVideo = function () {
    $('.history__video-play').click(function (event) {
      event.preventDefault();
      $('.history__video-iframe, .overlay').css({'opacity': 1, 'display': 'flex'});
      $('body').attr('style', 'overflow: hidden;');
      $('.history__video-iframe').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
      });
    });
    $('.overlay').click(function () {
      $('.history__video-iframe, .overlay').css({'opacity': 0, 'display': 'none'});
      $('body').removeAttr('style');
      $('.history__video-iframe').each(function() {
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
      });
    });
    $(document).keydown(function(event) {
      if (event.keyCode === 27) {
        event.stopPropagation();
        $('.history__video-iframe, .overlay').css({'opacity': 0, 'display': 'none'});
        $('body').removeAttr('style');
        $('.history__video-iframe').each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
      }
    });
  };

  var showPopUpDiploma = function () {
    $('.team__diploma-link').click(function (event) {
      event.preventDefault();
      $('.team__diploma-popup, .overlay').css({'opacity': 1, 'display': 'flex'});
      $('body').attr('style', 'overflow: hidden;');
    });
    $('.team__diploma-close, .team__slider .overlay').click(function () {
      $('.team__diploma-popup, .overlay').css({'opacity': 0, 'display': 'none'});
      $('body').removeAttr('style');
    });
    $(document).keydown(function(event) {
      if (event.keyCode === 27) {
        event.stopPropagation();
        $('.team__diploma-popup, .overlay').css({'opacity': 0, 'display': 'none'});
        $('body').removeAttr('style');
      }
    });
  };

  hangFlexslider();
  showMenu();
  slowScroll();
  getBlockQuestionsSlider();
  showPopUpVideo();
  showPopUpDiploma();

}());
