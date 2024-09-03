
//             Recursion

/*        print   n to 1
#include<iostream>
using namespace std;
void print(int n){
    if(n==0){
        return;
    }
    cout<<n<<endl;
    print(n-1);
}
int main(){
    print(10);
}


//              print 1 to n (using second variable)

#include<iostream>
using namespace std;
void print(int x,int n)
{
    if(x>n){
        return;
    }
    cout<<x<<endl;
    print(x+1,n);
}
int main(){
   int n;
   cout<<"Enter the value of n = ";
   cin>>n;
   print(1,n);
}


//     print 1 to n (uisng one variable)
#include<iostream>
using namespace std;
void print(int n){
    if(n==0){
        return;
    }
    print(n-1);
    cout<<n<<endl;
    //print(n-1);
}
int main(){
    print(10);
}

*/

//               print sum from 1to n(Return type)
#include<iostream>
using namespace std;
int sum(int n){
    if(n==1){
        return 1;
    }
    return n+sum(n-1);
}
int main(){
    int n;
    cout<<"Enter n = ";
    cin>>n;
    cout<<sum(n);
}


