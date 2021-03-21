'use strict';
/*a = 5;
console.log(a);*/

/*lert(1)
[0,3].push()*/
//come to me
/*nnbnnnn*/
/*console.log(leftBorderWidth); 
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;*/
var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something)

/*
let persone = {
    name: "Jone",
    age: 25,
    ismarried: false
};

console.log(persone.name);
*/

let persone = {
    name: "Jone",
    age: 25,
    ismarried: false
};

console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

/*alert("Hello world!");*/

/*confirm("are you here?");*/

/*let answer = confirm("are you here?");
console.log(answer);*/

/*let answer = prompt("are you here?", "yes");
console.log(answer);*/

/*let answer = prompt("are you here?", "yes");
console.log(typeof(answer));*/

/*console.log("arr" + "- object");
console.log("arr" + "5");
let answer = +prompt("are you here?", "yes"); //+ ставит строку в число
console.log(typeof(answer));*/

/*let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(incr);
console.log(decr);*/

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);   

console.log(5%2);

console.log("2" == 2); //сравнение по значениям
console.log("2" === 2); //сравнение по типам данных

let ischecked = true,
    isclosed = true; 
console(ischecked && isclosed);   //&& - возращает правду, когда несколько 3 или 4 тру
console(ischecked || isclosed);   // (или) является тру, если хоть один эл-т есть тру
console(ischecked || !isclosed);  //! - это отрицание, противоположное