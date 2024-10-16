function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let a = getRandomInRange(0,100);
console.log(a);
function ugadaiChislo(){
let b = prompt('Попробуй угадать число');
while (a > b) {
    b = prompt('Больше');
    if (a == b) {
        break;
    } 
}
while (a < b) {
    b = prompt('Меньше');
    if (a == b) {
        break;
    }
    }
    if (a == b) {
        alert('Угадал!');
    }
}

