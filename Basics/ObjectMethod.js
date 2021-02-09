/*
객체 프로퍼티 중 함수 객체의 참조를 값으로 담고 있는 프로퍼티를 메소드 라고 부른다.

메소드를 정의할때는 프로퍼티값으로 함수 리터럴을 대입해 준다.
*/

var circle = {
    center : {
        x : 1.0,
        y : 2.0
    },
    radius : 2.5,
    area : function(){
        return Math.PI * Math.pow(this.radius,2)
    } 
};

console.log(circle.area())

/*
메소드 또한 프로퍼티의 일종이므로 나중에 추가해줄 수 있다.
*/

circle.move = function(a,b){
    this.center.x += a;
    this.center.y += b
};

circle.move(4,5)
console.log(circle.center)

/*
여기서 알 수 있듯이 메소드는 일반적으로 메소드가 속한 객체의 내부 프로퍼티 값의 상태를 바꾸는 용도로 주로 사용한다.
*/
