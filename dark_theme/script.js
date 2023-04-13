const DarkThemeBtn = document.querySelector('.dark_theme_btn')

const LightThemeBtn = document.querySelector('.light_theme_btn')

DarkThemeBtn.addEventListener('click', () => {
    document.body.classList.add('dark_theme')
    document.body.classList.remove('light_theme')
    LightThemeBtn.style.display = `block`
    DarkThemeBtn.style.display = `none`
})

LightThemeBtn.addEventListener('click', () => {
    document.body.classList.add('light_theme')
    document.body.classList.remove('dark_theme')
    LightThemeBtn.style.display = `none`
    DarkThemeBtn.style.display = `block`
})