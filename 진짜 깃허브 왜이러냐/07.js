//호이스팅


// action point1 : 매개변수 다시쓰기(JS 엔진은 똑같이 이해한다)
// action point2 : 결과 예상하기
// action point3 :hoisting 적용해본 후 결과를 다시 예상해보기

// function a () {
//     var x = 1;
//     console.log(x); 
//     var x;
//     console.log(x);
//     var x = 2;
//     console.log(x); // //result 1, 1, 2
// }
// a(1);

// function a() {
//     var x;
//     var x; 
//     var x;
//     x =1;
//     console.log(x);
//     console.log(x);
//     x = 2;
//     console.log(x);
// } 
//호이스팅 적용 전 
function a() {          //예상
    console.log(b);  // 오류 포인트
    var b = 'bbb';
    console.log(b); /// 'bbb'
    function b () {}
    console.log(b); //function 
}
a();
// 호이스팅 적용 후 
function a() {
    var a;
    function b() {}
    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
}
