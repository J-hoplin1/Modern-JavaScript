// continue lable : 모든 요소의 값이 10인 배열을 찾고 해당 배열의 평균값 구하기

let a = [
    [2,4,6,8],
    [1,5,12,3],
    [7,6,8,5],
    [5,15,3,4],
    [3,2,9,4]
] ;
let maxAvg = Number.NEGATIVE_INFINITY

loop : for(var q = 0; q < a.length;q++){
    let average =0;
    for(var w = 0; w < a[q].length;w++){
        if(a[q][w] > 10){
            continue loop;
        }
        else{
            average += a[q][w];
        }
    }
    average = average / a[q].length;
    console.log(`a[${q}] : average = ${average}`);
}
