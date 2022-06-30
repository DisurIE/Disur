new Swiper('.swiper', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
});

new Swiper('.delivery-swiper', {
    
    navigation: {
        nextEl: '.delivery-swiper-button-next',
        prevEl: '.delivery-swiper-button-prev',
      },
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
     loop: true,
     autoplay: {
        delay: 3000,
      },
     breakpoints: {
         200: {
            slidesPerView: 1,
         },
         788: {
            slidesPerView: 2,
         },
         1200: {
            slidesPerView: 3,
         }
     },

});

    function outputFiles(){
        var inputs = document.querySelectorAll('.file__input');
        Array.prototype.forEach.call(inputs, function( input ){
            var label = input.nextElementSibling,
            labelVal = label.innerHTML;

            input.addEventListener('change', function(e){
                console.log(this.files);
                var fileName = '';
                if(this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else
                    fileName = this.files[0].name;
                    
                    if(fileName)
                        label.querySelector('span').innerHTML = fileName;
                    else
                        label.innerHTML = labelVal;
            });
        });
    }
document.addEventListener("DOMContentLoaded", outputFiles);

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.form-first__text-tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// faq ===============================================================================

const faqs = document.querySelectorAll('.faq__item');

    faqs.forEach(faq => {
        const faqBtn = faq.querySelector('.faq__btn');
        faqBtn.addEventListener('click', e => {
            faq.classList.toggle('faq__item_active');
        });
    });

// ____ ===============================================

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


// Burger =============================================================================================================

    const burger = document.querySelector('.menu__icon');

    burger.addEventListener('click', () => {
        document.querySelector('.header__nav').classList.toggle('active');
        burger.classList.toggle('menu__icon_active');
        document.querySelector('body').classList.toggle('hidden');
    });

// form ================================================================================================================

const firstBtn = document.querySelector('#first-step');

    firstBtn.addEventListener('click', () => {
        document.querySelector('.form-first__inputs').classList.add('hide');
        document.querySelector('.form-second__inputs').classList.remove('hide');
        document.querySelector('.form-first').classList.add('form-first_second');
    });

const backBtn = document.querySelector('#back');

    backBtn.addEventListener('click', () => {
        document.querySelector('.form-first__inputs').classList.remove('hide');
        document.querySelector('.form-second__inputs').classList.add('hide');
        document.querySelector('.form-first').classList.remove('form-first_second');
    });

const secondBtn = document.querySelector('#second-step');

    secondBtn.addEventListener('click', () => {
        document.querySelector('.form-calculate').classList.add('hide');
        document.querySelector('.calculate__third-step').classList.remove('hide');
    });
//popup =====================================================================================================================

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

      const popupCloseBtn = document.querySelectorAll('.form-first__next_volume');

          const volumes = document.querySelectorAll('.form-popup__text');
          let volume = 1;
          for(let i = 0; i < volumes.length; i++){
              volume *= +volumes[i].textContent;
          }
 
      popupCloseBtn.forEach(btn => {
        btn.addEventListener('click', () =>{
            const volumes = document.querySelectorAll('.form-popup__text');
            let volume = 1;
            for(let i = 0; i < volumes.length; i++){
                volume *= +volumes[i].value;
            }
            console.log(volume);
            document.querySelector('.form-first__volume').value = volume;
        });
      });
      if (popupCloseBtn.length > 0){
        for(let i = 0; i < popupCloseBtn.length; i++){
            const el = popupCloseBtn[i];
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