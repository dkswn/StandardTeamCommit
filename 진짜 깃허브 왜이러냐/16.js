//유사배열 
var obj  = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};

//객체 -> 배열
 var arr = Array.from(obj); // 객체를 배열로 전환 
 console.log(arr);