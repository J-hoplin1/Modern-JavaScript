/**
 배열 (Array)
 */

 var evens = [2,4,6,8];
 //위 코드에서 [] 부분이 배열 리터럴이며, 배열값 하나를 배열 요소라고 부른다.

 for(let a = 0;a < evens.length;a++)
 {
     console.log(evens[a]);
 }

 // 다른 언어에서도 했듯이, index를 통한 indexing이 가능하다.

 var emptyArr = [];
//위와같이 배열 리터럴 안에 아무 요소도 적지 않으면 빈 배열이 생성된다.
console.log(emptyArr);

var a = [2, , 5];
console.log(a); // a를 출력하면 index1에 대한 값이 undefined로 되어있다. 
// 배열에는 모든 타입의 값이 올 수 있다.

// legnth 프로퍼티 : 배열요소의 총 원소 개수를 반환한다.

console.log(`Array evens의 길이 : ${evens.length}`);

// 배열에 없는 요소를 읽으려 시도하면 undefined를 반환한다.

console.log(evens[4]) // undefined

// 자바스크립트 Array는 C, Java의 Array와 달리, '객체' 이며, 객체로 배열의 기능을 흉내낸 것이다.
// 결론적으로 C,Java와 같이 뱅ㄹ 요소가 메모리 연속된 공간에서의 배치 방법이 아니라는 소리이다.

// ECMA6부터는 TypedArray라고 해서 C,Java에서의 배열과 동일한 배열이 추가되었다.

// 배열 요소추가
evens.push(10);
console.log(evens);
// 배열요소 제거
delete evens[0];
console.log(evens);

// delete를 사용해 요소를 제거ㅏ였다고 하더라도, length값이 변하지 않는다. 단지 value만 사라진 것이다.

// 희소배열

/** 
배열에 요소를 추가하거나 제거하면 인덱스가 0부터 시작되지 않는 배열이 만들어진다.
이러한 배열을 '희소배열'이라고 부른다 

*/

var b = ["A","B",'C'];
b[4] = "E";
console.log(b); // 인덱스 3의 값이 empty로 되어있다.

/** 
이 배열을 객체 리터럴로 표시하면 다음과 같다.
{"0" : "A", "1" : "B", "2" : "C","4" : "E"}
*/

// 배열에 특정 요소가 있는지 확인하는법
// 배열에 특정 요소가 있는지 확인하는 방법은 객체의 프로퍼티가 있는지 확인하는 방법과 같다.
// in문도 있지만, hasOwnProperty메소드를 이용해서 확인할 수 도 있다.

console.log(b.hasOwnProperty("3")); //false
console.log(b.hasOwnProperty("4")); //true
