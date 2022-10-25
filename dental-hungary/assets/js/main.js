$('.reviews-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  arrows:true,
});

$('.toggle-btn').click( function(){
  $('.mobile-menu').toggleClass('active');
}); 

$('.close-btn').click( function(){
  $('.mobile-menu').toggleClass('active');
}); 