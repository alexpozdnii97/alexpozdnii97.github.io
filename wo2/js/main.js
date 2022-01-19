const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');

open_btn.addEventListener('click', () => {
	popup.style.display = 'flex';
	main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
});

close_btn.addEventListener('click', () => {
	main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
	setTimeout(() => {
		popup.style.display = 'none';
	}, 500);
});
window.addEventListener('click', (e) => {
	if (e.target == document.querySelector('.popup-overlay')) {
		main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
		setTimeout(() => {
			popup.style.display = 'none';
		}, 500);
	}
});

$('.portfolio-slider').slick({
	arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '',
        slidesToShow: 2
      }
    },
		{
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '',
        slidesToShow: 2
      }
    },
		{
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '',
        slidesToShow: 1
      }
    }
  ]
});
$('.testemonials-slider').slick({
	arrows: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
	responsive: [
		{
      breakpoint: 1399,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '',
        slidesToShow: 2
      }
    },
		{
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '',
        slidesToShow: 1
      }
    },
		{
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '',
        slidesToShow: 1
      }
    }
  ]
});