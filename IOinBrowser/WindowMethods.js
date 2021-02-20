/** 
대화상자 표시하기

대화상자란
웹브라우저 전역객체인 window객체에는 대화상자를 표시하기 위한 메소드세개가 있다.

alert : 경고창
prompt : 사용자로부터 입력받는 창
confirm : 확인 취소가 있는 대화상자이다. 확인을 누르면  true를 반환하고 취소를 누르면 false를 반환한다.

대화상자란 입력을 하거나 메세지를 확인하기 위해 별도로 여는 창을 의미한다

대화상자는 모달(Modal)창이다. Modal창이란 대화상자가 떠있는 중에는 부모 창의 작업이 일시적으로 정지되어 조작하지 못한다는 의미이다.
*/

alert("대화상자 : alert");

var name = prompt("이름을 입력하세요");
var height = parseFloat(prompt("키를 입력하세요"));

console.log(`이름은 ${name}이며 키는 ${height}cm입니다`);
console.log(typeof height);

console.log(confirm("링크를 표시하시겠습니까?"));
