/** 

자바스크립트에 함수를 정의하는법에는 4가지가 있다

1. 함수 선언문으로 작성

2. 함수 리터럴로 정의

3. Function생성자를 이용

4. 화살표 함수 표현식으로 정의 (ECMA6부터 추가됨)


중첩함수 : 특정 함수의 내부에 선언된 함수를 가르켜 중첩함수라고 한다.
자바스크립트의 중첩 함수는 외부함수의 '최상위 레벨'에만 중첩함수를 작성할 수 있다
-> if while for문 등의 내부에는 작성할 수 없다는 의미
*/

function norm(x){
    function sumArray(){
        let sum = 0;
        for(let y = 0; y < x.length;y++){
            sum += x[y];
        }
        return sum;
    }
    let sumAll = sumArray();
    return Math.sqrt(sumAll)
}


let u = [2,1,3,5,7];
let i = norm(u);
console.log(i);
