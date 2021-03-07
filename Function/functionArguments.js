/** 

함수의 인수

함수 정의식에 작성된 인자 개수보다 적은 인자를 전달하면 생략한 인자의 값은 undefined가 된다

논리연산자 ||(or)의 성질을 이용하면 인수 생략시의 초기값을 설정할 수 있다

||는 왼쪽 피연산자가 true인 경우 왼쪽 피연산자를 반환하고 왼쪽 피연산자가 false인 경우 오른쪽 피연산자를 반환한다.

*/

function multiple(x,y){
    y = y || 10;
    console.log(`x * y = ${x * y}`);
}
multiple(10,2);
multiple(10);

/**

모든 함수에서 사용할 수 있는 지역변수로는 arguments변수가 있다
arguments변수의 값은 Arguments객체이다

Arguments객체 프로퍼티로는 length와 callee가 있다
legnth는 인수의 개수읻고 callee는 현재 실행되고 있는 함수의 참조이다.

arguments변수를 활용하면 인수 개수가 일정하지 않은 가변 인수 함수를 정의할 수 있다.

 */


function myConcat(strs){
    var sep = "";
    for(let i = 1;i < arguments.length;i++){
        sep += arguments[i];
        if(i < arguments.length - 1){
           sep += arguments[0]; 
        }
        else{
            continue;
        }
    }
    return sep;
}

console.log(myConcat("/","apple","orange","peach"));
