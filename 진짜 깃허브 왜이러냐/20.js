//bind 메서드
// => this를 바인드 하는 메서드
//call ,apply와는 다름 , 즉시 호출하지는 않는다.
//[목적]
// 1. 함수에 this를 '미리' 적용
// 2. 부분 적용 함수!

var func = function(a,b,c,d) {
    console.log(this, a,b,c,d);
}
//func(1,2,3,4);


//함수에  this 를 미리 적용
var bindFunc1 = func.bind({x : 1});
//bindFund1(5,6,7,8,);
    
// 부분 적용 함수
var bindFunc2 = func.bind({x: 1}, 4,5);
bindFunc2(6,7);
bindFunc2(8,9);

console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);

// 화살표 함수는 this로 바인딩과정이 없다, 즉 전역개체로 새롭게 새팅하는 과정이 없다. 즉 window 나  global 객체로 바뀌지 않음
// this 우회 call, apply, bind 보다 편리한 방법
var obj =  {
    outer: function () {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    },
};
obj.outer();