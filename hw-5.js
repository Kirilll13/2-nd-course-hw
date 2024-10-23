//task1
function min(a,b) {
    if(a>b){
        return b;
    }else if(a === b) {
        return a;
    }
    else {
        return a;
    }
}
console.log(min(10, 9));

//task2
function chet (number) {
    if(number % 2 === 0){
        return  'Число четное';
    }else {
        return 'Число нечетное';
    }
}
console.log(chet(7));

//task3
let kvadrat = Math.pow(7, 2);
let koren = Math.sqrt(49); 
console.log(kvadrat);
console.log(koren);

//task4
function age(){
let answer = prompt('Сколько вам лет?');
if (answer >= 13) {
    alert('Добро пожаловать!');
} else if ( answer >= 0 && answer <= 12) {
   alert('Привет, друг!'); 
} else if ( answer < 0) {
    alert('Вы ввели неправильное значение');
}
}
age()

//task5
function chislo (a,b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'; 
    }
    return (a * b);
}
console.log(chislo(5,'f'));

//task6
function num () {
    let answers = prompt('Назовите число');
    if (isNaN(answers)) {
        return 'Переданный параметр не является числом';
    }
    return `a в кубе равняется ${answers ** 3}`;
}
alert(num())

//task7
const circle1 = {
    radius: 3,
    getArea() {
        console.log((this.radius ** 2) * Math.PI);
    },
    getPerimeter() {
        console.log(this.radius * (2 * Math.PI));
    }
}
const circle2 = {
    radius: 4,
    getArea() {
        console.log((this.radius ** 2) * Math.PI);
    },
    getPerimeter() {
        console.log(this.radius * (2 * Math.PI));
    }
}
circle1.getArea()
circle2.getArea()
circle1.getPerimeter()
circle2.getPerimeter()