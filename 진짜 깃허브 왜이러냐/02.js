//user 객체 생성
var user = {
    name: "wonjang",
    gender: "male",
};

//이름을 변경하는 함수 정의
//입력값: 변경대상 user 객체, 변경하고자 하는 이름
//출력값: 새로운 user 객체
//특징: 객체의 프로퍼티(속성)에 접근해서 이름이 변경 -> 가변성
var changeName = function(user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

//변경한 user 정보를 user2에도 할당
//가변이기 때문에 user에도 영향을 받게 된다
var user2 = changeName(user, "twojang");  // 함수를 안하고 wonjang을 담고 있는 user를
                                            // user2에 할당하여 userrk twojang이 되버림
                                            

// 결국 아래 로직은 skip됨
if(user !== user2) {
    console.log("유저 정보가 변경되었습니다.");
}
console.log(user.name, user2.name);
console.log(user === user2); //true