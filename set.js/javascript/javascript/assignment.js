marks = 78
if(marks >90){
    console.log("A grade")
}else if(marks >70 && marks <90){
    console.log("B grade")
}else if(marks >50 && marks<70){
    console.log("C grade")
}else{
    console.log("f grade")
}




let a = 25;
let b = 30;
for(a=25+1;a<=30;a++){
    console.log(a)
}




number = 0
console.log(number>0?"positve":number<0?"negative": "zero")



let username = "admin";
let password = "12345";
if(username == "admin" && password == "12345"){
    console.log("login successful")
}else{
    console.log("Invaild credentials")
}



paymentmethod = "debit"
switch(paymentmethod){
    case "credit" :
        console.log("processing fee of 2%")
        break;
    case "debit" :
        console.log("processing fee of 1.5%")
        break;
    case "paypal" :
        console.log("processing fee of 3%")
        break;
    default :
         console.log("Invalid ")
}



let Temperature = 15
console.log(Temperature>30?"hot":"Moderate")



for(i=0;i<10;i++){
    console.log(i)
    console.log("uday")
}




for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }



}
for(i=0,j=10;i<j;i++,j--){
    console.log("hello students","i","j",i,j)
}

for(i=0;i<5;i++){
 Process.stdout.write("* ")
}
console.log();