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
