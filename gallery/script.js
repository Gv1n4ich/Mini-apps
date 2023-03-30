const firstImg = document.querySelector('.first')
const secondImg = document.querySelector('.second')
const thirdImg = document.querySelector('.third')

const arr = document.querySelectorAll('img')


if (localStorage.imageSrc) {
    document.body.style.backgroundImage = `url(${localStorage.imageSrc})`
} else {
    window.body.style.backgroundImage = `url(${arr[0]})`
}

window.addEventListener('click', (event) => {
    arr.forEach(item => {
        if (item == event.target) {
            const imageSrc = item.getAttribute('src')
            localStorage.imageSrc = imageSrc
            document.body.style.backgroundImage = `url(${imageSrc})`
            item.classList.add('active')
            console.log(item)
        } else {
            item.classList.remove('active')
        }
    })
})