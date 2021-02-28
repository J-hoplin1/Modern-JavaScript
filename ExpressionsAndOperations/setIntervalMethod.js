/*

setInterval() : 일정한 시간 간격에 따라 반복실해할 함수를 등록할 수 있다.

clearInterval()의 인수로 넘겨 실행하면 함수 실행이 취소될 수 있다.
*/


setInterval((() => {console.log("per 2 seconds")}), 2000);
