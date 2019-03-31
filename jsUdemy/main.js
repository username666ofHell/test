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

// ФУНКЦИИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

let calc = (a,b) => a+b

console.log(calc(3,4));

console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

