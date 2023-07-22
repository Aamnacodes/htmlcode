//wap to print all no divisible by 7 and 11 from 100 to 300.
//wap to print fibonacci series below 100.






	// Iterate from 0 to N
	for(let j = 100; j < 300; j++)
	{

		// Short-circuit operator is used
		if (j % 7 == 0 || j %  11== 0)
			console.log(j + " ");
	}

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt('Enter first number: '));
const higherNumber = parseInt(prompt('Enter last number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}