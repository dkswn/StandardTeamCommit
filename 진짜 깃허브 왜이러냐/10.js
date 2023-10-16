//스코프: 식별자에 대한 유효범위
//스코프 체인: 식별자의 유효범위 안에서부터 바깥으로 차례로 검색해나가는것
//실행컨텍스트 실행 순서
// 코드실행 ->전역(in) -> outer(in) ->outer(중단) -> inner(in) -> inner(out) + outer(재개) ->  outer(out) -> 전역(재개) -> 전역(out) -> 코드종료 
// var a = 1;
// var outer = function() {
//     var inner = function(){
//         console.log(a);
//         var a = 3;
//     };
//     inner();
//     console.log(a);
// };
// outer();
// console.log(a);
//호이스팅 적용 전
// function a (x){
//     console.log(x);
//     var x;
//     console.log(x);
//     var x = 2;
//     console.log(x);
// }
// a(1);
//매개변수 적용
function a(){
    var x = 1;
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
}
a(1);

// 호이스팅 적용
function a() {
    var x;
    var x;
    var x;

    x = 1;
    console.log(x);
    console.log(x);
    x = 2;
    console.log(x);
}
a(1);