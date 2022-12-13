window.onload = function() {
    show(0)
}


const startButton = document.getElementById('start__btn');
const nextButton = document.getElementById('next__btn');
const quiestionNumber = document.querySelector('.number_text')
const questionContainerElement = document.getElementById('question__container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer__btns')
const menu = document.querySelector('.mainpage')
const underText = document.querySelector('.repsponse_text')
const preText = document.querySelector('.prestart__text')
const userResults = document.querySelector('.results')
const userPoints = document.querySelector('.users__results')
const allQuestion = document.querySelector('.question__wrapper')
const intResults = document.querySelector('.interpretation')

const questions = [
    {
        id: 1,
        question: 'Какое время суток изображено на картине?',
        answer: 'Раннее утро',
        options: ["Раннее утро", "Вечер", "Полдень", "Позднее утро"],
        images: "./images/Claude_Monet,_Impression,_soleil_levant.jpg",
        correct: "Правильно!",
        wrong: "Неправильно!",
        fullCor: 'Судя по всему, вам известно название этой картины - "Восход солнца, впечатление". Именно в честь этой картины получило название движение импрессионистов.',
        fullWrong: 'Судя по всему, вам неизвестно название этой картины - "Восход солнца, впечатление". Именно в честь этой картины получило название движение импрессионистов.'

},

 {  id: 2,
     question: 'Кто является автором данной картины?',
     answer: 'Леонардо да Винчи',
     options: ["Леонардо да Винчи", "Микеланджело", "Рафаэль", "Караваджо"],
     images: "./images/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
     correct: "Верно!",
     wrong: "К сожалению, вы ошиблись.",
     fullCor: 'Если вы выбрали правильный вариант не наугад, то из работ да Винчи вам знакома не только Мона Лиза - так держать! Традиционное название этой картины - "Дама с горностаем"',
     fullWrong: 'У Леонардо много хороших работ, рекомендуем ознакомиться с парочкой. Можете начать с этой - "Дама с горностаем"'

 },

 { 
    id: 3,
     question: 'Кто нарисовал эту картину?',
     answer: 'Гюстав Кайбот',
     options: ["Анри Матисс", "Гюстав Кайбот", "Поль Сезанн", "Поль Серюзье"],
     images: "./images/1024px-Gustave_Caillebotte_-_Jour_de_pluie_à_Paris.jpg",
     correct: "Так держать!",
     wrong: "Увы, вы не угадали.",
     fullCor: 'Это одна из самых значительных работ Гюстава Кайбота - "Парижская улица в дождливую погоду"',
     fullWrong: 'Это одна из самых значительных работ Гюстава Кайбота - "Парижская улица в дождливую погоду"'

},
 { 
    id: 4,
     question: 'Кто является автором данной картины?',
     answer: 'Тициан',
     options: ["Витторе Карпаччо", "Джованни Беллини", "Рафаэль", "Тициан"],
     images: "./images/Tiziano_-_Amor_Sacro_y_Amor_Profano_(Galería_Borghese,_Roma,_1514).jpg",
     correct: "Да, это действительно Тициан!",
     wrong: "Неверно.",
     fullCor: '"Любовь земная и Любовь небесная" - прекрасная картина эпохи Возрождения, хранящаяся в Галерее Боргезе',
     fullWrong: '"Любовь земная и Любовь небесная" - прекрасная картина эпохи Возрождения, хранящаяся в Галерее Боргезе'

 },

 {
    id: 5,
     question: 'Что это за остров?',
     answer: 'Остров мертвых',
     options: ["Остров жизни", "Рюген", "Крит", "Остров мертвых",],
     images: "./images/Arnold_Boecklin_-_Island_of_the_Dead,_Third_Version.JPG",
     correct: "Отлично!",
     wrong: "Вы не правы, но не сдавайтесь!",
     fullCor: '"Остров мертвых" - работа швейцарского художника Арнольда Бёклина, вдохновленная древнегреческами мифами',
     fullWrong: '"Остров мертвых" - работа швейцарского художника Арнольда Бёклина, вдохновленная древнегреческами мифами'

 }, 
 {
    id: 6,
    question: 'Кто изображен на этой картине Серова?',
    answer: 'Европа',
    options: ["Европа", "Елена", "Калипсо", "Пенелопа"],
    images:  ".images/1200px-Valentin_Serov_-_Похищение_Европы_-_Google_Art_Project.jpg",
    correct: "Да, это та самая Европа!",
    wrong: "Нет, это Европа!",
    fullCor: '"Валентин Серов в своей работе использовал известный древнегреческий миф о похищении Европы Зевсом, явившимся к ней в образе быка',
    fullWrong: '"Валентин Серов в своей работе использовал известный древнегреческий миф о похищении Европы Зевсом, явившимся к ней в образе быка'

}, 
{
   id: 7,
   question: 'Кому принадлежит эта работа?',
   answer: 'Венецианов',
   options: ["Венецианов", "Саврасов", "Левитан", "Репин"],
   images:  "./images/Aleksey_Venetsianov_-_На_пашне._Весна_-_Google_Art_Project.jpg",
   correct: "Конечно!",
   wrong: "Неправильно",
   fullCor: 'Крестьянская тема с изображениями крестьян и их быта - характерная черта творчества Венецианова.',
   fullWrong: 'Крестьянская тема с изображениями крестьян и их быта - характерная черта творчества Венецианова.'

} , 
{
   id: 8,
   question: 'А кому принадлежит эта?',
   answer: 'Пит Мондриан',
   options: ["Модильяни", "Пит Мондриан", "Кандинский", "Пикассо"],
   images:  "./images/Piet_Mondriaan,_1930_-_Mondrian_Composition_II_in_Red,_Blue,_and_Yellow.jpg",
   correct: "Верно!",
   wrong: "Неверно!",
   fullCor: '"Композиция с красным, синим и желтым" является своего рода визитной карточкой Мондриана, пионера абстрактной живописи.',
   fullWrong: '"Композиция с красным, синим и желтым" является своего рода визитной карточкой Мондриана, пионера абстрактной живописи.'
} , 
{
   id: 9,
   question: 'Хм, что насчет этой?',
   answer: 'Пит Мондриан',
   options: ["Модильяни", "Пит Мондриан", "Кандинский", "Пикассо"],
   images:  "./images/Piet_Mondrian,_1908-10,_Evening;_Red_Tree_(Avond;_De_rode_boom),_oil_on_canvas,_70_x_99_cm,_Gemeentemuseum_Den_Haag.jpg",
   correct: "И это тоже Мондриан!",
   wrong: "И это тоже Мондриан!",
   fullCor: 'Но уже не зрелый, а ранний, экспериментирующий с различными стилями.',
   fullWrong: 'Но уже не зрелый, а ранний, экспериментирующий с различными стилями.'
} , 
{
   id: 10,
   question: 'Кто изображен на этой картине?',
   answer: 'Сократ',
   options: ["Гераклит", "Диоген", "Сократ", "Эпикур"],
   images:  "./images/David_-_The_Death_of_Socrates.jpg",
   correct: "Правильно!",
   wrong: "Неправильно!",
   fullCor: 'Написанная Жак Луи Давидом картина так и называется - "Смерть Сократа".',
   fullWrong: 'Написанная Жак Луи Давидом картина так и называется - "Смерть Сократа".'
} , 
{
   id: 11,
   question: 'Какой сюжет использовал Питер Брейгель Старший в своей работе?',
   answer: 'Избиение младенцев',
   options: ["Варфоломеевская ночь", "Работа инквизиции", "Избиение младенцев", "Похищение сабинянок"],
   images:  "./images/1280px-Pieter_Bruegel_the_Elder_-_Massacre_of_the_Innocents_-_Google_Art_Project.jpg",
   correct: "Правильно!",
   wrong: "Неправильно",
   fullCor: 'Брейгель перенес библейский сюжет об избиении младенцев в холодный пейзаж Нидерландов.',
   fullWrong: 'Брейгель перенес библейский сюжет об избиении младенцев в холодный пейзаж Нидерландов.'
} 
]

let question_count = 0;
let point = 0;

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    nextButton.classList.remove('hide')
    menu.classList.add('shown')
    preText.classList.add('hide')
    show(question_count)
}

function next(){
    nextQue()
    let userAnswer = document.querySelector('li.option.active').innerHTML
    if(userAnswer == questions[question_count].answer) {
        checkAnswer()
        point++;
        underText.innerHTML = `<p class="repsponse_text"> <i> ${questions[question_count].correct} </i> <br> ${questions[question_count].fullCor} </br> </p>`
        underText.classList.remove('hide')
        nextButton.innerHTML = 'Продолжить'
        underText.classList.add('correct')
        underText.classList.remove('wrong')
        document.querySelector('li.option.active').classList.add('right')
        let myAnswer = document.querySelector('li.opion.active').classList.add('right')
        myAnswer = `<li class="option">${questions[question_count].answer}</li>`
    } else if (userAnswer != questions[question_count].answer) {
        checkAnswer()
        underText.innerHTML = `<p class="repsponse_text"> <i> ${questions[question_count].wrong} </i>  <br> ${questions[question_count].fullWrong} </br>  </p>`
        underText.classList.remove('hide')
        underText.classList.add('wrong')
        underText.classList.remove('correct')
        nextButton.innerHTML = 'Продолжить'
        document.querySelector('li.option.active').classList.add('notright')
        let myAnswer = document.querySelector('li.opion.active').classList.add('notright')
        myAnswer = document.querySelector('li.opion.active')
    }
}

function nextQue(){
    if (nextButton.innerHTML == 'Продолжить') {
       question_count++
       finish()
       quiestionNumber.innerHTML = 'Вопрос:' + ' ' +  (question_count + 1) + ' ' + 'из' + ' ' + questions.length
       show(question_count)
       underText.classList.add('hide')
       nextButton.innerHTML = 'Ответить'
    } 
}

function finish() {
    if (question_count == questions.length) {
        allQuestion.classList.add('hide')
        userResults.classList.remove('hide')
        menu.classList.add('transparent')
        userPoints.innerHTML = 'Ваш результат:' + ' ' + point + ' ' + 'из' + ' ' + questions.length;
        console.log(userPoints.innerHTML)
    }
    if (point <= 2) {
        intResults.innerHTML = 'Не стоит расстраиваться, возможно, в чем-то вы разбираетесь лучше.';
    } else if (point <= 5) {
        intResults.innerHTML = 'Вы что-то знаете, но билет в музей бы не помешал.'
    } else if (point <= 8) {
        intResults.innerHTML = ' <i >Неплохо! Живопись определенно не пустое место в вашей жизни </i>'
    } else if (point <= 10) {
        intResults.innerHTML = 'Отличный результат! Сразу видно влюбленного в искусство человека.'
    } else if (point = 11) {
        intResults.innerHTML = 'Браво! Срочно напишите нам по поводу сотрудничества <br> sanat.culture@gmail.com </br>'
    }
}


function show(question_count) {
    quiestionNumber.innerHTML = 'Вопрос:' + ' ' +  (question_count + 1) + ' ' + 'из' + ' ' + questions.length
    questionElement.innerHTML = `
    <div class="image__container">
                    <img src="${questions[question_count].images}" alt="" class="test-image">
                </div>
                <div id="question">
    <h2>${questions[question_count].question}</h2>
    <ul class="opiton_group">
    <li class="option">${questions[question_count].options[0]}</li>
    <li class="option">${questions[question_count].options[1]}</li>
    <li class="option">${questions[question_count].options[2]}</li>
    <li class="option">${questions[question_count].options[3]}</li>
`;
    toggleActive() 
}



function toggleActive() {
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let j = 0; j < option.length; j++) {
                if(option[j].classList.contains('active')) {
                    option[j].classList.remove('active')
                }
            }
            option[i].classList.add('active')
        }
    }
}

function checkAnswer() {
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        if (option[0].innerHTML == questions[question_count].answer) {
            option[0].classList.add('right')
        } else if (option[1].innerHTML == questions[question_count].answer) {
            option[1].classList.add('right')
        } else if (option[2].innerHTML == questions[question_count].answer) {
            option[2].classList.add('right')
        } else if (option[3].innerHTML == questions[question_count].answer) {
        option[3].classList.add('right')
        } 
    }
}
