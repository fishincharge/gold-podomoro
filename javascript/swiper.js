var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 25,
  centerSlide: 'true',
  fade:'true',
  grabCursor: 'true',
  grid:{
    fill: 'row',
    rows: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".bukti-transaksi-next",
    prevEl: ".bukti-transaksi-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 2,
      grid:{
        fill: 'row',
        rows: 2,
      },
    },
    1100:{
      slidesPerView: 3,
      grid:{
        fill: 'row',
        rows: 2,
      },
    }
  }

  
});

var swiperProduct = new Swiper(".product-content", {
  
  slidesPerView: 1,
  spaceBetween: 25,
  centerSlide: 'true',
  fade:'true',
  grabCursor: 'true',
  pagination: {
    el: ".product-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".product-button-next",
    prevEl: ".product-button-prev",
  },
 
});

var swiperRp = new Swiper(".rp-content", {
  
  slidesPerView: 1,
  spaceBetween: 25,
  centerSlide: 'true',
  fade:'true',
  grabCursor: 'true',
  
  pagination: {
    el: ".rp-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".rp-button-next",
    prevEl: ".rp-button-prev",
  },

 
});

var swiperFigura = new Swiper(".figura-content", {
  
  slidesPerView: 1,
  spaceBetween: 25,
  centerSlide: 'true',
  fade:'true',
  grabCursor: 'true',
  pagination: {
    el: ".figura-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".figura-button-next",
    prevEl: ".figura-button-prev",
  },

 
});

var swiperPlakat = new Swiper(".plakat-content", {
  
  slidesPerView: 1,
  spaceBetween: 25,
  centerSlide: 'true',
  fade:'true',
  grabCursor: 'true',
  pagination: {
    el: ".plakat-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".plakat-button-next",
    prevEl: ".plakat-button-prev",
  },

 
});

var swiperPlakat = new Swiper(".box-content", {
  
  slidesPerView: 1,
  spaceBetween: 25,
  centerSlide: 'true',
  fade:'true',
  grabCursor: 'true',
  pagination: {
    el: ".box-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".box-button-next",
    prevEl: ".box-button-prev",
  },

 
});