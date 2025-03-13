let score = 40;
let scoreString = String(score);
console.log(typeof scoreString);
console.log(scoreString);

console.log("2" > 3);
/*
let myfun = function(){
  console.log("Hi, God Aaj mei dukhi raha hoo kyu mei aaj se 2 saal phle b.tech krne ka socha tha but 50000 rupees na hone ke karan chor na para jo mere family ek member phele bola mei de duga but jb admission time hua tb bola b.tech kr ke kya hota hai isliye aaj mei bca kr raha hoo yeh mere life ka bahut bara sikh hai ");
}
myfun()

// stack memory = stack store primitive data , issme data ka copy hota hai 
let user = "uday";
user_1 = user;
console.log(user);
user_1 = "rohan";
console.log(user_1);


// heap memory = heap store non-primitive , issme data ka reference hota hai
let userOne = {
  name:"uday"
}
userTwo = userOne
console.log(userOne);
userTwo.name = "Ankush"
console.log(userTwo);



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);

const myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// spread syntex in array
const god_1 = ["Ram","Shyam","krishna"]
const god_2 = ["Hunuman","lakshyam"]
const allGod = [...god_1,...god_2]   // spread operator
console.log(allGod);


// array => of method ==> convert any number in to array
const score_1 = 100;
const score_2 = 200;
const score_3 = 300;
console.log(Array.of(score_1,score_2,score_3));

// object literals
const user_1 = {
  name : "uday",
  age :19,
  course : "BCA"
}
console.log(user_1)

// Create synbol as a key in an array
const mysym = Symbol("Key1")
const obj = {
  name :'Rahul',
  class: 9,
  [mysym]:"mykey1"
}
console.log(obj[mysym]);
console.log(obj);

const obj1 = {1:"a",2:"b"}
const obj2 = {2:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

//  Object construction
const obj_cons = new Object()
obj_cons.name = "vishal"
console.log(obj_cons);

const obj_1 ={
  subject : "Uday",
  course : "BCA",
} 
console.log(obj_1);
//   const {subject} = obj_1
const {subject : name} = obj_1    // Both are same
console.log(name);


//  function
function calculateSum(...num1) {  /// spread operator(...)
   return num1
}
console.log(calculateSum(5,89,32));

// implicit return
const add = (a,b) => a+b;
console.log(add(7,8));

// immediately invoked function expression (IIFE)
(function chai(){
  console.log("IIFE");
})();

( (name) => console.log(`IIFE_2 ${name}`))("uday");

// nullish coalescing operator(??) => null or undefined value ko avoid krne ke liye
let val1;
val1 = 10 ??12;
console.log(val1);
val1 = null ?? 6;    // avoid null value
console.log(val1);

//  break or continue
for(let i=1;i<=10 ;i++){
  if(i==5){
    console.log(`deteted 5`);
    break;
  }
  console.log(i);
}

for(let i=2;i<20;i+=2){
  if(i==10){
    console.log(`continue ${i}`);  // skip one time loopa
    continue;    
  }
  console.log(i);
  
}
*/
// post increament and pre increament
let x=5,y;
y=++x;
console.log(y);
console.log(x);



// filter in Array Or Object
const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.filter( (num) => {      // return new Array greater than
  return num > 5
})    
console.log(newNum);
 
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// let userBooks = books.filter( (bk) => bk.genre === 'Fiction')
// console.log(userBooks);

// let user_2Books = books.filter( (bk) => bk.publish > 2005)
// console.log(user_2Books);

// Map in Array
const nums = [1,2,3,4,7]
const nums_2 = nums.map( (index) => index+10 )
console.log(nums_2);

// reduce (use shoping cards)
const mum = [1,2,3]
const MyNum = mum.reduce( function (acc, currval) {
  console.log(`acc:${acc} and currval:${currval}`);
  return acc + currval  // return acc
},0)

console.log(MyNum);


