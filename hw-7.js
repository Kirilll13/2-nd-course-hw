//task1
let a = 'js';
console.log(a.toUpperCase());
//task2
function search() {
const items = ['махровый диван', 'деревянный стул','деревянный стол','деревянная дверь'];
const find = 'деревянн';
items.forEach((items) => {
    if (items.startsWith(find)){
        console.log(items);
    }
})
}
search()
//task3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
//task4
 console.log(Math.min(52, 53, 49, 77, 21, 32));
 console.log(Math.max(52, 53, 49, 77, 21, 32));
 //task5
function randomNumber(){
    return Math.round(Math.random() * 10);
}
console.log(randomNumber());
//task6
function randomMassive(num) {
    for (q = 0; q < (num / 2); q++) {
        console.log(Math.round(Math.random(q)));
    }
}
randomMassive(6)
//task7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
console.log(getRandomInRange(0,20));
//task8
let nowDate = new Date();
console.log(nowDate);
//task9
let currentDate = new Date();
let daysLater = currentDate.setTime(currentDate.getTime() + 73 * 24 * 60 * 60 * 1000);
currentDate = new Date(daysLater)
console.log(currentDate);
//task10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(2023,4,2,11,20);
let today = 'Дата:' + ` ` + myDate.getDate() + ` ` + months[myDate.getMonth()] + ` ` + myDate.getFullYear() + ` `  + `это -` + ` ` + days[myDate.getDay()] + ` ` + `Время:` + myDate.getHours() + `.` + myDate.getMinutes() ;
console.log(today);
