window.onload = () => {
    let canvas = document.getElementById("canv");
    let ctx = canvas.getContext("2d");
    // arcTo()메소드는 선과 선을 연결하는 모서리를 원호로 그린다.
    // arcTo(x1,y1,x2,y2,radius)
    // 현재 좌표 (x0,y0) 을 시작점으로 삼아 (x1,y1)에서 반지름이 radius인 원호를 그린다
    // 그 후 (x2,y2)까지 선을 현재 좌표에서 원호의 마지막점까지 그린다.
    ctx.beginPath();
    ctx.moveTo(100,100); // 10,10좌표로 이동한다
    ctx.arcTo(250,10,250,160,50);
    ctx.lineTo(250,160);
    ctx.stroke();
}
