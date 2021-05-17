// SLICK SLIDER
$(function(){
    $('.slider__inner').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });
});




// HEADER MENU

// Получем кнопку мобильного меню
let menuBtn = document.querySelector('.header__mobile-icon');
//Получем мобильное меню
let headerMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function(){
    headerMenu.classList.toggle('haeder__menu--active');
    document.querySelector('body').classList.toggle('overflow-hiden')
})







let dateInput = document.querySelector('.date-input');
let timeInput = document.querySelector('.time-input');

dateInput.addEventListener('focus', function(){
    dateInput.type='date'
})

dateInput.addEventListener('blur', function(){
    dateInput.type='text'
})

timeInput.addEventListener('focus', function(){
    timeInput.type='time'
})

timeInput.addEventListener('blur', function(){
    timeInput.type='text'
})