window.onload = () => {
    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");

    ctx.strokeRect(10,10,200,150);
    ctx.fillRect(50,40,120,90);
    ctx.clearRect(90,65,40,40);
}
