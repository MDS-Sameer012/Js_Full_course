// we can use class keyword as we use in java after ES6 only but it still a sugaratic syntax and behind the scene it converted to constructor function and prototypes
class Employee {
    static employeesId = 1;
  constructor(name, email, departement) {
    this.name = name;
    this.email = email;
    this.departement = departement;
   Employee.assignEmployeeId(this);
    // this.id = Employee.assignEmployeeId();
  }
  // static function in class : the instance of class will not have any access of static (function or variable) and it will also not inherited by child class
  static assignEmployeeId(instance) {
    instance.id =  Employee.employeesId++;
  }
//   static assignEmployeeId() {
//     return employeesId++;
//   }
  // Employee.assignEmployeeId();

  displayDetails() {
    console.log(`Employee Name : ${this.name}`);
    console.log(`Employee Email : ${this.email}`);
    console.log(`Employee departement : ${this.departement}`);
  }
  updateEmail(email) {
    this.email = email;
  }
}

const sameer = new Employee("Sameer", "sameer@gmail.com", "Web Devlopement");
const sohail = new Employee("sohail", "sohail@gmail.com", "Web Devlopement");
sameer.updateEmail("mds@gmail.com");
// sameer.displayDetails();
// console.log(sameer.id); // --> Output : 1
// sohail.displayDetails();
// console.log(sohail.id); // --> Output : 2

// the upper code is just a sugaratic syntax and it's behind the scene it is equivalent to
function Student(name, standard) {

  this.name = name;
    this.standard = standard;
    Student.assignRollno(this);
//   this.displayDetails = function () {  //---> this will take space for each seprately in memory
//     console.log(`Student Name : ${this.name}`);
//     console.log(`Student Email : ${this.rollno}`);
//     console.log(`Student departement : ${this.standard}`);
//   };
}
Student.students = 1;
Student.assignRollno = function(instace){
    instace.rollno = Student.students++;
}
Student.prototype.displayDetails = function () {
  console.log(`Student Name : ${this.name}`);
  console.log(`Student Roll No. : ${this.rollno}`);
  console.log(`Student Class : ${this.standard}`);
};
const sam = new Student("Sam", "sam@gmail.com", "9th");
const vivek = new Student("vivek", "vivek@gmail.com", "9th");
// console.table({"Name":sam.name,"Roll No. " : sam.rollno,"Class": sam.standard})
sam.displayDetails();
vivek.displayDetails();
