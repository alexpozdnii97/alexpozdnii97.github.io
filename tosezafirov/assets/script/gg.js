$('.slide__items').on('init afterChange', function(e, slick){
  let currentSlick = $('.slick-current.slick-active', slick.$slideTrack)
  let prevName = currentSlick.prev().data('slide-name')
  let nextName = currentSlick.next().data('slide-name')

  slick.$prevArrow.text(prevName)
  slick.$nextArrow.text(nextName)
});


//https://codepen.io/aswinkumar863/pen/abOQLVx