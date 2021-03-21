var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 630) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
$('.nav-button').click(function() {
      var $this = $(this);
      if ($this.parent().hasClass('collapsed')) {
          $this.parent().removeClass('collapsed');
      } else 
      $this.parent().addClass('collapsed');
  });
$(document).ready(function(){
      $('.works-slider').slick({
       nextArrow:"<button class='slick-next'><i class='fas fa-arrow-right'></i></button>",
       prevArrow:"<button class='slick-prev'><i class='fas fa-arrow-left'></i></button>",
      });
    });
$('.team-slider').slick({
       speed: 300,
       slidesToShow: 5,
       nextArrow:"<button class='slick-next'><i class='fas fa-arrow-right'></i></button>",
       prevArrow:"<button class='slick-prev'><i class='fas fa-arrow-left'></i></button>",
       responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },     
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 545,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
     $('.design-slider').slick({
       speed: 300,
       slidesToShow:5,
       nextArrow:"<button class='slick-next'><i class='fas fa-arrow-right'></i></button>",
       prevArrow:"<button class='slick-prev'><i class='fas fa-arrow-left'></i></button>",
       responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },     
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 545,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });