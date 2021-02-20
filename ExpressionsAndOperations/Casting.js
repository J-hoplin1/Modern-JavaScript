/**

명시적 타입변환

JS는 연산을 할 떄 피연산자의 타입을 묵시적으로 변환해 유연하게 계산한다.
하지만 반대로 데이터를 출력한다거나 할떄 명시적으로 타입을 변환시켜야할 경우도 있다.

 */

console.log(10 + " Seconds"); // 숫자 + 문자열인경우 숫자타입을 문자열로 변경한다.

/** 
 
Number객체 메소드 활용

toString : 숫자를 문자열로 반환한다. parameter로 기수를 넘기면 진법 변환이 가능하다.
toFixed : 숫자의 소수점 아래 자리수를 지정한다.
toExponential : 숫자의 소수점 아래 자리수를 지정한 문자열로 바꾸되 지수 함께 표시

*/

var n = 25;
console.log(n.toString());
console.log(n.toString(2));

var m = 123.456;

console.log(m.toString());
console.log(m.toString(2));
console.log(m.toFixed(2));
console.log(m.toExponential());

/** 

문자열 숫자로 변환하기

parseInt() 와 parseFloat()사용하기


위 두 함수는 문자열을 해석하여 숫자로 바꾸는 함수이다.
첫번째 문자를 숫자로 해석할 수 없는 경우 NaN을 반환한다.
문자옆 앞이 0x나 0X로 시작할 경우 16진수로 해석한다.

parseInt()의 두번째 parameter를 기수로 설정하면, 입력된 문자열을 해당 기수로 해석하여 결과값을 반환하다.
*/

console.log(parseInt("3"));
console.log(parseInt("3.14")); // 소수점부터 뒤 까지 모두 짤린다.
console.log(parseFloat("3.14"));
console.log(parseInt("0xFF")); // 시작이 0x이므로 16진수 값으로 읽는다
console.log(parseInt("abc")); // 숫자로 해석할 수 없으므로 NaN반환한다.

console.log(parseInt("101",2)); 
console.log(parseInt("ff",16));
