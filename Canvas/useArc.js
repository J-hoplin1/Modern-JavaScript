//원호 그리기 : arc(x,y,radius,startAngle,endAngle,anticlockwise)
// arc메소드는 원호를 그린다
//(x,y) : 원의 중심 좌표
//radius : 원 반지름
//startAngle : 원호의 시작 각도(단위 라디안)
//endAngle : 호의 끝 각도(단위 라디안)
//anticlockwise : true면 시계반대 false만 시계방향


// radius로 변환하려면 (각도) * Math.PI / 180을 해주면 된다.

window.onload = () => {
    let canvas = document.getElementById("context");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,100,80,30 * Math.PI / 180, 120 * Math.PI / 180, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(100,100,80,30 * Math.PI/180,120* Math.PI / 180, true);
    ctx.fill();
};

// 결과로 원이 나오는것을 볼 수 있다.
// 우선 처음에 30도에서 120도로 시계반대 방향으로 선을 긋는다
// 그 다음 30도에서 120도로 시계방향으로 선을 긋는다.
