/*#include<iostream>
using namespace std;
class Student{
public:
    string name;
    int roll_no;
    float gpa;
};
int main(){
    Student x1;
    x1.name="Uday kumar";
  //  x1.roll_no=45
    cout<<"Enter the roll_no of x1 "<<endl;
    cin>>x1.roll_no;
    x1.gpa=7.6;

    Student x2;
    x2.name="Rahul ";
    x2.roll_no=23;
    x2.gpa=8.6;
    cout<<x1.name<<endl<<x1.gpa<<endl<<x1.roll_no<<endl;
    cout<<x2.name<<endl<<x2.gpa<<endl<<x2.roll_no<<endl;
}
*/

//           passing objects to functions
#include<iostream>
using namespace std;
class Car{
  public:
  string name;
  int price;
  int seats;
  string type;
};
void print(Car c){
  cout<<c.name<<c.price<<c.seats<<" "<<c.type<<" "<<endl;
}
int main(){
  Car c1;
  c1.name="Honda City ";
  c1.price=1500000;
  c1.seats=5;
  c1.type="Sedan";

  Car c2;
  c2.name="Maruti Swift ";
  c2.price=700000;
  c2.seats=5;
  c2.type="Hatchback";
  print(c1);
  print(c2);
  
}












