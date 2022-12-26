const circleWoman = document.querySelector('.circle_woman')
const circleName = document.querySelector('.circle_name')
const popup = document.querySelector('.popup__container')
const popText = document.querySelector('.popup__text')
const popImage = document.querySelector('.popup__image')
const popupClose = document.querySelector('.popup_close')
const texts = [
  {
    text: 'Another symbol is the Phrygian cap that the Woman is wearing. During the first French Revolution, it was used to symbolize freedom. The Phrygian cap was the clothes of the poor so the woman became a recognized leader of the people by wearing it. We also can see that the crowd behind her is mixed. People of different social classes are there. It indicates that the movement of the nation cannot be limited to one social stratum.The previous European art had a strong influence on this painting, especially Rococo.',
    images: './images/marianna.png',

},
{
    text: 'На виднеющемся остатке баррикады автор оставил свое имя - Эжен Делакруа, и год создания картины - 1830.',
    images: './images/name.png',
}
]

circleWoman.addEventListener('click', function(){
  popup.classList.add('on')
  popText.innerHTML = texts[0].text;
  popImage.src = texts[0].images
})


circleName.addEventListener('click', function(){
  popup.classList.add('on')
  popText.innerHTML = texts[1].text;
  popImage.src = texts[1].images
})

popupClose.addEventListener('click', function(){
  popup.classList.remove('on')
})
