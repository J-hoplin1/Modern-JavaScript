function polarToDescartes(r,theta){
    let angle = Math.PO * theta / 100;
    return {x : r * Math.cos(angle), y : r * Math.sin(angle)};
}

/** 
문자열 제어하기
*/

// '+' 연산자는 피연산자가 모두 문자열인 경우 문자열로 연결한다.

console.log("Hello " + "World!");
console.log("1" + "+" + "2");
// 피연산자중 하나가 문자열 또는 문자열로 변환할 수 있는 객체라면 다른 피연산자의 타입을 문자열로 바꾼 후 연결한다.

console.log(10 + "This is 'ten'");
console.log("Today date : " + (Date().toLocaleString()));

// 문자열 처리를 위한 객체로 String 객체가 있다. 문자열을 String객체로 변환하려면 String 생성자를 이용한다.
// 이와 같이 원시값(Primitive Value)을 객체로 변환하는 과정을 객체로 래핑(Wrapping)했다고 한다.

a = "Hello World";

// charAt(n) : 대상 문자열의 n번째 문자 (인덱스 번호로)

console.log(a.charAt(4));

// concat([s1,s2....]) : 대상 문자열과 인수의 문자열을 연결하여 반환한다.
console.log(a.concat(" this is Javascript"," Text Edit"))

//indexOf(s) : 대상 문자열에서 s가 처음 나오는 위치이다.
console.log(a.indexOf('W'));

//lastIndexOf(s) : 대상 문자열에서 s가 마지막에 나오는 위치이다.
console.log(a.lastIndexOf('l'));

//replace(s1,s2) : 대상 문자열에 포함된 문자열 s1을 문자열 s2로 치환한 결과값

console.log(a.replace('ll','pp'));

// startsWith(s, [,n]) : 대상 문자열이 s로 시작하는지

console.log(a.startsWith('H'));
console.log(a.startsWith('p'));

// endsWith(s, [,n]) : 대상 문자열이 s로 끝나는지

console.log(a.endsWith('d'));
console.log(a.endsWith('o'));

// length : 문자열 길이 반환

console.log(a.length);

// slice(m,n) : 대상 문자열의 m번째 이후 n번째 미만의 부분 문자열을 반환한다.m,n이 음수면 문자열 끝이 시작 위치이다.

console.log(a.slice(0,5));
 
// split(s) : 문자열 s로 분할한 문자열 배열 반환

console.log(a.split(' '));  

b = "  Test String   ";

// trim() :대상 문자열의 앞뒤 공백을 없애준다.

console.log(b.trim());

// 그리고 당연히 문자열을 읽을때는 charAt()도 방법이지만 대괄호연산자(indexing)또한 방법이다.

c = "Example Sentence";
console.log(c[2]);
