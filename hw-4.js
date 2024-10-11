//task1
let i = 1;
let q = 2;
while (i<=q){
    console.log('Привет');
    i++;
}
//task2
let a = 1;
do{
    console.log(a);
    a++;
} while(a<6);
//task3
let b = 7;
do{
    console.log(b);
    b++;
} while(b<23);
//task4
const obj = {"Коля" : '200',
"Вася" : '300',
"Петя" : '400',
}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}
//task5
let n = 1000;
while (n > 1) {
    if(n < 30){
        break;
    }
    console.log(n);
   n = n / 2 ;
 }
 let num = 5;
 //task6

 for(let f = 4; f < 31; f++){
    if( f === 4 || f === 11 || f === 4 || f === 18 || f === 25){
        console.log(`Сегодня пятница, ${f}-е число. Необходимо подготовить отчет.`);
    }
 }
 
 
