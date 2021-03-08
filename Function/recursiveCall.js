/** 

함수가 자기 자신을 호출하는 행위를 가르켜 재귀호출(Recursive Call)이라고 한다.
재귀호출을 수행하는 함수를 재귀함수라고 한다.

*/

let factorial = (n) => {
    if(n < 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

console.log(factorial(10)); 


// 위 팩토리얼 코드를 다르게 변형해보면

let factorial2 = function(n){
    if(n < 1) {
        return 1;
    }
    else{
        return n * arguments.callee(n-1); // 자바스크립트 함수객체의 공통적인 parameter인 argument에는 두가지의 메소드가 있다. length : 매개변수의 총 개수, callee : 현재 실행중인 함수의 참조
        // 재귀 자체의 의미가 현재 실행중인 자기자신을 다시 호출하는 것이므로 callee를 사용하여 나타낼 수 있는것이다.
    }
}

console.log(factorial2(10));
