var obj = {
    a: 3,
    method: function(x, y){
        console.log(this.a, x, y);
    },
};
// method 함수안의 this는 항상 obj!
//obj.method(2,3);
obj.method.call({a : "콜"}, 5,6);
obj.method.apply({a : 4}, [5,6]);