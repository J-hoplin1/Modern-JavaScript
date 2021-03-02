/** 
예제를 변형해보자 No.1
Custom 내용
- clear버튼
- lap 버튼
TODOS
- 시 / 분 / 초 / millisecond 로 표현하게끔
*/


window.onload = function() {
    
    // Element tag
    let display = document.getElementById("display");
    let startbtn = document.getElementById("start");
    let stopbtn = document.getElementById("stop");
    let clearbtn = document.getElementById("clear");
    let lapbtn = document.getElementById("lap");


    // Essential Variable

    // start btn event handler
    startbtn.onclick = start;
    // timer variable
    let timer;

    // start Period Date object
    let startPeriod;
    // estimate date object per 0.01 second
    let estimation;
    // saved time after stop
    let savedTime = parseFloat(Number(0)).toFixed(2);
    // save real time data while estimating
    let realTime;
    // lap number
    let lapCount = 1;

    // pre lap time data
    let lastLapTime;

    // Event Handler functions
    function start(){
        startbtn.value = "start";
        // Activation / Deactivation of btn
        startbtn.onclick = null; // Deactivate
        stopbtn.onclick = stop;
        clearbtn.onclick = null; // Deactivate
        lapbtn.onclick = lap;

        // start period date object
        startPeriod = new Date();
        timer = setInterval((() => {
            // get date object every 0.01 second
            estimation = new Date();
            display.innerHTML = realTime = (parseFloat(((estimation - startPeriod) / 1000)) + parseFloat(savedTime)).toFixed(2);
        }), 10);
    }

    function stop(){
        // stop timer
        clearInterval(timer);
        // saved latest realtime estimate data
        savedTime = realTime;

        // activat / deactivat button + change HTML Element value
        startbtn.value = "continue";
        startbtn.onclick = start;
        stopbtn.onclick = null; // Deactivate
        clearbtn.onclick = clear;
        lapbtn.onclick = null; // Deactivate
    }

    // clear이벤트는 stop이벤트의 종속 이벤트이므로 버튼 활성/비활성에 대한 개입을 하지 않아도 된다.
    function clear(){
        savedTime = parseFloat(Number(0)).toFixed(2);
        lapCount = 1;
        display.innerHTML = "0.00";
    }
    
    function lap(){
        if(lapCount === 1){
            console.log(`Lap No.${lapCount} : ${realTime}`);
            lastLapTime = realTime;
            lapCount++;
        }
        else{
            console.log(`Lap No.${lapCount} : ${realTime}\nGap between Lap No.${lapCount - 1} : ${(parseFloat(realTime) - parseFloat(lastLapTime)).toFixed(2)}`);
            lastLapTime = realTime;
            lapCount++;
        }
    }
};
