// 함수 선언문과 함수표현식의 실질적인 차이
// console.log(sum(1, 2));
// // console.log(multiply(1,2));

// function sum (a,b) {  //함수 선언문 sum
//     return a + b;
// }

// var multiply = function (a,b) {  //  함수 표현식 multiply 
//     return a + b;
// }

// 함수 선언문의  전체를 hoisting 
// function sum (a,b) {
//     return a + b;
// }

// var multiply;

// console.log(sum(1, 2));
// console.log(multiply(1,2));

// multiply = function (a,b) {  //변수의 할당부는 원래 자리
//     return a + b;
// };

function main() {
    var a = 1;
}
main();