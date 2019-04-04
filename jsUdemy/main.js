// // let num = 50;

// if (num < 49) {
//     console.log("Neverno!")
// } else if (num > 100) {
//     console.log("Mnogo!")
// } else {
//     console.log("Verno!")
// }

// (num == 50) ? console.log("Verno!") : console.log("Neverno!");

// switch (num) {
//     case num < 49:
//         console.log("Neverno!");
//         break;
//     case num > 100:
//         console.log("Mnogo!");
//         break;
//     case 50:
//         console.log("Verno!");
//         break;
//     default:
//         console.log("Chto-to poshlo ne tak!");
//         break;
// }

// let num = 50;

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue
//     }
//     console.log(i)
// }

// ФУНКЦИИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);


// function expression создается только когда код до нее доходит
// let calc = function(a,b) {
//     return (a + b);
// }

// Функции !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let calc = (a,b) => a+b

// console.log(calc(3,4));

// console.log(calc(8,4));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// Callback функции !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function first(){
//     // что-то делаем
//     setTimeout( function(){
//         console.log(1);
//     }, 500 );
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log("Я учу" + lang);
//     callback();
// }

// function done(){
//     console.log("Я прошел 3й урок");
// }

// learnJS("JavaScript", done);

// Объекты!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let options =  {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);

// 013 Массивы и псевдомассивы !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let arr = ["first", 2, 3, "fourth", 5];
// arr[99] = 99;
// console.log(arr.length);

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);



// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }



// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');  //split помещает данные в массив
// console.log(arr);



// let arr = ["aaa", "bbb", "ccc", "ddd"],
//     i = arr.join(', '); //join склеивает каждый элемент массива в одну строку

// console.log(i);


let arr = [1, 15, 4],
    i = arr.sort(compareNum); //sort - сортировка

function compareNum(a,b) {
    return a-b;
}

console.log(arr);
