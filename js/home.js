const menuMobile = document.querySelector('section.container .menuMobile')
const containerMenuMobile = document.querySelector('header .ContainerMenuMobile')

function msg(){
    alert('Opa, bem vindo! Passando aqui só para ressaltar que esse não é o site oficial da Nubank, ok? O oficial é o nubank.com.br ;)')
}

menuMobile.addEventListener('click', () => {
    containerMenuMobile.classList.toggle('on')
    menuMobile.classList.toggle('on')
    document.querySelector('body').classList.toggle('on')
})