$(document).ready(function () {
  $(".reviews__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: ".reviews__arrow_left",
    nextArrow: ".reviews__arrow_right",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
  });

  $.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
  }, 'File size must be less than {0}');

  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });

  $("#form").validate({

    rules: {
      name: {
        minlength: 2,
      },
      phone: {
        required: true,
        rangelength: [6, 18],
      },
      email: {
        required: true,
        email: true,
      },
      agreement: {
        required: true,
      },
      file: {
        required: false,
        extension: "jpg|png",
        filesize: 10000000,
      }
    },
    messages: {
      name: {
        minlength: "Имя должно содержать не менее 2 символов",
      },
      phone: {
        required: "Вы забыли указать номер телефона",
        rangelength: "Проверьте верно ли указан номер телефона",
      },
      email: {
        required: "Вы забыли указать email",
      },
      agreement: {
        required: "Необходимо принять соглашение на обработку персональных данных",
      },
      file: {
        extension: "Можно загрузить только файл с расширением jpg или png и размером не более 10МБ",
        filesize: "Макс. размер файла: 10 МБ"
      }
    },
    errorContainer: $('.feedback__error-container'),
    errorLabelContainer: $('.feedback__error-container ul'),
    wrapper: 'li'
  });

  $('.phone_with_ddd').mask('+7 (000) 000-00-00');

});
