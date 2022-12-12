const iconMenu = document.querySelector('.hamburger-lines')

    iconMenu.addEventListener("click", function(e){
        const menuBody = document.querySelector('.menu__list')
        menuBody.classList.toggle('_active')
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
})