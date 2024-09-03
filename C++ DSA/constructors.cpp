#include<iostream>
using namespace std;
class Emp{
public:
    string name;
    int emp_id;
    int salary;
    float increament;

    //     constructors
    Emp(string n,int id,int s,float in){
       name=n;
       emp_id=id;
       salary=s;
       increament=in;
    }
};
int main(){
    Emp n1("Uday kumar",1567,70000,4.7);

    cout<<n1.name<<" "<<n1.emp_id<<" "<<n1.salary<<" "<<n1.increament<<endl;
}