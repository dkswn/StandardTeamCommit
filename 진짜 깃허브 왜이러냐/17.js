// person이라는 함수를 만듬으로써 가독성이 좋고 효율적이게 됨
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Student(name, gender, school) {
    Person.call(this, name, gender);
    // this.name = name;
    // this.gender = gender;
    this.school = school;
}
function Employee(name, gender, company) {
    Person.call(this, name, gender);
    // this.name = name;
    // this.gender = gender;
    this.company = company;
}

var kd = new Student("홍길동", "남성", "서울대");
var ks = new Employee("길순", "여성", "삼성");