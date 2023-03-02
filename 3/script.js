const burger_btn = document.querySelector('.burger');

const container = document.querySelector('.container');

const x_btn = document.querySelector('.x_button');

burger_btn.addEventListener('click', () => {
    container.style.display = `block`
    x_btn.style.display = `block`
    burger_btn.style.display = `none`
    container.style.marginTop = `50px`
});

x_btn.addEventListener('click', () => {
    x_btn.style.display = `none`
    burger_btn.style.display = `block`
    container.style.marginTop = `0px`
    container.style.display = `none`

})