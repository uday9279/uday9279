
//         using Third variable
/*
#include<iostream>
using namespace std;
int main(){
    int x,y,temp;
    cout<<"Enter the value of x = ";
    cin>>x;
    cout<<"Enter the value of y = ";
    cin>>y;
    temp=x;
    x=y;
    y=temp;
    cout<<"The value of x = "<<x<<endl;;
    cout<<"The value of y = "<<y;
}



#include<iostream>
using namespace std;
int main(){
    int x,y;
    cout<<"Enter the value of x = ";
    cin>>x;
    cout<<"Enter the value of y = ";
    cin>>y;
    x=x+y;
    y=x-y;
    x=x-y;
    cout<<"The value of x = "<<x<<endl;
    cout<<"The value of y = "<<y<<endl;
}


//         pass by value
#include<iostream>
using namespace std;
void swap(int x,int y){
    int temp=x;
    x=y;
    y=temp;
}
int main(){
    int x,y;
    x=14;
    y=9;
    cout<<x<<" "<<y<<endl;
    swap(x,y);
    cout<<x<<" "<<y;
}



//           pass by reference

#include<iostream>
using namespace std;
void swap(int& x,int& y){
    int temp=x;
    x=y;
    y=temp;
}
int main(){
    int x,y;
    x=14;
    y=9;
    cout<<x<<" "<<y<<endl;
    swap(x,y);
    cout<<x<<" "<<y;
}

*/             
//                 By using pointer


#include<iostream>
using namespace std;
void swap(int* x,int* y){
    int temp=*x;
    *x=*y;
    *y=temp;
}
int main(){
    int x,y;
    x=14;
    y=9;
    cout<<x<<" "<<y<<endl;
    swap(&x,&y);
    cout<<x<<" "<<y;
}
