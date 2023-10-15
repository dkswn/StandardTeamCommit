var user = {
    name: "wonjang",
    gender:'male',
};

//이름을 변경하는 함수 정의 
//입력값: 변경대상 user객체 ,변경하고자 하는 이름
//출력 값: 새로운 user 객체
//특징: 객체의 프로퍼티에 접근하는 것이 아니라,아예 새로운 객체를 반환 ->불변
var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender,
    };
};
// 변경이 user정보를 user2 변수에 할당
//불변이기 때문에 user1은 영향이 없다
var user2 = changeName(user, "twojang");

// 결국 아래 로직이 수행된다
if(user != user2) {
    console.log("유저 정보가 변경 되었습니다.");
}

console.log(user.name, user2.name); // wonjang, twojang
console.log(user === user2); // false


//함수를 만들어 메모리를 따로 저장해 불변함을 만들어 내는것이 목적
// 하지만 양이 많아지면 return 해야 할 것이 많아서 하드코딩을 해야한다
// 그러므로 얇은 복사를 해야한다.