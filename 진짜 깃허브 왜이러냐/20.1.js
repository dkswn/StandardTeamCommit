// 함수 선언식
/*function main() {
    console.log("Hello");
} 
main();

//함수 표현식
//특징: 호이스팅이 되지 않는다.
/*const main = function() {  // 익명 함수를 main함수에 할당
    console.log("Hello");
}
main();*/

// 화살표 함수
// 
const main = () => {
    console.log("Hello");
}
main()
 

// 화살표 함수 매개변수 2개면 소괄호 생략 불가
// 매개 변수 없을때도 소괄호 생략 불가
const print = (text) => console.log(text);
print("hi");

const getObject = () => ({name : "홍길동"});
console.log(getObject());





