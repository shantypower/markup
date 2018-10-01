$(document).ready(function () {
  $('.reviews__list').not('.slick-initialized').slick({
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

  $(document).ready(function () {
    $("#form").validationEngine('attach', { promptPosition: "centerRight", scroll: false });
  });
});
