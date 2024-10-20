//task1
const mass=[1, 5, 4, 10, 0, 3];
for(let a=0; a<mass[3]; a++) {
    if(mass[a] ==10) break;
    console.log(mass[a]);
}
//task2
const mass1=[1, 5, 4, 10, 0, 3];
mass1.forEach((el, index) =>{
    console.log(`${index}: ${el}`);
});
//task3
const mass2 = [1, 3, 5, 10, 20];
let jt = mass2.join(" ");
console.log(jt);

//task4
const mass3 = [];
for(let i = 0; i < 3; i++){
    mass3.push([1, 1, 1]);
}
console.log(mass3);
//task5
const mass4 = [1, 1, 1];
mass4.push(2, 2, 2);
console.log(mass4);
//task6
const mass5 = [9, 8, 7, 'a', 6, 5];
mass5.sort();
mass5.pop();
console.log(mass5);
//task7
const mass6 = [9, 8, 7, 6, 5];
    let b = Number(prompt('Попробуй угадать число'));
   if (mass6.includes(b)) {
    alert('Угадал');
   } else {
    alert('Не угадал');
   }
//task8
const mass7 = 'abcdef';
let spl = mass7.split('');
let rev = spl.reverse();
let join = rev.join('');
console.log(join);
//task9
const mass8 = [[1, 2, 3],[4, 5, 6]];
let arr = mass8.flat();

console.log(arr);
//task10
const mass9 = [1, 4, 5, 7, 9];
for (let q = 0; q < mass9.length; q++) {
    if(mass9[q + 1]){
console.log(mass9[q] + mass9[q + 1]);
    }
}
//task11
const ch = [2, 4, 6];
let kvch = ch.map(ch => ch ** 2);
console.log(kvch);
//task12
function lengthWord(mass11) {
    return mass11.map(item => item.length);
}
console.log(lengthWord(['слово']));
//task13
function negativChisl(mass12) {
    return mass12.filter(item => item < 0);
}
console.log(negativChisl([1, -2, 3, 6, -7, -9]));
//task14
function rand() {
    return Math.floor(Math.random() * 10);
}
const mass13 = [];
for (let i = 0; i < 10; i++) {
 mass13.push(rand());
}
const evenMass13 = [];
for (let i = 0; i < mass13.length; i++) {
    if (mass13[i] % 2 === 0){
        evenMass13.push(mass13[i]);
    }  
}
console.log(evenMass13);
//task15
function rand() {
    return Math.floor(Math.random() * 10);
}
const mass14 = [];
for (let i = 0; i < 10; i++) {
    mass14.push(rand());
   }
   console.log(mass14.reduce((a,b) => a + b) / mass14.length);
