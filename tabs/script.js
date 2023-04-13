let contentTabs = document.querySelectorAll('.tabcontent');
let buttons = document.querySelectorAll('.tabs button');



buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let id = event.target.id + '_div'
        openTab(event.target, id)
    })
})



function openTab(actBtn, blockId) {
    console.log(actBtn);
    console.log(blockId);
    buttons.forEach((item) => {
        if (item == event.target) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
    contentTabs.forEach((item) => {
        let newBlock = item.id
        if (newBlock == blockId) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
        if (item.classList.contains('active')) {
            item.style.display = `block`
        } else {
            item.style.display = `none`
        }
    })
}