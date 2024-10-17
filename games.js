function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function ugadaiChislo(){
let a = getRandomInRange(0,100);
let b = prompt('Попробуй угадать число');
console.log(a);
while (a > b) {
    b = prompt('Больше');
    if (a < b) {
        b = prompt('Меньше');
    } else if (a == b) break;
    
    }

while (a < b) {
    b = prompt('Меньше');
    if (a > b) {
        b = prompt('Больше');
    } else if (a == b) break;
    
    }
    if (a == b) {
        alert('Угадал!');
    }
}

