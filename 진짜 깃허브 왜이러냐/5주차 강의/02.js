//클래스라는 설계도 만들기
class Person{
    //사람이기 때문에 필수요소
    // name, age
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        // console.log(this.name + "Hello");
        console.log(`${this.name}` + " 나이는" + `${this.age}` + "살 이에요!");
    }
    printMyAge() {
        console.log("(2)" + `${this.name}` + " 나이는" + `${this.age}` + "살 이에요!");
    }
}
//설계도를 통해 인스턴스(실제 사물) 만들어봅시다,
// 이름은 홍길동이고 나이는 30살인 사람을 하나를 만들어줘!(설계도)
const person1 = new Person("홍길동", "30");
const person2 = new Person("홍길순", "25");

person1.printMyAge();
person2.printMyAge();