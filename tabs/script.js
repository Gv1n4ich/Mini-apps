let contentTabs = document.querySelectorAll('.tabcontent');
let buttons = document.querySelectorAll('.tabs button');



buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let id = event.target.id + '_div'
        openTab(event.target, id)
    })
})



function openTab(actBtn, blockId) {

    buttons.forEach((item) => {
        item.classList.remove('active')
    })
    actBtn.classList.add('active')

    contentTabs.forEach((item) => {
        item.classList.remove('active')
        if (item.id == blockId) {
            item.classList.add('active')
        }
    })
}
