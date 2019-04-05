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


// let arr = [1, 15, 4],
//     i = arr.sort(compareNum); //sort - сортировка

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(arr);


// ООП, прототип
// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);


// 015 Отлавливаем ошибки в своем коде при помощи консоли разработчика!!!!!!
// Breakpoints

// function hello() {
//     console.log("Hello World!");
// }

// hello();

// function hi() {
//     console.log("Hello World!");
// }

// hi();

// let arr = [1, 15, 4, 30, 42],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(arr);


// 016 Получение элементов со страницы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let box = document.getElementById("box"),
//     btn = document.getElementsByTagName("button"),
//     circle = document.getElementsByClassName("circle"),
//     heart = document.querySelectorAll(".wrapper .heart"),
//     oneHeart = document.querySelector(".wrapper .heart"), //первый класс heart на странице
//     wrapper = document.querySelector(".wrapper");

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart);
// console.log(oneHeart);

// box.style.backgroundColor = "blue";
// btn[1].style.borderRadius = "100%";
// circle[0].style.backgroundColor = "red";
// circle[1].style.backgroundColor = "yellow";
// circle[2].style.backgroundColor = "green";

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = "blue";
// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = "blue";
// });


// let div = document.createElement("div"),
//     text = document.createTextNode("Тут был я");

// div.classList.add("black");

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = "<h1>Hello World!</h2>";
// div.textContent = "Hello World!";

// document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);

// document.body.replaceChild(btn[1], btn[4]);

// console.log(div);


// 018 События и их обработчики!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let btn = document.querySelectorAll("button"),
//     wrap = document.querySelector(".wrapper"),
//     link = document.querySelector("a");

// btn[0].onclick = function() {
//     alert("Вы нажали первую кнопку!");
// };

// btn[0].onclick = function() {
//     alert("Вы опять нажали первую кнопку!");
// };

// btn[0].addEventListener("click", function(event) {
//     // console.log(event);
//     // let target = event.target;
//     // target.style.display = "none";
//     console.log("Произошло событие: " + event.type + " на элементе " + event.target);
// });

// wrap.addEventListener("click", function() {
//     console.log("Произошло событие: " + event.type + " на элементе " + event.target);
// });

// link.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("Произошло событие: " + event.type + " на элементе " + event.target);
// });

// btn.forEach(function(item) {
//     item.addEventListener("mouseleave", function() {
//         console.log("Вышли!");
//     });
// });

// btn[0].addEventListener("click", function() {
//     alert("Вы опять нажали первую кнопку!");    
// });

// btn[0].addEventListener("mouseenter", function() {
//     alert("Вы навели курсор на первую кнопку");
// });


// 019 Скрипты и время их выполнения. setTimeout и setInterval!!!!!!!!!!!!!!!!!!

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log("Hello World!");
// }


// Рекурсивный вызов setTimeout (лучше чем setInterval)

// let timerId = setTimeout(function log() {
//     console.log("Hello");
//     setTimeout(log, 2000);
// });

// Анимация
// let btn = document.querySelector(".btn"),
//     elem = document.querySelector(".box");

// function myAnimation() {
//     let pos = 0;

//     let id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// btn.addEventListener("click", myAnimation);

// // Делегирование событий
// let btnBlock = document.querySelector(".btn-block"),
//     btns = document.getElementsByTagName("button");

// btnBlock.addEventListener("click", function(event) {
//     // if (event.target && event.target.tagName == "BUTTON") {
//     // if (event.target && event.target.сlassList.contains("first") ) {
//     if (event.target && event.target.matches("button.first")) {
//         console.log("Hello");
//     }
// });