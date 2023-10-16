
// const object = {
//     name: "별코딩",
//     main: function() {
//         console.log(this.name + "입니다");
//     },
//     mainArrow: () => {
//         console.log(this);  //화살표 함수가 선언된 시점에서 this 결정
//     }
// };

// const object2 = {
//     name: "다른객체",
//     mainArrow: object.mainArrow,  // 화살표 함수의 this는 선언된 위치에 의해서 결정된다
//                                     // 호출된 방법과는 무관하다
//     }



// // 위치와 상관없이 함수가 호출된 대로 출력한다.
// object.main();  //obj
// object2.mainArrow(); //window 


// 바인드메서드로 innerfunction 밖에 있는 main 함수를 호출하는 방법
const object = {
    name: "별코딩",
    main: function() {
        const innerfunction = function() {
            console.log(this);
        }.bind({ hi: "hi"});  
        innerfunction();
    },
};
object.main();
