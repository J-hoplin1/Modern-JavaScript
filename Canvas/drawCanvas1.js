window.onload = () => {
    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");
    // Canvas에 내장된 그리기 기능은 사각형 그리기 뿐이다.
    // 다른 그리기를 하기 위해서는 패스를 정의하여 곡선을 그려야한다.
    
    // beginPath() : 이 메소드를 호출하면 렌더링 켄텍스트 패스를 기록하기 시작한다.
    // 이 메소드를 호출하면 지금까지 정의되었던 패스가 초기화되어 새 도형을 그릴 수 있다.
    ctx.beginPath();
    // 패스를 정의하는 메소드를 호출하면 렌더링 컨텍스트에 패스가 추가되어 하나씩 연결된다.
    ctx.moveTo(60,10);
    ctx.lineTo(110,100);
    ctx.lineTo(10,100);
    // closePath()메소드를 호출하면 패스의 마지막 점과 시작점을 직선으로 연결하고 패스를 닫는다
    // 이미 패스가 닫혀있거나 패스 위의 점이 하나일때는 아무런 작업을 하지 않는다.
    ctx.closePath();
    // stroke()나 fill()메소드로 렌더링 컨텍스트에 기록한 패스를 Canvas위에 그린다.
    //stroke()메소드는 패스를 그리고 fill()메소드는 패스로 둘러싼 영역을 채운다.
    ctx.stroke();

    //여기서 beginPath()메소드를 호출하였기 떄문에, 기존 정의된 패스는 초기화된다.
    ctx.beginPath();
    ctx.moveTo(60,50);
    ctx.lineTo(110,140);
    ctx.lineTo(10,140);
    ctx.closePath();
    ctx.fill();

    // moveTo(x,y) 메소드는 패스를 그리지 않는다. 패스를 그리는 펜만 좌표점 (x,y)로 이동한다
    //moveTo()메소드는 패스 시작점을 바꿀때 많이 사용된다.

    ctx.beginPath();
    ctx.moveTo(200,50);
    ctx.lineTo(200,150);
    ctx.moveTo(150,100);
    ctx.lineTo(250,100);
    ctx.stroke();
}
