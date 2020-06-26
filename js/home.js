const menuMobile = document.querySelector('section.container .menuMobile')
const containerMenuMobile = document.querySelector('header .ContainerMenuMobile')

menuMobile.addEventListener('click', () => {
    containerMenuMobile.classList.toggle('on')
    menuMobile.classList.toggle('on')
    document.querySelector('body').classList.toggle('on')
})