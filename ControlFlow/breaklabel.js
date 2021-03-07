
let a = [2,4,6,8,10];
let b = [1,3,5,6,9,11];

loop : for(var p = 0; p < a.length;p++){
    for(var o = 0; o < b.length;o++){
        if (a[p] === b[o]){
            break loop;
        }
    }
}

console.log(`a[${p}] === b[${o}] -> ${a[p]}`);
