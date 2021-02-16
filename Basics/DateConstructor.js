/**
Built in Object

내장 생성자
 */

 // Date 객체
 var now = new Date();
 console.log(now);

 var then = new Date(2021,2,15);
 console.log(then)

 // Date객체는 계산식 안에서 밀리초 단위 정수로 값의 타입이 바뀐다.
 var elapsed = now - then;
 console.log(elapsed);

 var start = new Date();
/** 
 
    시간을 측정할 코드

*/
 var end = new Date();

 var elapsed = end - start;

 // Date객체가 제공하는 주요메소드. 날짜 시간다룰때 유용히 사용할 수 있다.

 console.log(now.getFullYear()) //연도를 의미
 console.log(now.getMonth() + 1) // 월을 뜻한다. 0부터 시작하므로 실제 월을 구하기 위해서는 + 1 을 해주어야한다.
 console.log(now.getDate()) // 날짜를 뜻한다.
 console.log(now.getDay()) // 요일을 뜻한다. 일요일을 0으로 표기한다. (일 - 월 - 화 -.....)
 console.log(now.getHours()) // 시간을 뜻하는 숫자이다. (24hr 표시제)
 console.log(now.getMinutes()) //분을 뜻하는 숫자이다.
 console.log(now.getSeconds()) // 초를 뜻하는 숫자이다.
 console.log(now.getMilliseconds()) // 시각의 밀리초를 의미하는 값이다.
 console.log(now.toString()) // 현재 시간정보를 String타입으로 반환한다.
 console.log(now.toLocaleDateString()) // 지역화된 시간과 날짜와 시간 정보를 의미한다.
 console.log(now.toLocaleString()) //지역화된 시간과 날짜 정보를 의미한다.
 console.log(now.getUTCHours()) // UTC의 시간값(hr)을 가져온다.
