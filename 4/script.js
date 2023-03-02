const btn = document.querySelector('.send')
const ul = document.querySelector('ul')
const modal = document.querySelector('.modal_wrapper')
const btnCloseModal = document.querySelector('.exit')
const btnEditUser = document.querySelector('.edit_form')
const editName = document.querySelector('.editfirstname')
const editLastname = document.querySelector('.editlastname')
const editEmail = document.querySelector('.editmail')
const form = document.querySelector('.form_page')
const lastName = document.querySelector('.lastname')
const firstName = document.querySelector('.firstname')
const email = document.querySelector('.mail')

let arr = []

ul.addEventListener('click', createLogicSpa)
btn.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)
btnEditUser.addEventListener('click', editUserFormFinish)

function openModal() {
    if (firstName.value !== ' ' && lastName.value !== ' ' && email.value !== ' ') {
        const infObj = {
            name: firstName.value,
            lastName: lastName.value,
            email: email.value,
        }
        form.reset()
        arr.push(infObj)
        console.log(arr)
        createList(arr)
    }
}


function createTemplate({ name, lastName, email }, id) {
    const li = document.createElement('li')
    li.id = id
    const template = `
    <h1 class="wrapper_label">Ваши данные:</h1>
    <div class="li_wrapper">
    <span class="li">${name}</span>
    <span class="li">${lastName}</span>
    <span class="li">${email}</span>
    </div>
    <h1 class="wrapper_label">Закрыть/Изменить</h1>
    <div class="btn_wrapper">
        <button class="delete_btn">Удалить</button>
        <button class="open_modal">Изменить</button>
    </div>
    `
    li.innerHTML = template
    return li

}

function createLogicSpa(event) {
    const elemPage = event.target
    const id = getIdElementPage(elemPage)
    if (elemPage.classList.contains('delete_btn')) {
        delPost(id);
    } else if (elemPage.classList.contains('open_modal')) {
        modal.classList.remove('none')
        modal.id = id
        addValueInputModal(id)
    }
}

function delPost(id) {
    newArr = arr.filter((item, index) => {
        if (index == id) return false
        return true
    });
    arr = newArr
    createList(arr)
}

function getIdElementPage(elemPage) {
    const parent = elemPage.closest('li')
    const pageElemId = parent.id
    return pageElemId
}

function closeModal(event) {
    event.preventDefault()
    modal.classList.add('none')
}

function createList(data) {
    ul.innerHTML = ''
    data.forEach((item, index) => {
        const resultLi = createTemplate(item, index)
        ul.append(resultLi)
    })
}

function addValueInputModal(id) {
    editName.value = arr[id].name
    editLastname.value = arr[id].lastName
    editEmail.value = arr[id].email
}

function editUserFormFinish(event) {
    const id = modal.id
    event.preventDefault()
    arr[id].name = editName.value
    arr[id].lastName = editLastname.value
    arr[id].email = editEmail.value
    createList(arr)
    closeModal(event);
}