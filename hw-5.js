//task1
function max(a,b) {
    if(a>b){
        return a;
    }else{
        return b;
    }
}
console.log(max(11, 9));

//task2
function chet (number) {
    return number % 2 === 0;
}
console.log(chet(6));

//task3
function kvadrat (q) {
    return q ** 2;
}
function koren (q) {
    return (q ** 2) / q ;
}
console.log(kvadrat(7));
console.log(koren (7));

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
    if (isNaN(a,b)) {
        return 'Одно или оба значения не являются числом';
    }
    return (a * b);
}
console.log(chislo('c',6));

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
        console.log((this.radius ** 2) * 3.14);
    },
    getPerimeter() {
        console.log(this.radius * (2 * 3.14));
    }
}
const circle2 = {
    radius: 4,
    getArea() {
        console.log((this.radius ** 2) * 3.14);
    },
    getPerimeter() {
        console.log(this.radius * (2 * 3.14));
    }
}
circle1.getArea()
circle2.getArea()
circle1.getPerimeter()
circle2.getPerimeter()