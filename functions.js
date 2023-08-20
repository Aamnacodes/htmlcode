function addNums(a,b){
    var c=a+b;             //limits the variable to the function
    console.log(c);
};

addNums(234,100);
//var is function scoped

const getPercentage=function(m1,m2,m3,m4,m5=90){
    let percent=(m1+m2+m3+m4+m5)/5;
    
    return percent;
};
const res= getPercentage(80,90,70,60);
console.log(res);

//arrow function
const getFactorial = (n) => {
    let f=1;
    for(let i=2;i<=n;i++){
        f=f*i;
    }
    return f;
};

const ans= getFactorial(5);
console.log(ans);

const getFactorialWithRec = (n) => {
    if(n==0 || n==1){
        return 1;
    }
    let f= getFactorialWithRec(n-1)*n;
    return f;
}
const ans2 = getFactorialWithRec(5);
console.log(ans2);
