let a=20;
let b=200;
let c=40;
if(a>b){
    if(a>c){
        console.log("a is greater");
    }
    else{
        console.log("c is greater");
    }
}
else if(b>a){
    if(b>c){
        console.log("b is greater");
    }
    else{
        console.log("c is greater");
    }
}
console.log(a>b && a>c ? "a is greater": b>a && b>c ? "b is greater":"c is greater");