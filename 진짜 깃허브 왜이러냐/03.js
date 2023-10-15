var copyObject = function(target) {
    var result= {};
    for(var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

// 위 패턴을 02.js,03.js에 적용
var user = {
        name :"wonjang",
        gender: "male",
};
var user2 = copyObject(user); // user 의 매개변수를 user2에 복사 -> 각각의 참조하는 것은 따로 설정됨
user2.name = "towjang";
if(user !== user2) {
    console.log("유저 정보가 변경되었습니다");
}
console.log(user.name === user2.name); // false
console.log(user === user2); // false 

// false가 나오면서 각각 다른 오브젝트를 참조하는것을 알수 있음
// 얇은 복사의 문제점: for ~ in 은 객체를 복사하는 건데 중복 복사는 같은 객체를 복사해서 문제점은 남아 있다.

