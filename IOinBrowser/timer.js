window.onload = function() {
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var displayTime = document.getElementById("display");

    //시작 시간
    var startTime;
    // 타이머의 본체
    var timer;
    startButton.onclick = start;
    function start(){
        startButton.onclick = null; // start
        stopButton.onclick = stop; // start시에 start버튼 이벤트 처리기를 비활성화 하고,  stop버튼을 활성화 시킨다.
        startTime = new Date();
        timer = setInterval(
            (() => {
                var now = new Date();
                displayTime.innerHTML = ((now - startTime) / 1000).toFixed(2); // innerHTML : display요소 객체의 innerHTML 프로퍼티에 경과 시간을 대입해 id속성 값이 display인 HTML요소의 내용을 갱신한다.
            }),10); // 0.01초 마다 HTML요소의 innerHTML프로퍼티로 기록한다.
    }
    function stop(){
        clearInterval(timer);
        startButton.onclick = start;
    }
};
