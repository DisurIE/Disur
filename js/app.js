
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
        $('#pagepiling').pagepiling();
    });