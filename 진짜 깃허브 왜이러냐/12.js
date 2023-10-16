// 변수 호이스팅

//var num; 선언 -- var는 자동으로 선언함 그러므로 undefined로 나오고 에러 안뜸

// console.log(num);  // let은 변수선언하기 전에 일시적 사각지대에 놓여짐 (TDZ: 일시적 사각지대)

// let num = 10;

//const 

//const는 상수에만 쓰여짐
//const는 선언과 할당을 같이해야함
// 객체의 속성을 바꾸는 것은 가능 

// 예
 const abc = {
    x: 1,
    y: 3,
};
abc.x = 4;  //가지고 있는 객체를 유지하면서 내부적인 객체의 속성을 유지하는 것이기 때문에 가능
console.log(abc.x);
// 위처럼 객체의 속성값을 변경하는 것은 가능
