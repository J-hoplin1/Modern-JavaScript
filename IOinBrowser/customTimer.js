window.onload = function() {
    
    let startButton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let displayTime = document.getElementById("display");
    let clearButton = document.getElementById("clear");
    let lapButton = document.getElementById("lap");
    clearButton.onclick = clear;
    //시작 시간
    let startTime;
    // 타이머의 본체
    let timer;

    startButton.onclick = start;
    // 측정하다 stop하면 saveTime에 지금까지 측정된 시간을 저장한다.
    // 동일하게 소수점 2째 자리까지 표시되도록 통일한다. 그렇지 않은 경우 html 애니메이션이 부자연스러워지는 경우가 발생한다.
    let savedTime = parseFloat(Number(0)).toFixed(2); 
    //현재 측정되고 있는 시간데이터, undefined로 초기화
    let timeData;
    //lap counter
    let lapCount = 1;


    function start(){
        console.log(savedTime);
        startButton.onclick = null; // start
        stopButton.onclick = stop; // start시에 start버튼 이벤트 처리기를 비활성화 하고,  stop버튼을 활성화 시킨다.
        clearButton.onclick = null; // de activate clarbutton while running
        lapButton.onclick = lap; // activate lap button while running
        //시작시점의 Date()
        startTime = new Date();
        startButton.value = "start";
        timer = setInterval(
            (() => {
                // 0.01초마다 그때그때의 Date()생성
                let now = new Date();
                /*
                커스텀 해보기

                - stop을 누른 후에 다시 start를 누르면 기존 측정시간에서 이어서 측정되게끔
                
                - clear을 누르면 초기화된다.

                    - clear버튼은 stop() 이벤트가 활성화 되었을때만 실행할 수 있도록 한다.

                    - clear시에는 모든 데이터를 완전히 초기화 해야한다.

                - lap을 누르면 console에 lap을 출력하도록
                */
                displayTime.innerHTML = timeData = parseFloat((((now - startTime) / 1000) + savedTime)).toFixed(2);
        }),10); // 0.01초 마다 HTML요소의 innerHTML프로퍼티로 기록한다.
    }

    // for stop event handler
    function stop(){
        // stop시에 start버튼value를 continue로 변경
        startButton.value = "continue";
        startButton.onclick = start;
        clearInterval(timer);
        savedTime = timeData;
    }

    // for clear event handler
    function clear(){
        // clear시에 start버튼 value start로 변경
        startButton.value = "start";
        savedTime = parseFloat(Number(0)).toFixed(2);
        lapCount = 1;
        timeData = undefined; // init as undefined variable
        displayTime.innerHTML = "0.00"; // 화면상에도 0.00초로 초기화한다.
    }

    // for lap event handler
    function lap(){
        console.log(`Lap No.${lapCount} : ${timeData}`);
        lapCount ++;
    }
};
