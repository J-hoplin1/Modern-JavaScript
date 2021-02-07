/*
블록 유효범위

let

let문은 블록 유효범위를 갖는 지역변수를 선언한다.
사용법은 var과 같지만 차이점은 let으로 선언한 변수는 유효범위가
선언된 '블록' 안이라는 점이다.


var x = 'out x';

{
    var x = 'in x';
    var y = 'in y';
    console.log(`${x}`);
    console.log(`${y}`);
}
console.log(`${x}`);
console.log(`${y}`); 여기서는 let선언자와 달리 in y가 출력되는 것을 볼 수 있다.

추가적으로 JS엔진에서 var로 선언된 변수는 호이스팅이 가능하지만 let으로 선언된 변수는 호이스팅이 되지 않는다.


let x = 'out x';

{
    let x = 'in x';
    let y = 'in y';
    console.log(`${x}`);
    console.log(`${y}`);
}
console.log(`${x}`);
console.log(`${y}`); //Uncaught ReferenceError: y is not defined

// const : const문은 유효 범위를 가지면서 한번만 할당할 수 있는 상수를 선언한다. const또한 let과 동일하게 동작한다. 단 const는 '반드시 초기화' 해야한다.
// 상수는 말그대로 값을 수정할 수 없지만 상수 값이 객체 혹은 배열인 경우에는 프로퍼티 값 수정이 유효하다.

const x = 'out x';

{
    const x = 'in x';
    const y = 'in y';
    console.log(`${x}`);
    console.log(`${y}`);
}
console.log(`${x}`);
console.log(`${y}`); //Uncaught ReferenceError: y is not defined
*/

const org = {
    x : 1,
    y : 2
};

console.log(org);

org.p = 10;
console.log(org); //변수 org는 상수지만 객체를 값으로 받고있다. 상수지만 값이 객체이기 때문에 프로퍼티 추가가 가능하다.
