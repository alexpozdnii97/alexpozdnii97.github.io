$(window).on("load", function () {
      var myDelay = 1; // 3sec
    setTimeout(() =>   {
      $(".loader-bar").fadeOut("slow");
    }, myDelay);
    setTimeout(() =>   {
      
      myFade();
  
    }, myDelay+500);
  });
    $('#main').vide('img/porshe.mp4', {
      volume: 1,
      playbackRate: 1,
      muted: true,
      loop: true,
      autoplay: true,
      resizing: true,
    });
  //gsap функція для розкривашки
  function myFade() {
      TweenMax.to(".myBtn",1,{
        y:-100,
        opacity:0
      });
      TweenMax.from(".loader",2,{
        ease: Power2.easeInOuT
      });
      TweenMax.to(".loader",2,{
        delay:0.8, //2.6
        top:"-110%",
        ease: Expo.easeInOut
      });
      TweenMax.from(".loader-sub",2,{
        ease: Power2.easeInOuT
      });
      TweenMax.to(".loader-sub",2,{
        delay:0.8, //2.6
        top:"110%",
        ease: Expo.easeInOut
      });
      
      TweenMax.from(".content",2,{
        delay:0.5, //3.2
        opacity:0,
        ease: Power2>easeInOuT
      });
      TweenMax.to(".content", 2,{
        opacity:0.5,
        y:-300,
        delay:1, //3.2
        ease: Power2.easeInOuT
      });
      $(".loader").fadeOut("slow");
      $(".loader-sub").fadeOut("slow");
    }

    $(".project-container").slick({
    autoplay: false,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    speed: 200,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    }
    
  ]
  });

 

  $(".blog-container").slick({
    autoplay: false,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 200,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
  });

   

  $( "div.youtube-video-place" ).click(function() {
    $( this ).html('<iframe frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive-item" src="' + $(this).data('yt-url') + '"></iframe>');
  });

$(document).ready(function() {
	  $('#fullpage').fullpage({
		  //options here
		  autoScrolling:true,
      //navigation: true,
      paddingBottom: 0,
      responsiveWidth: 991,
      fitToSection: true,
	  });
	  //methods
	  $.fn.fullpage.setAllowScrolling(true);
});
function initMap() {
        // The location of Uluru
        const uluru = { lat: 48.933666 , lng: 24.729925 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: uluru,
          styles:[
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#8c8c8c"
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }

  