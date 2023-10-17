var newArr = [10, 20, 30].map(function(index, currentValue) { // 매개변수 순서 변경 후 결과 달라짐
    console.log(index, currentValue);
    return currentValue + 5;  //컴푸터는 여기를 index로 이해함
})
console.log(newArr);