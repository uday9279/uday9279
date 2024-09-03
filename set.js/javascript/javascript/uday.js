amount = 450;
day="monday";
if(amount<=100){
    final_amount=amount-0.1*amount;
}else if(amount>100 && amount<=200){
    final_amount=amount-0.2*amount;
}else if(amount>200 && amount<=500){
    final_amount=amount-0.3*amount;
}else{
    final_amount=amount-0.4*amount;
}
if(day=="monday"){
    final_amount=final_amount-10;
}
console.log(final_amount);

