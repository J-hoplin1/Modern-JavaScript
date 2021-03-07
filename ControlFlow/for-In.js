/** 

for / in 문은 객체 안의 프로퍼티를 순회하는 반복문이다.

for (변수 in 객체 표현식) 문장

for / in 문이 실행되면 객체 표현식을 평가한다. 

객체표현식이 객체로 평가되면 객체의 프로퍼티 이름이 변수에 할당된다
각 프로퍼티에 대해 문장은 한번씩 실행된다
만약 객체 표현식이 null, undefined로 평가되면 for/in문을 빠져나온다.

*/

let obj = {
    a : 1,
    b : 2,
    c : 3
};

for (let u in obj){
    console.log(`u = ${u}`);
}

for (let y in obj){
    console.log(`obj.${y} = ${obj[y]}`);
}
