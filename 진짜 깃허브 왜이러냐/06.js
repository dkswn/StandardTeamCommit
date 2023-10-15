var n = null;
console.log(typeof n); // object  자바스크립트 오류
//동등연산자 
console.log(n == undefined); // true
console.log(n == null); //true

// 일치 연산자 
console.log(n === undefined); // false
console.log(n === null); // true

