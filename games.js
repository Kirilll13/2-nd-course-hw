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
