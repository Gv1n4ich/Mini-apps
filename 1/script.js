const btn = document.querySelector('.btn')
const submit = document.querySelector('.submit-container')

function openModal() {
    if (submit.classList.contains('none')) {
        submit.classList.remove('none')
    }
}

btn.addEventListener('click', openModal)

const close = document.querySelector('.disagree')

function closeModal() {
    submit.classList.add('none')
}

close.addEventListener('click', closeModal)

const submit2 = document.querySelector('.agree')
const succses = document.querySelector('.succses')

function openModal2() {
    submit.classList.add('none')
    succses.classList.remove('none2')
}

submit2.addEventListener('click', openModal2)

const complete = document.querySelector('.ok')

function closeModal3() {
    succses.classList.add('none2')
}

complete.addEventListener('click', closeModal3)


window.addEventListener('click', (event) => {
    console.log(event)
    if (event.target == succses) {
        closeModal3()
    }
})