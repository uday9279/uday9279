/*
#include<iostream>
using namespace std;
int main()
{
    int a,b;
    cout<<"Enter your first number = ";
    cin>>a;
    cout<<"Enter your second number = ";
    cin>>b;
    cout<<"sum of number "<<a+b; 
}


#include<iostream>
using namespace std;
int main(){
    char alphabet;
    cout<<"Enter alphabet ";
    cin>>alphabet;
    if(alphabet=='a'||alphabet=='e'||alphabet=='i'||alphabet=='o'||alphabet=='u'){
        cout<<alphabet<<" is vowel";
    }
    else{
        cout<<alphabet<<" is consonant";
    }
}



#include<iostream>
using namespace std;
int main()
{
    float pie=3.14,a;
    cout<<"Enter he radius of circle ";
    cin>>a;
    cout<<"Area of circle "<<pie*a*a; 
}


//     typecasting for ascii
#include<iostream>
using namespace std;
int main(){
    char ch;
    cout<<"Enter a single character ";
    cin>>ch;
    cout<<(int)ch;   // Typecating
}


#include<iostream>
using namespace std;
int main(){
    int row,col,n;
    cout<<"Enter the value ";
    cin>>n;
    for(row=1;row<n;row++){
        for(col=1;col<=n;col++){
            cout<<"* ";
        }
        cout<<endl;
    }
}

*/


#include<iostream>
using namespace std;
int main()
{
    int row ,col,n;
    cout<<"Enter the value ";
    cin>>n;
    for(row=1;row<=5;row++){
        for(col=1;col<=row;col++){
            cout<<row<<" " ;
        }
        cout<<endl;
    }
}