const imageContainer = document.querySelector('.img-magnifier-container')
const image = document.querySelector('.gallery-image')
const headerCont = document.querySelector('.header__container')

image.addEventListener('click', function(){
  imageContainer.classList.add('full')
  image.classList.add('full')
  headerCont.classList.add('full')
})
