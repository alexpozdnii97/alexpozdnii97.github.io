$('.burger-button').click( function(){
  $('.mobile-menu').toggleClass('active');
}); 

$('.mobile-menu-close').click( function(){
  $('.mobile-menu').toggleClass('active');
}); 



$('.slider-wrapper').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:'<svg class="slick-prev" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0C9.62614 0 0 9.62614 0 21.5C0 33.3739 9.62614 43 21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 0 21.5 0ZM25.8137 15.0637C26.1697 14.6951 26.3667 14.2013 26.3623 13.6889C26.3578 13.1764 26.1523 12.6862 25.7899 12.3238C25.4275 11.9614 24.9373 11.7558 24.4248 11.7514C23.9123 11.7469 23.4186 11.9439 23.05 12.3L15.2318 20.1181C14.8654 20.4847 14.6595 20.9817 14.6595 21.5C14.6595 22.0183 14.8654 22.5153 15.2318 22.8819L23.05 30.7C23.4186 31.0561 23.9123 31.2531 24.4248 31.2486C24.9373 31.2442 25.4275 31.0386 25.7899 30.6762C26.1523 30.3138 26.3578 29.8236 26.3623 29.3111C26.3667 28.7987 26.1697 28.305 25.8137 27.9363L19.3774 21.5L25.8137 15.0637Z" fill="#00A3FF"/></svg>',
  nextArrow:'<svg class="slick-next" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 -8.41544e-07 21.5 -1.87959e-06C9.62614 -2.91764e-06 2.91764e-06 9.62613 1.87959e-06 21.5C8.41544e-07 33.3739 9.62614 43 21.5 43ZM17.1863 27.9363C16.8303 28.3049 16.6333 28.7987 16.6377 29.3111C16.6422 29.8236 16.8477 30.3138 17.2101 30.6762C17.5725 31.0386 18.0627 31.2442 18.5752 31.2486C19.0877 31.2531 19.5814 31.0561 19.95 30.7L27.7682 22.8819C28.1346 22.5153 28.3405 22.0183 28.3405 21.5C28.3405 20.9817 28.1346 20.4847 27.7682 20.1181L19.95 12.2999C19.5814 11.9439 19.0877 11.7469 18.5752 11.7514C18.0627 11.7558 17.5725 11.9614 17.2101 12.3238C16.8477 12.6861 16.6422 13.1764 16.6377 13.6889C16.6333 14.2013 16.8303 14.695 17.1863 15.0637L23.6226 21.5L17.1863 27.9363Z" fill="#00A3FF"/></svg>',
   responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.supporters-slider').on('init afterChange', function(e, slick){
  let currentSlick = $('.slick-current.slick-active', slick.$slideTrack);
  let prevName = currentSlick.prev().data('slide-name');
  let nextName = currentSlick.next().data('slide-name');
  
  slick.$prevArrow.text(prevName);
  slick.$nextArrow.text(nextName);
});





 $('.supporters-slider') .on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(currentSlide);
  console.log(nextSlide); 
  $('#video'+currentSlide)[0].pause();
   $('#video'+nextSlide)[0].play();
});

$('.supporters-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
});




$('.interviews-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow:'<svg class="slick-prev slick-arrow" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 9L13.5 18L22.5 27" stroke="#00A3FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  nextArrow:'<svg class="slick-next slick-arrow" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 27L22.5 18L13.5 9" stroke="#00A3FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  
});


$(document).ready(function() {
  var slickOpts = {
    slidesToShow: 4,
    slidesToScroll: 4,
    //centerMode: true,
    easing: 'swing',
    speed: 700,
    dots: true,
    arrows:true,
    customPaging: function(slick,index) {
        return '<a>' + (index + 1) + '</a>';
    },
     responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    

    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
    
  ]
    
  };
  $('.recently-posted-slider').slick(slickOpts);
});


$('.recently-posted-slider-no-pagination').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  //centerMode: true,
  easing: 'swing',
  speed: 700,
  dots: true,
  arrows:false,
   responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]
});


$('.best-by-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  //centerMode: true,
  easing: 'swing',
  speed: 700,
  dots: true,
  arrows:true,
  prevArrow:'<svg class="slick-prev" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0C9.62614 0 0 9.62614 0 21.5C0 33.3739 9.62614 43 21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 0 21.5 0ZM25.8137 15.0637C26.1697 14.6951 26.3667 14.2013 26.3623 13.6889C26.3578 13.1764 26.1523 12.6862 25.7899 12.3238C25.4275 11.9614 24.9373 11.7558 24.4248 11.7514C23.9123 11.7469 23.4186 11.9439 23.05 12.3L15.2318 20.1181C14.8654 20.4847 14.6595 20.9817 14.6595 21.5C14.6595 22.0183 14.8654 22.5153 15.2318 22.8819L23.05 30.7C23.4186 31.0561 23.9123 31.2531 24.4248 31.2486C24.9373 31.2442 25.4275 31.0386 25.7899 30.6762C26.1523 30.3138 26.3578 29.8236 26.3623 29.3111C26.3667 28.7987 26.1697 28.305 25.8137 27.9363L19.3774 21.5L25.8137 15.0637Z" fill="#00A3FF"/></svg>',
  nextArrow:'<svg class="slick-next" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 -8.41544e-07 21.5 -1.87959e-06C9.62614 -2.91764e-06 2.91764e-06 9.62613 1.87959e-06 21.5C8.41544e-07 33.3739 9.62614 43 21.5 43ZM17.1863 27.9363C16.8303 28.3049 16.6333 28.7987 16.6377 29.3111C16.6422 29.8236 16.8477 30.3138 17.2101 30.6762C17.5725 31.0386 18.0627 31.2442 18.5752 31.2486C19.0877 31.2531 19.5814 31.0561 19.95 30.7L27.7682 22.8819C28.1346 22.5153 28.3405 22.0183 28.3405 21.5C28.3405 20.9817 28.1346 20.4847 27.7682 20.1181L19.95 12.2999C19.5814 11.9439 19.0877 11.7469 18.5752 11.7514C18.0627 11.7558 17.5725 11.9614 17.2101 12.3238C16.8477 12.6861 16.6422 13.1764 16.6377 13.6889C16.6333 14.2013 16.8303 14.695 17.1863 15.0637L23.6226 21.5L17.1863 27.9363Z" fill="#00A3FF"/></svg>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
       
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        variableWidth: true,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.roadmap-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  dots:false,
  prevArrow:'<svg class="slick-prev" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0C9.62614 0 0 9.62614 0 21.5C0 33.3739 9.62614 43 21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 0 21.5 0ZM25.8137 15.0637C26.1697 14.6951 26.3667 14.2013 26.3623 13.6889C26.3578 13.1764 26.1523 12.6862 25.7899 12.3238C25.4275 11.9614 24.9373 11.7558 24.4248 11.7514C23.9123 11.7469 23.4186 11.9439 23.05 12.3L15.2318 20.1181C14.8654 20.4847 14.6595 20.9817 14.6595 21.5C14.6595 22.0183 14.8654 22.5153 15.2318 22.8819L23.05 30.7C23.4186 31.0561 23.9123 31.2531 24.4248 31.2486C24.9373 31.2442 25.4275 31.0386 25.7899 30.6762C26.1523 30.3138 26.3578 29.8236 26.3623 29.3111C26.3667 28.7987 26.1697 28.305 25.8137 27.9363L19.3774 21.5L25.8137 15.0637Z" fill="#00A3FF"/></svg>',
  nextArrow:'<svg class="slick-next" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 -8.41544e-07 21.5 -1.87959e-06C9.62614 -2.91764e-06 2.91764e-06 9.62613 1.87959e-06 21.5C8.41544e-07 33.3739 9.62614 43 21.5 43ZM17.1863 27.9363C16.8303 28.3049 16.6333 28.7987 16.6377 29.3111C16.6422 29.8236 16.8477 30.3138 17.2101 30.6762C17.5725 31.0386 18.0627 31.2442 18.5752 31.2486C19.0877 31.2531 19.5814 31.0561 19.95 30.7L27.7682 22.8819C28.1346 22.5153 28.3405 22.0183 28.3405 21.5C28.3405 20.9817 28.1346 20.4847 27.7682 20.1181L19.95 12.2999C19.5814 11.9439 19.0877 11.7469 18.5752 11.7514C18.0627 11.7558 17.5725 11.9614 17.2101 12.3238C16.8477 12.6861 16.6422 13.1764 16.6377 13.6889C16.6333 14.2013 16.8303 14.695 17.1863 15.0637L23.6226 21.5L17.1863 27.9363Z" fill="#00A3FF"/></svg>',
   responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]
});


$(".headers-in-here").html(
    $('.post-text-editor h2[id^="link"]').get().map(element => `<li><a href="#${element.id}">${$(element).text()}</a></li>`).join("")
);







let slider = $(".trophies-slider");

// slider.on("init", function() {
//   let actives = slider.find(".slick-active");
  
//   for(let i = 0; i < actives.length; i++) {
//     let $active = $(actives[i]);
//     $active.addClass("active-" + i);
//   }
// })

//in the middle of transition (setTimeout: speed / 2)
//get next actives (for next: current actives + 1 index; for previous: current - 1)

// slider.on("afterChange", function(ev, slick, current, next) {
//   let actives = slider.find(".slick-active"),
//       direction = current - next,
//       slides = slick.$slides,
//       index,
//       speed = slick.options.speed;
  
//   console.log(speed / 2);
  
//   if(direction == 1 || direction == ((slides.length - 1) * -1)) {
//     index = -1;
//   }
//   else if(direction == -1 || direction == (slides.length - 1)) {
//     index = 1;
//   }
  

//   for(let i = 0; i < actives.length; i++) {
//     let $active = $(actives[i]);
    
//     let el = actives[i],
//         prefix = "active-";

//     var classes = el.className.split(" ").filter(function(c) {
//         return c.lastIndexOf(prefix, 0) !== 0;
//     });
    
    

//     el.className = classes.join(" ").trim(); 
    
//     $active.addClass("active-" + i);
//   }
// });

slider.slick({
  arrows: true,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "0",
  prevArrow:'<svg class="slick-prev" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0C9.62614 0 0 9.62614 0 21.5C0 33.3739 9.62614 43 21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 0 21.5 0ZM25.8137 15.0637C26.1697 14.6951 26.3667 14.2013 26.3623 13.6889C26.3578 13.1764 26.1523 12.6862 25.7899 12.3238C25.4275 11.9614 24.9373 11.7558 24.4248 11.7514C23.9123 11.7469 23.4186 11.9439 23.05 12.3L15.2318 20.1181C14.8654 20.4847 14.6595 20.9817 14.6595 21.5C14.6595 22.0183 14.8654 22.5153 15.2318 22.8819L23.05 30.7C23.4186 31.0561 23.9123 31.2531 24.4248 31.2486C24.9373 31.2442 25.4275 31.0386 25.7899 30.6762C26.1523 30.3138 26.3578 29.8236 26.3623 29.3111C26.3667 28.7987 26.1697 28.305 25.8137 27.9363L19.3774 21.5L25.8137 15.0637Z" fill="#00A3FF"/></svg>',
  nextArrow:'<svg class="slick-next" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 -8.41544e-07 21.5 -1.87959e-06C9.62614 -2.91764e-06 2.91764e-06 9.62613 1.87959e-06 21.5C8.41544e-07 33.3739 9.62614 43 21.5 43ZM17.1863 27.9363C16.8303 28.3049 16.6333 28.7987 16.6377 29.3111C16.6422 29.8236 16.8477 30.3138 17.2101 30.6762C17.5725 31.0386 18.0627 31.2442 18.5752 31.2486C19.0877 31.2531 19.5814 31.0561 19.95 30.7L27.7682 22.8819C28.1346 22.5153 28.3405 22.0183 28.3405 21.5C28.3405 20.9817 28.1346 20.4847 27.7682 20.1181L19.95 12.2999C19.5814 11.9439 19.0877 11.7469 18.5752 11.7514C18.0627 11.7558 17.5725 11.9614 17.2101 12.3238C16.8477 12.6861 16.6422 13.1764 16.6377 13.6889C16.6333 14.2013 16.8303 14.695 17.1863 15.0637L23.6226 21.5L17.1863 27.9363Z" fill="#00A3FF"/></svg>',
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]

});


$('.team-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots:false,
  prevArrow:'<svg class="slick-prev" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0C9.62614 0 0 9.62614 0 21.5C0 33.3739 9.62614 43 21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 0 21.5 0ZM25.8137 15.0637C26.1697 14.6951 26.3667 14.2013 26.3623 13.6889C26.3578 13.1764 26.1523 12.6862 25.7899 12.3238C25.4275 11.9614 24.9373 11.7558 24.4248 11.7514C23.9123 11.7469 23.4186 11.9439 23.05 12.3L15.2318 20.1181C14.8654 20.4847 14.6595 20.9817 14.6595 21.5C14.6595 22.0183 14.8654 22.5153 15.2318 22.8819L23.05 30.7C23.4186 31.0561 23.9123 31.2531 24.4248 31.2486C24.9373 31.2442 25.4275 31.0386 25.7899 30.6762C26.1523 30.3138 26.3578 29.8236 26.3623 29.3111C26.3667 28.7987 26.1697 28.305 25.8137 27.9363L19.3774 21.5L25.8137 15.0637Z" fill="#00A3FF"/></svg>',
  nextArrow:'<svg class="slick-next" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 -8.41544e-07 21.5 -1.87959e-06C9.62614 -2.91764e-06 2.91764e-06 9.62613 1.87959e-06 21.5C8.41544e-07 33.3739 9.62614 43 21.5 43ZM17.1863 27.9363C16.8303 28.3049 16.6333 28.7987 16.6377 29.3111C16.6422 29.8236 16.8477 30.3138 17.2101 30.6762C17.5725 31.0386 18.0627 31.2442 18.5752 31.2486C19.0877 31.2531 19.5814 31.0561 19.95 30.7L27.7682 22.8819C28.1346 22.5153 28.3405 22.0183 28.3405 21.5C28.3405 20.9817 28.1346 20.4847 27.7682 20.1181L19.95 12.2999C19.5814 11.9439 19.0877 11.7469 18.5752 11.7514C18.0627 11.7558 17.5725 11.9614 17.2101 12.3238C16.8477 12.6861 16.6422 13.1764 16.6377 13.6889C16.6333 14.2013 16.8303 14.695 17.1863 15.0637L23.6226 21.5L17.1863 27.9363Z" fill="#00A3FF"/></svg>',
  responsive: [
    
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.testemonials-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  prevArrow:'<svg class="slick-prev" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0C9.62614 0 0 9.62614 0 21.5C0 33.3739 9.62614 43 21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 0 21.5 0ZM25.8137 15.0637C26.1697 14.6951 26.3667 14.2013 26.3623 13.6889C26.3578 13.1764 26.1523 12.6862 25.7899 12.3238C25.4275 11.9614 24.9373 11.7558 24.4248 11.7514C23.9123 11.7469 23.4186 11.9439 23.05 12.3L15.2318 20.1181C14.8654 20.4847 14.6595 20.9817 14.6595 21.5C14.6595 22.0183 14.8654 22.5153 15.2318 22.8819L23.05 30.7C23.4186 31.0561 23.9123 31.2531 24.4248 31.2486C24.9373 31.2442 25.4275 31.0386 25.7899 30.6762C26.1523 30.3138 26.3578 29.8236 26.3623 29.3111C26.3667 28.7987 26.1697 28.305 25.8137 27.9363L19.3774 21.5L25.8137 15.0637Z" fill="#00A3FF"/></svg>',
  nextArrow:'<svg class="slick-next" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 -8.41544e-07 21.5 -1.87959e-06C9.62614 -2.91764e-06 2.91764e-06 9.62613 1.87959e-06 21.5C8.41544e-07 33.3739 9.62614 43 21.5 43ZM17.1863 27.9363C16.8303 28.3049 16.6333 28.7987 16.6377 29.3111C16.6422 29.8236 16.8477 30.3138 17.2101 30.6762C17.5725 31.0386 18.0627 31.2442 18.5752 31.2486C19.0877 31.2531 19.5814 31.0561 19.95 30.7L27.7682 22.8819C28.1346 22.5153 28.3405 22.0183 28.3405 21.5C28.3405 20.9817 28.1346 20.4847 27.7682 20.1181L19.95 12.2999C19.5814 11.9439 19.0877 11.7469 18.5752 11.7514C18.0627 11.7558 17.5725 11.9614 17.2101 12.3238C16.8477 12.6861 16.6422 13.1764 16.6377 13.6889C16.6333 14.2013 16.8303 14.695 17.1863 15.0637L23.6226 21.5L17.1863 27.9363Z" fill="#00A3FF"/></svg>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



if (window.matchMedia("(max-width: 768px)").matches) {
  
  $('.card-slider').slick(
    {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow:'<svg class="slick-prev" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0C9.62614 0 0 9.62614 0 21.5C0 33.3739 9.62614 43 21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 0 21.5 0ZM25.8137 15.0637C26.1697 14.6951 26.3667 14.2013 26.3623 13.6889C26.3578 13.1764 26.1523 12.6862 25.7899 12.3238C25.4275 11.9614 24.9373 11.7558 24.4248 11.7514C23.9123 11.7469 23.4186 11.9439 23.05 12.3L15.2318 20.1181C14.8654 20.4847 14.6595 20.9817 14.6595 21.5C14.6595 22.0183 14.8654 22.5153 15.2318 22.8819L23.05 30.7C23.4186 31.0561 23.9123 31.2531 24.4248 31.2486C24.9373 31.2442 25.4275 31.0386 25.7899 30.6762C26.1523 30.3138 26.3578 29.8236 26.3623 29.3111C26.3667 28.7987 26.1697 28.305 25.8137 27.9363L19.3774 21.5L25.8137 15.0637Z" fill="#00A3FF"/></svg>',
      nextArrow:'<svg class="slick-next" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 43C33.3739 43 43 33.3739 43 21.5C43 9.62614 33.3739 -8.41544e-07 21.5 -1.87959e-06C9.62614 -2.91764e-06 2.91764e-06 9.62613 1.87959e-06 21.5C8.41544e-07 33.3739 9.62614 43 21.5 43ZM17.1863 27.9363C16.8303 28.3049 16.6333 28.7987 16.6377 29.3111C16.6422 29.8236 16.8477 30.3138 17.2101 30.6762C17.5725 31.0386 18.0627 31.2442 18.5752 31.2486C19.0877 31.2531 19.5814 31.0561 19.95 30.7L27.7682 22.8819C28.1346 22.5153 28.3405 22.0183 28.3405 21.5C28.3405 20.9817 28.1346 20.4847 27.7682 20.1181L19.95 12.2999C19.5814 11.9439 19.0877 11.7469 18.5752 11.7514C18.0627 11.7558 17.5725 11.9614 17.2101 12.3238C16.8477 12.6861 16.6422 13.1764 16.6377 13.6889C16.6333 14.2013 16.8303 14.695 17.1863 15.0637L23.6226 21.5L17.1863 27.9363Z" fill="#00A3FF"/></svg>',
      responsive: [
    
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    }
  );
} 



$('open-btn').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('#blog-single-content').on('click', function(){
    $(this).toggleClass('active');
});


$("#expand-grid").click( function (){
    $(this).parent().toggleClass("collapsed");
});










 







