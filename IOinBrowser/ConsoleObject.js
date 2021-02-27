/** 

console객체의 메서드로 콘솔에 값을 출력하는 방법을 알아보자.

Console객체는 주로 동작확인, 디버깅에 자주 사용된다.

*/
//Console.dir : 객체의 대화형 목록을 출력한다

// 주의할 점이 있다. 객체 메소드를 생성할때 메소드는 객체와 관련된 함수로서 데이터와 멤버변수에 대한 접근 권한을 가진다.
// 화살표 함수는 this를 바인딩 하지 않는다. 그렇기에 화살표함수는 메소드로 적합하지 않다.

var a = {
    Number : "100",
    value1 : 200,
    value2 : 300,
    valueAverage : function(){
        return this.value1 + this.value2;
    }
};

console.dir(a);

// console.log : 일반적인 로그출력
console.log(a.valueAverage());


// console.trace() : 스택 트레이스를 출력한다.
function test1(){
    function test2(){
        function test3(){
            console.trace();
        };
        test3();
    };
    test2();
};
test1();


// console.time : 처리 시간 측정용
console.time("timer");

prompt("Test Value를 입력하세요.")

console.timeEnd("timer");
