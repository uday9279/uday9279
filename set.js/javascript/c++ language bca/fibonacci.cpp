#include<iostream>
using namespace std;
int fibo(int n){
    if(n==1||n==2 || n==3){
        return 1;
    }
    return fibo(n-1)+fibo(n-2);
}
int main(){
    int n;
    cout <<"n ";
    cin>>n;
    cout<<fibo(n);
}