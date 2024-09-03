/*

include<iostream>
using namespace std;
int main(){
    int x=9;
    cout<<&x;
}

*/

#include<iostream>
using namespace std;
int main(){
    int x=3;
    int *p=&x;
    cout<<x<<endl;
    cout<<p<<endl;
    cout<<&x<<endl;
    cout<<*p<<endl;;
    cout<<&p;
}

