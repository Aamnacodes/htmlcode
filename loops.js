//wap to print all no divisible by 7 and 11 from 100 to 300.
//wap to print fibonacci series below 100.
//wap to print factorial series of 10 numbers.





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

