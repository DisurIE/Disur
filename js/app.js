"use strict"
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
                document.querySelector('.bottom').classList.add('hide'); 
            }
            if (index == 2 || index == 3 || index == 4){
                if(window.screen.width < 493){
                    var par = document.querySelector('.header__logo');
                    par.innerHTML = ' ';
                    document.querySelector('.header__callback').classList.add('hide');
                }
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

        if(e.target.classList.contains('menu__title')){
            $.fn.pagepiling.moveTo('firstPage');
        }
        if(e.target.classList.contains('menu__link_about')){
            $.fn.pagepiling.moveTo('secondPage');
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
    

        document.addEventListener('DOMContentLoaded', function (){
            const form = document.getElementById('form');
            form.addEventListener('submit', formSend);

            async function formSend(e){
                e.preventDefault();

                let error = formValidate(form);

                let formData = new FormData(form);
                    formData.append('image', formImage.files[0]);

                if(error === 0){
                    form.classList.add('_sending');
                    let response = await fetch('../sendmail.php', {
                        method: 'POST',
                        body: formData
                    });
                    if(response.ok){
                        let result = await response.json();
                        alert(result.message);
                        formPreview.innerHTML = '';
                        form.reset();
                        form.classList.remove('_sending');
                    }
                    else{
                        form.classList.remove('_sending');
                        alert('ошибка');
                    }
                }
                else{
                    alert('Заполните обязательные поля');
                }

            }

            function formValidate(){
                let error = 0;
                let formReq = document.querySelectorAll('._req');


                for(let index = 0; index < formReq.length; index++){
                    const input = formReq[index];
                    formRemoveError(input);

                    if(input.classList.contains('contacts__mail')){
                        if(emailTest(input)){
                            formAddError(input);
                            error++;
                        }
                        else if(input.getAttribute("type") === "checkbox" && input.checked === false){
                            formAddError(input);
                            error++;
                        }
                        else{
                            if(input.value === ''){
                                formAddError(input);
                                error++;
                            }
                        }
                    }

                }
                return error;
            }

            function formAddError(input){
                input.classList.add('_error');
            }
            function formRemoveError(input){
                input.classList.remove('_error');
            }
            function emailTest(input){
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
            }

            const formImage = document.getElementById('fileImg');

            formImage.addEventListener('change', () => {
                uploadFile(formImage.files[0]);
            });

            function uploadFile(file){
                if(!['image/jpeg', 'image/png', 'image/fig', 'image/gif', 'image/psd', 'image/webp'].includes(file.type)){
                    alert('Разрешены только изображения');
                    formImage.value = '';
                    return;
                }
                if(file.size > 20 * 1024 * 1024){
                    alert('Файл должен быть не больше 20мб');
                    return;
                }

                var reader = new FileReader();
                reader.readAsDataURL(file);
            }
        });