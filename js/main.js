const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');
const nav = document.querySelector('.nav');
const blur = document.querySelector('.blur');

btnOpen.addEventListener('click', () => {
    nav.style.display = 'flex'
    blur.style.display = 'flex'

})
btnClose.addEventListener('click', () => {
    nav.style.display = 'none'
    blur.style.display = 'none'

})

