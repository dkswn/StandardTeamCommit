
console.log(text); // (선언 + 초기화 된 상태)  //  변수 선언을 var 키워드로 아래에서 했기 때문에 선언이 끌어올려져서 오류 안남
text = 'Hanamon!'; // (선언 + 초기화 + 할당 된 상태) 선언 없으면 var로 선언한 것과 동일
var text; 
console.log(text);

foo1(); // 함수 선언문에서는 호이스팅 일어난다, 즉 inner -> outer 로 연결되며 코드전체에 영향이 미칠 수 있음
foo2(); // 함수 표현식이라서 호이스팅 안된다, 함수 안에서만 영향을 미친다.

function foo1() {
  console.log('Hello');
}   // 함수 선언식

var foo2 = function() {
  console.log('world');
} // 함수표현식

