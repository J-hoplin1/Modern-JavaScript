/** 
재귀 활용 하노이의 탑


3층 탑이라는 가정하에 알고리즘 풀이과정

1 : A -> C
2 : A -> B
1 : C -> B
3 : A -> C
1 : B -> A
2 : B -> C
1 : A -> C

*/


let hanoi = function(n,a,b,c){
    if(n < 1){
        return;
    }
    else{
        hanoi(n -1, a,c,b);
        console.log(`${n}번 원반이 ${a}에서 ${c}로 이동하였습니다.`);
        hanoi(n-1,b,a,c);
    }
}


let floor = parseInt(prompt("하노이의 탑 층 입력"));
hanoi(floor,"A","B","C")
