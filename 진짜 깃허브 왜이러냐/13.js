//runtime 코드가 돌아가는 환경
// 1. 노드환경 2. 브라우저 환경
// 전역환경에서 this 는 노드
// 브라우저 환경에서는 window
// 함수는 호출의 주체가 없고 자체적으로 작동
// 메서드는 호출의 주체가 객체이다
// --------------------

//case1: 함수
// 호출 주체를 명시 할 수 없기때문에 this는 전역 객체
var func = function (x) {
    console.log(this, x);
};
func(1); // window{.....} 1

// case2: 메서드
// 호출 주체를 명시할 수 없기 때문에  this.는 해당 객체(obj)를 의미한다.
//obj는 곧 }{method: f}를 의미한다.
var obj = {
    method: func,
};
obj.method(2); // {method: f} 2

//함수로써의 호출기준과 메서드로써의 호출 구분기준 : . []

var obj = {
    methodA: function () {console.log(this) },  // 호출 주체를 알 수 없기 때문에 .이 없다 (this는 항상 전역객체(window 혹은 global환경))},
    inner:{methodB: function() {console.log(this) },
    }
};
obj.methodA();  // this === obj
obj['methodA'](); // this === obj
obj.inner.methodB(); // this === obj.inner
obj['inner'].methodB(); // this === obj.inner
obj['inner']['methodB'](); // this === obj.inner

// 메서드의 내부함수에서의 this
var obj1 = {
    outer: function () {
        console.log("TEST =>", this); // 메서드 내부에서의 this -> obj1
        var innerFunc = function() {
            console.log("TEST =>", this); // 전역객체 , obj2
        }
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod();
    }
};
obj1.outer();

//2. 메서드 내부 함수에서의 this 우회

var obj1 = {
    outer: function () {
        console.log(this); // 1. outer

        //AS - IS
        var innerFunc1 = function() {
            console.log(this); // 전역객체
        }
        innerFunc1();

        //TO- BE
        var self = this;
        var innerFunc2 = function() {
            console.log(self); // outer
            }
            innerFunc2(); 
    }
};
obj1.outer();

// 2. 화살표 함수(= this를 바인딩 하지 않는 함수)
// a. 화살표함수는 실행 컨텍스트를 생성할 때 this 바인딩 과정 자체가 없다 따라서 this
//는  이전의 값 - 상위값이 유지된다.
// this가 전역객체를 바라보는 문제때문에 화살표 함수가 도입된것
// 면접질문 팁: 일반 함수와 화살표 함수의 가장 큰 차이점은 무엇인가요?
// this 바인딩 여부가 다릅니다!!

var obj = {
    outer: function () {
        console.log(this); // obj
        var innerFunc = () => {
            console.log(this); // obj
        }
        innerFunc();
    }
}
obj.outer(); // obj 메소드 this


//4. 콜백 함수 호출 시 그 함수 내부에서의  this
// 콜백함수: 어떠한 함수를 메서드의 인자(매개변수) 로 넘겨주는 함수
// 내용: 콜백함수는 내부의 this는 해당 콜백함수를 넘겨받은 함수(메서드) 가 정한 
// 규칙에 따라 값이 결정된다 콜백 함수도  함수이기때문에 this는 전역객체를 참조하지만(호출주체가없다), 
//콜백함수를 넘겨받은 함수에서 콜백함수에 별도로 this를 지정한 경우에는 예외적으로 
// 콜백함수는 전역개체를 항상 바라본다.
// 그 대상을 참조한다.

// 별도 지정없음 : 전역객체
setTimeout(function(){ console.log(this)}, 300);  //콜백함수

// 별도 지정없음 : 전역객체
[1,2,3,4,5].forEach(function(x){ console.log(this, x)}); // 콜백함수  전역개체를 바라봄
// 1. setTimeout함수 forEach 메서드는 콜백 함수를 호출 할때 대상이 될 this 를 지정하지 
// 않았으므로 this는 곧 window 함수이다.
// addListener 안에서의 this는 항상  호출한 주체의  Element를 return 하도록 되어있음
//따라서 this 는 Button을  의미함

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function(e) {
	console.log(this, e);
});


// 5. 생성자함수에서의 this
/* 생성자: 구체적인 인스턴스를 만들기 위한 프레임 */
var Cat = function(name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
};

var chaco = new Cat('초코', 4); // this: choco
var nabi = new Cat('나비', 3);  // this: nabi

