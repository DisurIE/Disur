
    const burger = document.querySelector('.menu-icon');
    const burgerClose = document.querySelector('.menu-close');
    burger.addEventListener('mouseover', () => {
        document.querySelector('.menu').classList.add('active-menu');
    });
    burgerClose.addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('active-menu');
    });


    //////////////////////////////////////////

    $(document).ready(function() {
        $('#pagepiling').pagepiling({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
        afterLoad: function(anchorLink, index){
			if(index == 3){
                var par = document.querySelector('.header__logo');
                par.innerHTML = ' ';
                document.querySelector('.header__callback').classList.add('hide');
                document.querySelector('.bottom').classList.add('hide');
			}
            else if(index != 3){
                var par = document.querySelector('.header__logo');
                par.innerHTML = 'DiSuR';
                document.querySelector('.header__callback').classList.remove('hide'); 
                document.querySelector('.bottom').classList.remove('hide'); 
            }
            if(index == 4){

            }
		}
        });
    });
    document.querySelector('.bottom').addEventListener('click', () => {
        $.fn.pagepiling.moveSectionDown();
    });
    document.querySelector('.header__logo').addEventListener('click', () => {
        $.fn.pagepiling.moveTo('1');
    });
   

    const links = document.querySelector('.menu__nav');
    links.addEventListener('click', e => {
        let target = e.target;

        if(target.classList.contains('menu__title')){
            $.fn.pagepiling.moveTo('1');
        }
        if(target.classList.contains('menu__link_about')){
            $.fn.pagepiling.moveTo('2');
        }
        if(target.classList.contains('menu__link_cases')){
            $.fn.pagepiling.moveTo('3');
        }
        if(target.classList.contains('menu__link_contacts')){
            $.fn.pagepiling.moveTo('4');
        }
    });
    document.querySelector('.header__callback').addEventListener('click', () => {
        $.fn.pagepiling.moveTo('4');
    });
    