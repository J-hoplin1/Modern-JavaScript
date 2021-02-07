//함수

function square(x){return x * x;}

console.log(`반지름 길이가 5인 원의 넓이는 : ${square(5)}`);

var p1 = {
    x : 1,
    y : 1
};

var p2 = {
    x : 4,
    y : 5
};

function distance(p,q){
    var dx = q.x - p.x;
    var dy = q.y - p.y;
    return Math.sqrt((Math.pow(dx,2)) + (Math.pow(dy,2)));
}

console.log(`점 p1과 점 p2사이의 거리 : ${distance(p1,p2)}`);
