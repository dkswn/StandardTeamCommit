//Getter와 Setters  -> 타입 검증을 위해 Setter
//객체 지향 프로그래밍 언어 -> G, S
// 클래스 -> 객체(인스턴스)
// 프로퍼티(constructor) -> 생성자 함수
// new Class(a,b,c)

class Rectangle {
    constructor(height, width) {
        // 언더스코어(this 뒤에 _ ) 는 private으로 만드는 설정임(은밀성)
        this._height = height;
        this._width = width;
    }
    //width를 위한 getter
    get width (){
        return this._width;

    }
    // width를 위한 Setter
    set width (value){
        // 검증 1: value가 음수이면 오류
        if(value <= 0) {
            console.log("[오류] 가로 길이는 0보다 커야합니다")
                return ;
        } else if(typeof value !== "number") {
            console.log("[오류] 가로길이로 입력된 타입이 숫자 타입이 아닙니다.")
            return;
        }
    this._width = value;
    }
    // height를 위한 getter
    get height (){
        return this._height;

    }
  //  height를 위한 Setter
    set height (value) {
          // 검증 1: value가 음수이면 오류
        if(value <= 0) {
            console.log("[오류] 새로 길이는 0보다 커야합니다")
                return ;
        } else if(typeof value !== "number") {
            console.log("[오류] 새로길이로 입력된 타입이 숫자 타입이 아닙니다.")
            return;
        }
        this._height = value;

    }
    //getArea : 가로 * 새로 = > 넓이
    getArea(){
        const a = this._width * this._height;
        console.log(`넓이는  => ${a}입니다`);
    }
}
 const rec1 = new Rectangle(10, 20);
// const rec2 = new Rectangle(10, 30);
// const rec3 = new Rectangle(10, 40);
rec1.getArea();