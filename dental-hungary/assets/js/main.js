$('.reviews-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  arrows:true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows: true,
        dots:true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('.toggle-btn').click( function(){
  $('.mobile-menu').toggleClass('active');
  $('body').toggleClass('active');
}); 

$('.close-btn').click( function(){
  $('.mobile-menu').toggleClass('active');
  $('body').toggleClass('active');
}); 