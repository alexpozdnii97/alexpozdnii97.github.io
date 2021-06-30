$('.certificates-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow:"<button class='slick-next'><img src='img/slider-arrow-right.png'></button>",
  prevArrow:"<button class='slick-prev'><img src='img/slider-arrow-left.png'></button>",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

if (window.matchMedia("(max-width: 768px)").matches) {
  $('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:"<button class='slick-next'><img src='img/slider-arrow-right.png'></button>",
  prevArrow:"<button class='slick-prev'><img src='img/slider-arrow-left.png'></button>",
  
});
} 