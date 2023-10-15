//재귀적 깂은 복사 코드
var copyObject = function(target) {
    var result = {};
    if(typeof target === 'object' && target !== null) {
        for(var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);  // 본인 함수 자체를 검사를 실시해 깊은 복사를 함
        }
} else {
    result = target;
}
 return result;
}

//모든 요소들을 불변성을 유지시킨다.