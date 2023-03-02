const burgerButton = document.querySelector('.burger_menu');

const closeButton = document.querySelector('.x_button');

const main = document.querySelector("main");

const backPannel = document.querySelector('.side_pannel_container');

burgerButton.addEventListener('click', () => {
    main.style.marginLeft = `250px`
    burgerButton.style.display = `none`
    burgerButton.style.border = `none`
    backPannel.style.width = `250px`
    backPannel.style.display = `inline-block`
    main.style.transition = `0.5s`
});

closeButton.addEventListener('click', () => {
    burgerButton.style.display = `block`
    burgerButton.style.border = `3px solid black`
    burgerButton.style.transition = `0.5s`
    burgerButton.style.cursor = `pointer`
    backPannel.style.width = `0px`
    main.style.marginLeft = `0px`

})