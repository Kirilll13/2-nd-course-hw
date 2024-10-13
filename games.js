let a = 32;
function ugadaiChislo(){
let answer = prompt('Попробуй угадать число');
if (answer == a) {
    alert('Угадал!');
} else if ( answer > a) {
   alert('Меньше'); 
} else if ( answer < a) {
    alert('Больше');
}
}