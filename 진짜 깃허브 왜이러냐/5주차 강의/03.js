class Car {
    constructor(modelName,modelYear,type,price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    makeNoise() {
        console.log(`${this.modelName}` + "는" + `${this.modelYear}` + "형 입니다 " + `${this.type}` + "이며" + "가격은" + `${this.price}` + "입니다.!");
    }
    Hyundai() {
        return car.makeNoise();
    }
    printModelYear (){
        console.log(this.modelName + "은" + this.modelYear + "입니다.");
    }
}
const car= new Car("아반떼", "2018년식", "승용", 3000 );
const car1= new Car("k3", "2019년식", "승용", 3100);
const car2= new Car("베뉴", "2022년식", "suv", 2400);

// car.makeNoise();
// car1.makeNoise();
// car2.makeNoise();
// car.Hyundai();
car.printModelYear();
car1.printModelYear();
car2.printModelYear();
