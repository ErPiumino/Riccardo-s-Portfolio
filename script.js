const btninfo = document.querySelector('.btn-info');
const btn = document.querySelector('.popupCloseButton');
const form = document.querySelector('.popup-box');
const helper = document.querySelector('.helper');
const btninfo_1 = document.querySelector('.btn-info-1');
const btn_1 = document.querySelector('.popupCloseButton-1');
const form_1 = document.querySelector('.popup-box-1');
const helper_1 = document.querySelector('.helper-1');

btninfo.addEventListener('click', () => {
    console.log('Button Clicked');
    form.style.display = 'block';
});

btn.addEventListener('click', () => {
    console.log('Button Clicked');
    form.style.display = 'none';
});

btninfo_1.addEventListener('click', () => {
    console.log('Button Clicked');
    form_1.style.display = 'block';
});

btn_1.addEventListener('click', () => {
    console.log('Button Clicked');
    form_1.style.display = 'none';
});