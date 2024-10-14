function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function ugadaiChislo(){
let answer = prompt('Попробуй угадать число');
while (answer < getRandomInRange(0,100)) {
    prompt ('Больше');
    if (answer === getRandomInRange(0,100)){
        break;
    }
}
while (answer > getRandomInRange(0,100)) {
    prompt ('меньше');
    if (answer === getRandomInRange(0,100)){
        break;
    }
}
}