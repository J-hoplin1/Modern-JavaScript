/** 

Window객체에는 setTimeout과 setInterval메소드가 있다.

이 메소드들을 이용하면 지정된 시간이 흐른 후 함수를 실행하거나 일정한 시간 간격에 따라 함수를 반복 실행할 수 있다

setTimeout을 이용하면 일정 시간이 흐른 후에 한 번만 호출되는 함수를 등록할 수 있다.

매개변수는 아래와 같다
param1 : 실행하고자 하는 함수 참조(리터럴, 함수)
param2 : 지연시간을 ms로

setTimeout()이 반환한 값을 clearTimeout()의 인수로 넘겨 실행하면 함수 실행이 취소된다.
*/

setTimeout((() => console.log("setTimeout Methd")), 10000);
