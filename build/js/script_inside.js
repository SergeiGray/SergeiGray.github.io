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
        smoothHeight: false,
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
        smoothHeight: false,
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
        smoothHeight: false,
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
        start: function(slider) {
          $('.experience__counter_total').text(slider.count);
          $('.experience__counter_index').text(slider.currentSlide + 1);
        },
        before: function(slider) {
        },
        after: function(slider) {
          $('.experience__counter_index').text(slider.currentSlide + 1);
        }
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
        smoothHeight: false,
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
        smoothHeight: false,
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
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 0,
        smoothHeight: false,
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
        start: function(slider) {
          $('.experience__counter_total').text(slider.count);
          $('.experience__counter_index').text(slider.currentSlide + 1);
        },
        before: function(slider) {
          $('.experience__counter_index').text(slider.currentSlide + 1);
        },
        after: function(slider) {
          $('.experience__counter_index').text(slider.currentSlide + 1);
        }
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
        maxItems: 1,
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

  var showMenu = function () {
    $('.open_menu').click( function (evt) {
      // evt.preventDefault();
      $('.menu, .overlay').addClass('display_on');
    });

    $('.close, .overlay, .menu .item').click( function (evt) {
      // evt.preventDefault();
      $('.menu, .overlay').removeClass('display_on');
    });
  };

  var getValidForm = function () {
    $(document).ready(function() {

      $('button[type="submit"]').click(function(){
        $('#contacts_form').validate({

          rules: {
            name: {
              required: true,
            },
           phone: {
              required: true,
              number: true
            },
            agree: {
              required : true,
            }
          },

          showErrors: function(errorMap, errorList) {
            $('.form_input_name').attr("placeholder", "Имя").removeClass('error');
            $('.form_input_tel').attr("placeholder", "Телефон").removeClass('error');
            $('.form_input_check_policy').removeClass('error');

            $.each(errorList, function(index, el) {

              if (el.element.name === 'name') {
                $(el.element).attr("placeholder", "Введите ваше имя").addClass('error');
              }

              if (el.element.name === 'phone') {
                $(el.element).attr("placeholder", "Введите ваш телефон").addClass('error');
              }

              if (el.element.name === 'agree') {
                $(el.element).addClass('error');
              }
            });

          },

          onfocusout: function(elem) {
            $('.form_input_name').attr("placeholder", "Имя").removeClass('error');
            $('.form_input_tel').attr("placeholder", "Телефон").removeClass('error');
            $('.form_input_check_policy').removeClass('error');
          },

          submitHandler: function(){
               sendAjaxForm('contacts_form', 'ajax-form.php');
           return false;
          }
        });
      });

      function sendAjaxForm(contacts_form, url) {
        $.ajax({
          url:     url, //url страницы (ajax-form.php)
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: $("#"+contacts_form).serialize(),  // Сеарилизуем объекты формы
          success: function(response) { //Данные отправлены успешно

            //Ваш код если успешно отправлено
            alert('Ваш запрос отправлен. Мы скоро с вами свяжемся!');
          },
          error: function(response) { // Данные не отправлены

            //Ваш код если ошибка
            alert('Ошибка отправления.');
          }
        });
      }
    });
  };

  var getReload = function () {
    $(window).on("orientationchange",function(event){
      location.reload();
    });

    $(window).resize(function(){
      location.reload();
    });
  };

  hangFlexslider();
  showMenu();
  getValidForm();
  getReload();

}());
