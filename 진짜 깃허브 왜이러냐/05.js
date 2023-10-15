// 중첩된 객체에 대한 얇은 복사
var copyObject = function(target) {
    var result = {};

    //for ~in 구문을 이용하여,객체의 프로퍼티에 접근할 수 있습니다
    // 하드코디을 하지않아도 된다
    // copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면 됨
    for(var prop in target) {
        result[prop] = target[prop];
    }
    return result;
}

var user = {
    name: 'wonjang',
    urls: {
        portfolio: 'http:/github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/abc',
    }
};
 var user2 = copyObject(user);  // user를 user2에 복사

 user2.name = 'twojang';
 // 가장 밖에 있는 함수는 불변성이 유지 되기 때문에 아래와 같이 false가 나온다
 console.log(user.name === user2.name); // false

 user.urls.portfolio = 'http://portfolio.com';
 console.log(user.urls.portfolio === user2.urls.portfolio);  // true  -> 하지만 중첩함수인 urls 는 불변성이 유지가 되지 않고 값이 바뀌어 버림

 user2.urls.blog = '';
 console.log(user.urls.blog === user2.urls.blog); //true  // 애도 마찬가지 