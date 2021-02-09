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
}

console.log(circle.area())
