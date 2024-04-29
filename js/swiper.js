
// ==================================================  
    
// Features swiper Slide Sale Slide
var swiper = new Swiper(".sale_sec", {
    slidesPerView: 4,
    spaceBetween:30,
    autoplay:{
      delay:3000,
  }, 
  navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  loop: true,
  breakpoints: {
    1600: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween:30
    },
    700:{
      slidesPerView: 3,
      spaceBetween:15
    },
    0: {
      slidesPerView: 2,
      spaceBetween:10
    }
  }
});
  

// ================================================================================================================================
// ===============================================Top Selled Products Slider [2]-================
new Swiper('.Bolla', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//==========================================================
  //============= Clients Slider=======[3]==============

  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 7,
        spaceBetween: 20
      }
    }
  });

  // ===========================================================================================