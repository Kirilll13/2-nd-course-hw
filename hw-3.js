//task 1
let psassword = 'пароль';
let a = prompt('Введите пароль');
psassword >= a ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');
//task2
let c = 2;
if(c > 0 && c < 10)
{console.log('Верно');
} else{console.log('неверно');
}
//task3
let d = 100;
let e = 40;

if (d > 100 || e > 100) {
    console.log('Верно');
  } else {
    console.log('Неверно');
  }
//task4
let q = '2';
let b = '3';
alert (q*b-1);
//task5
let monthNumber = 12;
switch(monthNumber){
case 1:
case 2:
case 12:
console.log('Зима');
break;
case 3:
case 4:
case 5:    
console.log('Весна');
break;
case 6:
case 7:
case 8:
console.log('Лето');
break;
case 9:
case 10:
case 11:
console.log('Осень');
break;
default:
console.log('ввели что-то не то');
}