// max 값과 min값 찾기
var numbers = [10,20,3,16,45];
var max = (min = numbers[0]); // 10

numbers.forEach(function(numbers){
    // 현재 돌아가는 숫자가 max보다 큰 경우
    if(numbers > max){
        max = numbers;
    }
    if(numbers < min){
        min = numbers;
    }
});
console.log(max, min);

//apply를 활용한 최댓값 최솟값 구하기
var numbers = [10,20,3,16,45];

// var max = Math.max.apply(null, numbers);
// var min = Math.min.apply(null, numbers);
// console.log("apply ->",max, min);

//spread operator
// console.log(numbers);
// console.log(...numbers);

//스프레드로 최대값 최소값 구하기
var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log("spread =>",max, min);


//foreach를 활용한 배열 순회 출력하기
var numbers = [10,20,3,16,45];
var max = (min = numbers[0]); // 10

numbers.forEach(function(numbers, idx){
        console.log(idx + "번째 값 =>" + numbers);
});

