for( i=0;i<5;i++){
   for(j=0;j<5;j++)
    {
    process.stdout.write("* ")
}
console.log()
}


for(i=0;i<5;i++){
    for(j=0;j<=i;j++){
        process.stdout.write("*")
    }
    console.log()
}



for(i=1;i<5;i++){
    if(i==3){
        continue;
    }
    console.log("hello student",i)
}



let age=17;
while(age<19){
    console.log("drinking not allowed");
    age+=1
}

let right_swaps =10
while(right_swaps >=0){
    if(right_swaps ==3 || right_swaps ==6 || right_swaps ==9){
           right_swaps = right_swaps-1
        continue;

    }
    console.log("keep swap",right_swaps)
    right_swaps = right_swaps-1
}



i=0;
do{
    console.log("hello students")
    i++
}while(i<5)