//둥근 모서리 그려보자

window.onload = () => {
    let canvas = document.getElementById("context");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(200,10);
    ctx.arc(200,60,50,-Math.PI/2,0,false);
    ctx.lineTo(250,160);
    ctx.stroke();
};
