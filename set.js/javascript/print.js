name = "uday"
age = 19
console.log(name.toUpperCase())
if(typeof age == "string"){
    console.log(age.toUpperCase())
}else{
    console.log("never change in uppercase")
}

var a = 20
if(a%2 == 0){
    console.log("inside a even number")
}else{
    console.log("inside a odd number")
}


//greater number 
a = 17
b = 19
c = 73
if(a<b){
    if(b>c){
       console.log("b is greater") 
    }else{
        console.log("c is greater")
    }
}else {
    if(a>c){
        console.log("a is greater")
    }else{
        console.log("b is greater")
    }
}