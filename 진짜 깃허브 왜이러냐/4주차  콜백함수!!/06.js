//obj
// 2가지 속성
var obj = {
    vals : [1,2,3],
    logValues: function(v, i) {
        console.log(">>>start");
        if(this === global){
            console.log("global이라 원한지 않는 결과");
        } else {
            console.log(this, v,i);
        }

        console.log(">>> end");
    },
};
// method로써의 호출
// obj.logValues(1, 2);

[4,5,6,].forEach(obj.logValues);   /// 함수 자체를 넣은 것