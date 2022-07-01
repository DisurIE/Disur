const swiper = new Swiper('.swiper', {
    // Optional parameters
 
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    renderBullet: function (index, className) {
      return `<span class="dot swiper-pagination-bullet">${index}</span>`;
        },
    },
    autoplay: {
        delay: 5000,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });

  
  

   new Swiper('.choice-swiper', {
    
    navigation: {
        nextEl: '.choice-swiper-button-next',
        prevEl: '.choice-swiper-button-prev',
      },
      slidesPerGroup: 4,
      pagination: {
        el: '.choice-swiper-pagination',
        clickable: true,
      },
     loop: true,
     loopedSlides: 4 ,
     autoplay: {
        delay: 3000,
      },
      
     breakpoints: {
         200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loopedSlides: 1 ,
         },
         624: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          loopedSlides: 2 ,
       },
         975: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            loopedSlides: 3 ,
         },
         1200: {
            slidesPerView: 4,
         }
     },

});




document.querySelector('.wrapper-dropdown').addEventListener('click', (e) => {
  document.querySelector('.wrapper-dropdown').classList.toggle('active');
});