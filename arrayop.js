//Map function
const nums=[23453,46,23,39,3,8];
 const newNums=[];

 for(let i of nums){
    console.log(i ** 2);
    newNums.push(i ** 2);
 }

 console.log(newNums);

 const result=nums.map ((n) => {return n**2});
 console.log(result);

 const prices=[3400,2347,99,27,494,988];

 const result2=prices.map((p) => {return p + p*0.1});
 console.log(result2);

 //use map to get discounted prices at 7.5% discount

 const result3=prices.map((p) => {return p-(p*7.5/100)});
 console.log(result3);

 //use map to get the prices in integer format
const pr=['$67.89','$348.99','$29384.22','$4.102','$1.241'];
console.log(parseInt('$823.564').slice(1));


//to convert names in upper case
const names=['aamna','saman','fariha','ruba'];
const rs=names.map((p) => {return p.toUpperCase()});
console.log(rs);

//to get first names from array of full names

const names2=['aamna khan','saman abid','fariha khan','ruba bano'];

let res =  names2.map(name =>
{
    [first, rest] = name.split(" ");
    return first;
});
console.log(res);

//to ger square roots of a number in an array
const nosq=['25','49','121','144'];
const sq=nosq.map((p) => {return Math.sqrt(p)});
console.log(sq);

