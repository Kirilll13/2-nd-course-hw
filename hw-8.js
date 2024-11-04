//task1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));

 //task2
 function filter(array, ruleFanction) {
const result = [];
 for(let i = 0; i < array.length; i++){
if(ruleFanction(array[i])) {
 result.push(array[i]);
}
}
return result;
}
 function isPositive(num) {
return num > 0;
 }
function isMale(person) {
return person.gender ==='male';
}
console.log(filter([3, -4, 1, 9], isPositive));
 const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];
 console.log(filter(people1, isMale));

 //task3
 const intervalId = setInterval(() => {
    console.log('30 сек');
 }, 3000);
 setTimeout(() => {
    console.log('Время');
 }, 7000);

//task4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
 })

 //task5
 function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))