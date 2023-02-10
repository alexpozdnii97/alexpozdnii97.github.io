$('.team-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  
  
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


 $(".menu-item-has-children").prepend('<img class="down-arrow" src="../assets/img/chevron-down.svg" alt="">');
 $('.menu-item-has-children  .down-arrow').click(function() {
    $('.menu-item-has-children').toggleClass('active');
  });



  $('#menu-open').click(function() {
    $('.mobile-menu').toggleClass('active');
  });

   $('#menu-close').click(function() {
    $('.mobile-menu').toggleClass('active');
  });