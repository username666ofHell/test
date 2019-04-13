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


// 021 Параметры документа, окна и работа с ними !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let box = document.querySelector(".box"),
//     btn = document.querySelector("button");

// let width = box.clientWidth,
//     height = box.clientHeight;
// let width = box.offsetWidth,
//     height = box.offsetHeight;
// let width = box.scrollWidth,
//     height = box.scrollHeight;

// console.log(width);
// console.log(height);
// console.log(box.getBoundingClientRect().left);

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop = 0; //!!!!!!!!!!!!!!!!!!!

// btn.addEventListener("click", function() {
//     // box.style.height = box.scrollHeight + "px";
//     // console.log(box.scrollTop);
//     box.scrollTop = 0;
// });

// scrollBy(0, 200); //!!!!!!!!!!!!!!!!!!!!!
// scrollTo(0, 200); //!!!!!!!!!!!!!!!!!!!!!


// 022 Конструкторы и классы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ES 5 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     };
// }
// User.prototype.exit = function(name) {
//     console.log("Пользователь " + this.name + " ушел");
// };

// let ivan = new User("Ivan", 25),
//     alex = new User("Alex", 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


// ES 6 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`);
//     }
// }

// let ivan = new User("Ivan", 23),
//     alex = new User("Alex", 20);
// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();


// 023 Контекст вызова (this)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user = {
//     name: "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, "Smith"));
// console.log(sayName.apply(user, ["Snow"]));

// function count (number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log(this);
//     this.style.backgroundColor = "red";
//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// });

// 1) просто вызов функции - window/undefined
// 2) метод объекта - this = объект
// 3) конструктор (new) - this = новый созданный объект
// 4) указание конкретного контекста - call, apply, bind


// 024 Стандарт ES6. Интерполяция!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let name = "Ivan",
//     age = 30,
//     mail = "ex.mail.ru";

// // document.write("Пользователю " + name + " " + age + " лет. Его почтовый адрес: " + mail);
// document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);


// 025 ES6. let и const!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function makeArray() {
//     var items = [];

//     for (let i = 0; i < 10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();



// 026 ES6. Стрелочные функции!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1) стрелочная ф-я анонимна - ей нельзя задать имя, только поместить в переменную;
// нельзя управлять обработчиками событий, если это необходимо; нельзя запускать эту ф-ю
// внутри себя
// 2) основная особенность - стрелочная ф-я не имеет своего контекста вызова this, т.е.
// внутри этой ф-и тот же this что и снаружи
// чаще всего стрелочные ф-и используются в обработчиках событий, setInterval, setTimeout, ajax

// let fun = () => {
//     console.log(this);
// };

// fun();

// let obj = {
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let show = () => {
//         console.log(this);
//     };
//     show();
// });


// 027 ES6. Параметры по умолчанию !!!!!!!!!!!!!!!!!!!!!!!!!!!

// function calcOrDouble(number, basis = 2) {
//     // basis = basis || 2; ES5
//     console.log(number*basis);
// }
// calcOrDouble(3,5);
// calcOrDouble(6);


// 028 ES6. Классы

// class Rectangle {
//     constructor(height, width = 20) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 10);

// console.log(square.calcArea());


// 029 ES6. Spread-операторы !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// spread разворачивает массивы и превращает их в данные

// let video = ["youtube", "vimeo", "rutube"],
//     blogs = ["wordpress", "livejournal", "blogger"],
//     internet = [...video, ...blogs, "vk", "facebook"];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a + b + c);
// }
// let numbers = [2, 5, 7];

// log(...numbers);


// 030 JSON формат передачи данных !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let options = {
//     width: 1366,
//     height: 768,
//     background: "red",
//     font: {
//         size: "16px",
//         color: "#fff"
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));


// 031 AJAX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let inputRub = document.getElementById("rub"),
//     inputUsd = document.getElementById("usd");

// inputRub.addEventListener("input", () => { //стрелочная т.к. контекст вызова неважен
//     let request = new XMLHttpRequest();

//     // request.open(method, url, async, login, pass);
//     request.open("GET", "current.json");
//     request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//     request.send();

//     //status код ответа сервера
//     //statusText (ok, not found)
//     //responceText (текст ответа сервера) / responce
//     //readyState

//     request.addEventListener("readystatechange", function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }
//     });

// });



// 032 ES6. Promise !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// пример функции не через promise
// let drink = 0;

// function shoot(arrow, headshot, fail) {
//     console.log("Вы сделали выстрел...");

//     setTimeout(function() {
//         Math.random() > 0.5 ? headshot({}) : fail("Вы промахнулись");
//     }, 1500);
// }

// function win() {
//     console.log("Вы победили!");
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log("Вам купили пиво");
// }

// function giveMoney() {
//     console.log("Вам заплатили!");
// }

// function lose() {
//     console.log("Вы проиграли!");
// }

// shoot({}, 
//         function(mark) {
//             console.log("Вы попали в цель!");
//             win(mark, buyBeer, giveMoney);
//         },
//         function(miss) {
//             console.error(miss);
//             lose();
//         }
//     );


// пример через promise
// let drink = 0;

// function shoot(arrow) {
//     console.log("Вы сделали выстрел...");
//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             Math.random() > 0.5 ? resolve({}) : reject("Вы промахнулись");
//         }, 1500);
//     });

//     return promise;
// }

// function win() {
//     console.log("Вы победили!");
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log("Вам купили пиво");
// }

// function giveMoney() {
//     console.log("Вам заплатили!");
// }

// function lose() {
//     console.log("Вы проиграли!");
// }

// shoot({})
//         .then(mark => console.log("Вы попали в цель!"))
//         .then(win)
//         .catch(lose);



// 033 Как сохранить данные без БД. Работа с localStorage !!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

// window.addEventListener("DOMContentLoaded", function() {

//     let checkbox = document.getElementById("rememberMe"),
//         change = document.getElementById("change"),
//         form = document.getElementsByTagName("form")[0];

//     if(localStorage.getItem("isChecked") === "true") {
//         checkbox.checked = true;
//     }

//     if(localStorage.getItem("bg") === "changed") {
//         form.style.backgroundColor = "#ff4766";
//     }

//     checkbox.addEventListener("click", function() {
//         localStorage.setItem("isChecked", true);
//     });

//     change.addEventListener("click", function() {
//         localStorage.setItem("bg", "changed");
//         form.style.backgroundColor = "#ff4766";
//     });

// });

// let person = {
//     name: "Alex",
//     age: 25,
//     tech: ["mobile", "notebook"]
// };

// let serializedPerson = JSON.stringify(person);
// localStorage.setItem("Alex", serializedPerson);

// console.log(JSON.parse(localStorage.getItem("Alex")));



// 034 Ошибки. Как избежать “поломки” своего кода !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let json = '{"id":2}';

// try {
//     // console.log("Начинаем работу");
//     // console.log(a);
//     // console.log("Результат");

//     let user = JSON.parse(json);
//     console.log(user);

//     if(!user.name) {
//         throw new Error("В этих данных нет имени");
//     }
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

//     console.log(`Мы получили ошибку: ${error.name}`);
// } finally {
//     console.log("А я выполнюсь всегда");
// }

// console.log("А я буду работать дальше");



// 035 Современные библиотеки и фрэймворки. JQuery, как устроена $ !!!!!!!!!!!!!

// $(document).ready(function() {
//     $(".list-item:first").hover(function() {
//         $(this).toggleClass("active");
//     });

//     $(".list-item:eq(2)").on("click", function() {
//         $(".image:even").fadeToggle("slow");
//     });

//     $(".list-item:eq(4)").on("click", function() {
//         $(".image:odd").animate(
//             {
//                 opacity: "toggle",
//                 height: "toggle"
//             }, 3000
//         );
//     });
// });

// Почему jQuery можно спокойно заменить нативным js
// document.querySelectorAll(".list-item").forEach();
// .classList
// .addEventListener
// $.ajax - fetch
// animations

