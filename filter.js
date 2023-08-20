const prices=[2300,499,233,199,450,3400,1800];
const filteredprice1 = prices.filter((p)=> {return p<500});
console.log(filteredprice1);

const names=['Raju','Kaliya','pinki'];
//create a filter to get names with length greater than 5
const lesThan5= names.filter((name) => {return name.length >5});
console.log(lesThan5);
// Create an array of names and filter to get all names starting with s. (use startsWith()).
const names2=['sarika','sam','john','smith','alen'];
const filteredName=names2.filter((name)=>{return name.startsWith('s')||name.startsWith('S')});
console.log(filteredName);

//Create an array of numbers and filter to get all perfect squares.
const PerfectNo=[16,17,36,81,55];
function isPefectSquare(num){
    if (Math.sqrt(num) === parseInt(Math.sqrt(num))){
        return num;
    }
};
const filterPerfect= PerfectNo.filter(isPefectSquare);
console.log(filterPerfect);
// Create an array to filter all prime numbers.
const primes=[2,3,5,8,26,7,33,35,49];
function isPrime(n)
{
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}

const filterPrime= primes.filter(isPrime);
console.log(filterPrime);

