//data structure object 

user = { name : 'Raju',email:'raju@email.com',password:'2435'};
console.log(user.name);
console.log( user['email']);

user.address = 'Lucknow';
console.log(user);
//key vlaue mutability
user.password='1234';
console.log(user);

let customkey = 'email';
user[customkey]='raju@hotmail.com';
console.log(user[customkey]);

let smartphone={
    brand:'Samsung',
    model:'521',
    price:70000,
    color:'Black'
};
smartphone.color = ['Black','White','Blue'];
console.log(smartphone);
smartphone.color.push('Red');

console.log(smartphone.color[1]);


const smartphonesList=[
    {brand:'Samsung',model:'s21',price:70000,color:['Black','Blue']},
    {brand:'Apple',model:'i12',price:80000,color:['White','Red','Yellow']},
    {brand:'OnePlus',model:'s21',price:70000,color:['Blue','White']},
    {brand:'Xiaomi',model:'Mi 11',price:50000,color:['Black','Gold']},
    {brand:'Samsung',model:'Nord',price:35000,color:['Black','Gold']},
    {brand:'OnePlus',model:'Mi 11',price:50000,color:['Black','Gold']},
    
    
    

]
//syntax to access price of oneplus pro
console.log(smartphonesList[2].price);

//syntax to add blue color xiaomi 

smartphonesList[3].color.push('Blue');
console.log(smartphonesList[3].color);

//syntax to remove color from apple
smartphonesList[1].color.splice(1);
console.log(smartphonesList[1].color);
//use filter to get all prices listed below price less than 70000
const filteredList =smartphonesList.filter((phone)=>{return phone.price < 70000});
console.log(filteredList);

//use filter to compare  brand
// const filteredList2 =smartphonesList.filter((phone)=>{return phone.brand.toLowerCase()==='Samsung'.toLowerCase()});
// console.log(filteredList2);
const filteredList2 =smartphonesList.filter((phone)=>{return phone.brand.toLowerCase().includes('sung'.toLowerCase())});
console.log(filteredList2);

//use filter to get all phones with color blue
const filteredList3 =smartphonesList.filter((phone)=>{return phone.color.includes('Blue')});
console.log(filteredList3);

//use filter to get all phones with color blue and price less than 70000
const filteredList4 =smartphonesList.filter((phone)=>{return phone.color.includes('Blue')&& phone.price<70000});
console.log(filteredList4);

const brands =smartphonesList.map((phone)=>{return phone.brand})
console.log(new Set (brands));

//use map to 