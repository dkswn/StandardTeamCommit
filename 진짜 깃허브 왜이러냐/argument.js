//  배열을 담고 있는 객체 
// function main() {
//     console.log(arguments)
// }
// main(1,2,3)

// 화살표 함수로 표현하기

const main = (...args) => {
    console.log(args);
}

main(1,2,3)