    const burger = document.querySelector('.menu-icon');

    burger.addEventListener('click', () => {
        document.querySelector('.header__nav').classList.toggle('header__nav_active');
        burger.classList.toggle('menu-icon_active');
        document.querySelector('body').classList.toggle('hidden');
    });

    $(document).ready(function(){
        $('.reviews__slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            nextArrow: $('.reviews__next'),
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [

                {
                    breakpoint: 768,
                    settings: {
                        nextArrow: $('none'),
                    }
                },
            ]
        });
      });

    const aboutBG = document.querySelector('.about'),
          aboutBtn = document.querySelector('.about__button');

          aboutBtn.addEventListener('mouseover', ()=> {
            if($(window).width() >= 900){
            aboutBG.style.background = 'linear-gradient(to right, #139B17 50%, #5818A4 50%)';
            }
            aboutBG.classList.add('about_hover');
            document.querySelector('.about__content').classList.add('hide');
            document.querySelector('.about__content_hover').classList.remove('hidden');
            document.querySelector('.about__content_hover').classList.add('visible');
          });
          aboutBtn.addEventListener('mouseout', ()=> {
            if($(window).width() >= 900){
            aboutBG.style.background = 'linear-gradient(to right, #FAF153 50%, #68E6FC 50%)';
            }
            aboutBG.classList.remove('about_hover');
            document.querySelector('.about__content').classList.remove('hide');
            document.querySelector('.about__content_hover').classList.add('hidden');
            document.querySelector('.about__content_hover').classList.remove('visible');
          });

// ==============================================================================================================

          const popupLinks = document.querySelectorAll('.popup-link'),
          body = document.querySelector('body'),
          lockPadding = document.querySelectorAll('.lock-padding');
    
          let unlock = true;
    
          const timeout = 400;
    
          if (popupLinks.length > 0){
              for(let i = 0; i < popupLinks.length; i++){
                  const popupLink = popupLinks[i];
                  popupLink.addEventListener('click', function (e) {
                      const popupName = popupLink.getAttribute('href').replace('#', '');
                      const currentPopup = document.getElementById(popupName);
                      popupOpen(currentPopup);
                      e.preventDefault();
                  })
              }
          }
    
          const popupCloseIcon = document.querySelectorAll('.close-popup');
    
          if (popupCloseIcon.length > 0){
            for(let i = 0; i < popupCloseIcon.length; i++){
                const el = popupCloseIcon[i];
                el.addEventListener('click', (e) => {
                    popupClose(el.closest('.popup'));
                    e.preventDefault();
                });
            }
          }
    
          
    
    
          function popupOpen(currentPopup) {
              if (currentPopup && unlock){
                  const popupActive = document.querySelector('.popup.open');
                  if(popupActive) {
                      popupClose(popupActive, false);
                  }
                  else{
                      bodyLock();
                  }
                  currentPopup.classList.add('open');
                  currentPopup.addEventListener("click", function (e) {
                      if (!e.target.closest('.popup__content')){
                          popupClose(e.target.closest('.popup'));
                      }
                  })
              }
          }
          function popupClose(popupActive, doUnlock = true){
            if(unlock){
                popupActive.classList.remove('open');
                if(doUnlock){
                    bodyUnlock();
                }
            }
          }
          function bodyLock(){
              const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
              if(lockPadding.length > 0){
              for(let i = 0 ; i < lockPadding.length; i++){
                  const el = lockPadding[i];
                  el.style.paddingRight = lockPaddingValue;
              }
            }
                  body.classList.add('lock');
    
                  unlock = false;
                  setTimeout(function() {
                      unlock = true;
                  }, timeout);
              
          }
    
          function bodyUnlock(){
            setTimeout(function (){
                for(let i = 0 ; i < lockPadding.length; i++){
                    const el = lockPadding[i];
                    el.style.paddingRight = '0px';
                    body.classList.remove('lock');
                }
            }, timeout);
    
            unlock = false;
            setTimeout(function (){
                unlock = true;
            }, timeout);
    
            
          }
    
          document.addEventListener('keydown', function(e){
              if (e.which === 27){
                  const popupActive = document.querySelector('.popup.open');
                  popupClose(popupActive);
              }
          });