// const result = [1,2,3].foreach();  // foreach는 리턴값이  없다
// console.log(result);
//
// // map -> mapping된다  기존의 객체를 리턴문이 없어도 반환시켜준다
// // find
//
// const  reuslt = [1,2,3].map(function(){
//     return 1
//     //1,1,1
//     return "한글"
//     // [한글,한글,한글]
// })
// //filter -> return 문에 true,false 가 들어감
// // 파리미터가 리턴이 될지 안될지 true falise 로 결정해준다
// [1.2.3].filter(값 => 값 === 값)
//
// //동기,비동기
// 회원가입 프로세스
//회원가입 -> 서버로부터 회원가입이 되는 메세지가 뜬다
// 회원가입 요청 - > 응답 -> 화면 시각화
///일의 순서가 필요할 경우 then
fetch(); // 요청의 응답을 기다리지 않을때 fetch만 한다 하지만프론트앤드사이드에서는
//  응답을 기다리고 비동기,동기적으로 화면을 시각화를 진행해야한다.
// 비동기적인 코드를 동기적으로 표현하는 코드를 구현해야한다.
let num = 1;
// fetch("http://localhost",{id: 1, name: "jay"})
//     .then(function(response){  // response 를 그냥 쓰지말고 함수에 파라미터로 넣자
//         if(response.num === "success"){
//             alert("성공입니다")
//         } else {
//             alert("안댐");
//         .catch(function(인자){  //실패했을때 catch를 사용한다(브라우저환경에서만 돌아감)  api 연결할때 catch를 꼭 쓰자 호환성 검사 필수
//             alert("연결 실패 404에러")
//         }
//         });







