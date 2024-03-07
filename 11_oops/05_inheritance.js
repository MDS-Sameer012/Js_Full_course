class Employee {
  static employeesId = 1;
  constructor(name, email, departement) {
    this.name = name;
    this.email = email;
    this.departement = departement;
      // Employee.assignEmployeeId(this); //--> this should be avoided as if we change class name we need to change it's every occurance so more flexible and safer approach is below
      this.constructor.assignEmployeeId(this);
  }
  // NOTE : Static methods can't be inherited
  static assignEmployeeId(instance) {
    instance.id = Employee.employeesId++;
  }

  displayDetails() {
    console.log(`Employee Name : ${this.name}`);
    console.log(`Employee Email : ${this.email}`);
    console.log(`Employee departement : ${this.departement}`);
  }
  updateEmail(email) {
    this.email = email;
  }
}

const sameer = new Employee("Sameer", "sameer@gmail.com", "Web Devloper");
const mukesh = new Employee("Mukesh", "mukesh@gmail.com", "Finance");

class Manager extends Employee {
  constructor(name, email, departement, project) {
    super(name, email, departement);
    this.leaderOfProject = [];
    this.leaderOfProject.push(project);
  }
  addProject(project) {
    this.leaderOfProject.push(project);
  }
  removeProject(project) {
    this.leaderOfProject = this.leaderOfProject.filter(
      (project_) => project_ !== project
    );
  }
  leaderOfProjects() {
    this.leaderOfProject.forEach((project, index) =>
      console.log(`${index + 1}. ${project} `)
    );
  }
  displayDetails() {
    super.displayDetails();
    console.log("Leading Projects : " + this.leaderOfProject.join(" , "));
  }
}

const dhruv = new Manager(
  "Dhruv",
  "dhruv@gmail.com",
  "Software Engineer",
  "Company Web"
);
dhruv.addProject("Customer Assistance bot");
dhruv.addProject("Coupon Code Applying system");
dhruv.removeProject("Customer Assistance bot");
// dhruv.displayDetails();
// dhruv.leaderOfProjects();
console.log(dhruv.id);
