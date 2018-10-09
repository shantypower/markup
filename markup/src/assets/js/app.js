$(document).ready(function () {
  var data = {
    updates: [
      {
        name: 'Влад Гончаров',
        photo: 'user1.png',
        vklink: 'vk.com/ex3der',
        reviewText: 'Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.'
      },
      {
        name: 'Ваня Мирошников',
        photo: 'user2.png',
        vklink: 'vk.com/id16362672',
        reviewText: 'Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.'
      },
      {
        name: 'Алексей Волков',
        photo: 'user3.png',
        vklink: 'vk.com/asgalex',
        reviewText: 'Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.'
      }
    ]
  }

  var template = Handlebars.compile($('#template').html());
  $('.updates').html(template(data));

  $(".reviews__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: ".reviews__arrow--left",
    nextArrow: ".reviews__arrow--right",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          mobileFirst: false
        }
      }]
  });
});
