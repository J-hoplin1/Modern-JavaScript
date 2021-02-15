/*

생성자 (Constructor)
*/

function Cards(suit, rank){
    this.suit = suit;
    this.rank = rank;
}

var card = new Cards('Heart','A');
console.log(card)

/*  
위의 예시처럼 new연산자로 객체를 생성할 것이라 기대하고 만든 함수를 생성자라고 부른다.
생성자는 자신이 생성자라는 것을 알리기 위해 첫글자를 대문자로 쓴다(Pascal 표기법)


JavaScript에는 클래스가 없기때문에, 생성자로 생성한것을 인스턴스라고 할 수 없지만 관례적으로 인스턴스라고 부른다.
*/

// 생성자는 함수이므로 프로퍼티에 값을 대입할 수 있으며, 아래 velocity 프로퍼티와 같이 초기화를 통한 유동적인 값 변경도 가능하다.
function Particle(x,y,vx,vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(Math.pow(vx,2) + Math.pow(vy,2));
}

var p = new Particle(0,0,3,4);
console.log(p)
console.log(p.velocity)

function Circle(center, radius){
    this.center = center;
    this.radius = radius;
    this.area = function(){
        return Math.PI * Math.pow(this.radius,2);
    }
}

var p = {
    x : 0,
    y : 0
};
var c = new Circle(p,2.0);
console.log(`원의 넓이 : ${c.area()}`)

// 메서드 함수 안에서 this를 사용하면 그 값이 인스턴스의 프로퍼티임을 명시할 수 있다.
