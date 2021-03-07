/** 

라벨문

라벨이름 : 문장

라벨 이름에는 모든 식별자를 사용할 수 있다. JS에서는 라벨로 점프할 수 있는 문장은 break와 continue문 뿐이다.

사용 형태 : break (라벨이름) continue(라벨 이름)
*/

loop : while(true){
    if(confirm("종료하시겠습니까?")) break loop;
}
