$(document).ready(function () {
  $(".reviews__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: ".reviews__arrow--left",
    nextArrow: ".reviews__arrow--right",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
  });
});
