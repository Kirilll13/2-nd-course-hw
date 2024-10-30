//game 1
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function ugadaiChislo(){
let a = getRandomInRange(0,100);
let b = prompt('Попробуй угадать число');
console.log(a);
while (a !== b) {
    if (a > b) {
        b = prompt('Больше');
    }else if (a < b) {
        b = prompt('Меньше');
    } else {
        break;
    }


    if (a == b) {
        alert('Угадал!');
    }
}
}
//game 2
function arifmetica() {
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 100);
    }
    const randch1 = getRandomInt(0,100);
    const randch2 = getRandomInt(0,100);
    const signs = [`+`, `-`, `*`, `/`];
    const randomIndex = Math.floor(Math.random() * (signs.length));
    let randomSign =  signs[randomIndex];
    function getResult() {
        let answer ;
        let task;
        let result;
        switch (randomSign) {
            case `+` :
                task = (`${randch1} + ${randch2}`);
                result = randch1 + randch2;
                answer = prompt(`Решите задачу \n ${task}`);
                break;
            case `-` :
                task = (`${randch1} - ${randch2}`);
                result = randch1 - randch2;
                answer = prompt(`Решите задачу \n ${task}`);
                break;
            case `*` :
                task = (`${randch1} * ${randch2}`);
                result = randch1 * randch2;
                answer = prompt(`Решите задачу \n ${task}`);
                break;
            case `/` :
                task = (`${randch1} / ${randch2}`);
                result = randch1 / randch2;
                answer = prompt(`Решите задачу \n ${task}`);
                break;  
                default:
                alert("Не то");  
        }
        if (answer == result) {
            alert('Решено правильно');
        } else {
            alert('Решено не верно')
        }
    }
    return (getResult());
}
// game 3
function reversText(){
let word = prompt('Введи слово, мы его перевернем');
let wordsp = word.split('');
let revs = wordsp.reverse();
let reversWord = revs.join('');
alert(reversWord);
}
//game 4
function victorina() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let answ = 0
   for (let i = 0; i < quiz.length; i++){
    let quizQuestion = Number(prompt(`Выберите ответ \n ${quiz[i].question} \n ${quiz[i].options}`));
    if (quizQuestion == quiz[i][`correctAnswer`]){
        answ++;
        alert(`Верно`);
    }else ( alert('Не верно'));
   }
   alert(`Вы ответили на ${answ} вопросов из 3`)
}

//game5
function tsuEFa() {
const options = [`камень`, `ножницы`, `бумага`,];
const randomIndex = Math.floor(Math.random() * (options.length));
let randomOptions = options[randomIndex];
console.log(randomOptions);
function moveUser() {
let userChoice = (prompt(`Давай сыграем в "Камень Ножницы Бумага"? \nНапиши "камень", "ножницы" или "бумага".`)).toLowerCase();
if (userChoice == 'камень' || userChoice == 'ножницы' || userChoice == 'бумага') {
    switch (randomOptions) {
    case `камень`:
    if (userChoice == `ножницы`) {
        alert(`Вы проиграли`);
    } else if (userChoice == `бумага`) {
        alert(`Вы выиграли`);
    } else {
        alert(`ничья`);
    }
    break;
    case `ножницы`:
    if (userChoice == `бумага`) {
        alert(`Вы проиграли`);
    } else if (userChoice == `камень`) {
        alert(`Вы выиграли`);
    } else {
        alert(`ничья`);
    }
    break;
    case `бумага`:
        if (userChoice == `камень`) {
            alert(`Вы проиграли`);
        } else if (userChoice == `ножницы`) {
            alert(`Вы выиграли`);
        } else {
            alert(`ничья`);
        }
        break;
    default:
    alert("Нет таких значений");
}

} else {
    alert(`Вы ввели неверное значение`);
}
    }
    moveUser();
}