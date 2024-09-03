const person  = {
    name: "uday",
    age: 19,
    greet : function(){
        console.log("hello friends")
    }
}
console.log(person)


const obj = new Object()
console.log(obj)

function emp ( id , name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
 const emp_obj = new emp(2,"uday",70000)
 console.log(emp_obj)


 function fullName(Name) {
    console.log(`welcome ${Name} to ${this.firstName} ${this.lastName}`);
}
let person1 = {
    firstName : "pw",
    lastName : "skills"
} 
fullName.apply(person1,["uday kumar"]);

const number = 25;
const squareRoot = Math.sqrt(number);
console.log(squareRoot);  // Output: 5


console.log(Math.ceil(12.2))

console.log(Math.exp(4));

console.log(Math.round(4.6));

console.log(Math.floor(45.7));


let str = "hello friend"
console.log(str[5])
console.log(str.includes("lo",3))

console.log(str.charAt(1))


for(i=1;i<5;i++){
    if(i==3){
        break;
    }
    console.log("hi I am uday",i)
}