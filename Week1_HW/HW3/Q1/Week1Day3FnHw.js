
function summation(n){
    sum=0
    for (i=0; i<=n; i++){
        sum=sum+i
    }
    return sum;
}

function summationEven(n){
    sum=0
    for (i=0; i<=n; i++){
        if (i%2==0){
            sum=sum+i
        }
    }
    return sum;
}

console.log(summation(5))
console.log(summationEven(5))