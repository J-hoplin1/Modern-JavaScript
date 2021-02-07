/*
객체

객체란 이름과 값을 한 쌍으로 묶은 데이터를 여러개 모은것을 의미한다.

객체는 데이터 여러개를 하나로 모은 복합데이터로 '연관배열' 혹은 '사전(Dictionary)'라고 한다.

객체에 포함된 데이터 하나(Key : Value)를 가르켜 '프로퍼티'라고한다.

객체 생성에는 두가지 방법이 있다.

1. 객체 리터럴을 사용하기

2. 생성자를 사용하기

*/

// 객체리터럴

var card = {
    suit : '하트',
    rank : 'A'
}; // {} 부분이 개체 리터럴이며, 객체 리터럴을 card변수에 대입한것이다.

// 프로퍼티 값에는 모든 데이터 타입의 값, 표현식 대입이 가능하며, 프로퍼티 값을 읽은 때는 . 연산자나 [] 연산자 사용한다.

console.log(`card.suit : ${card.suit}`);
console.log(`card.rank : ${card["rank"]}`);
console.log(`card.p : ${card.p}`) //이와 같이 객체에 존재하지 않는 프로퍼티 값을 읽으려 시도하면 undefined반환한다.

card.value = 10; // 프로퍼티는 다음과 같이 추가할 수 있다.
console.log(card);

delete card.rank; //delete를 이용하여 객체 내 프로퍼티 삭제가 가능하다.

console.log(card);

// in연산자를 이용하면 객체에 있는 특정 프로퍼티의 유무 여부를 확인할 수 있다. 주의할 점은 JS의 in연산자는 상속된 모든 프로퍼티를 확인한다는것에 유의해야한다.
// in연산자는 프로퍼티가 있는 경우true없는경우 false를 반환한다.
console.log("suit" in card);
console.log("rank" in card);
console.log("toString" in card); //object객체를 상속받았기 때문에 true로 나온다 


// 다른 객체 리터럴 예시

var circle = {
    center : {x : 1.0, y : 2.0},
    radius : 2.5
};

console.log(circle.center.y)
