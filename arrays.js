const arr1 =[345,'hello' ,false,console.log];
console.log(arr1);
console.log(typeof arr1);

const movies=['Reply 1988','Cloy','Vampire Diaries','Interstellar','Avengers','Hospital Playlist'];
console.log(movies.length);

//indexing
console.log(movies[3]);
console.log(movies[10]);

console.log(movies.at(-4));

//
movies[2]='Inception';
console.log(movies);

//slicing
console.log(movies.slice(1,4));

console.log(movies.slice(1,-1));

console.log(movies.slice(2));

console.log(movies.slice(2,100));

//adding elements in a array
movies.push('Flash');//add to the end 
movies.unshift('Pathaan');  //adds element at the beginning

console.log(movies);

//removing elements from arrays
movies.pop();   //removes element from the end
movies.shift();       //removes element from the beginning  

console.log(movies);

movies.splice(3,2);    //removes elements from any position
console.log(movies);

console.log(...movies);   //spread operator

console.log( ['ironman',...movies,'batman']);
console.log( [...movies.slice(0,3),'new element',...movies.slice(3)]);

//array traversal

