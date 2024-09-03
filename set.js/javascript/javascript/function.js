function operate(a,b,fn){
    console.log(fn(a,b));
}
function sum(a,b){
    return a+b
}
operate(7,9,sum)

function sum2(){
   console.log(arguments)
   let sum=0;
   for(i=0;i<arguments.length;i++){
    sum=sum+arguments[i]
   }
   return sum2
}
console.log(sum(6,3)) 
function findEvenOdd(num){
     if(num%2 == 0){
        return "even"
     }else{
        return "odd"
     }
}
console.log(findEvenOdd(24))


//arrow function
findEvenOdd = (num) =>{
    if(num%2 == 0){
        return "even"
     }else{
        return "odd"
     }
}
console.log(findEvenOdd(67))

function name(a,b) {
   console.log("add of",a,"and",b,"is")
   return a+b;
}
console.log(name(5,8))


function fact(num){
   if(num == 0 || num == 1){
       return 1
   }
   result = 1
   for(i=1;i<=num;i++){
       result=result*i
   }
   return result
}
console.log(fact(5))





