class Employee {
  constructor(name,age) {
    this.name = name;
    this.age = age;
    this.annualSalary = 0;

  }
}
class Manager extends Employee {
  constructor(name,age,pay) {
    super(name,age);
    this.payRate = pay;
    this.employeeType = "Manager";
    
  }
  calculatePay() {
    this.annualSalary = ((this.payRate * 40 )* 52)- 1000;
  }
}

class PartTime extends Employee {
  constructor(name,age,pay) {
    super(name,age);
    this.payRate = pay;
    this.hours = 0;
    this.employeeType = "Part Time"
  }
  calculatePay() {
    this.annualSalary = ((this.payRate * 40 )* 52);
  }
}

class Menu {
  constructor() {
   
  console.log("I have the greatest TEAM!")
  console.log("ID\tName\tSalary\tHours\tPay\tFT/PT")
  }
  
  displayMenu() {
    let options = Number(
      prompt(
        "Menu:\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees\n5"
      )
    );
      switch (options) {
        case 1:"Add Employee";
          addEmployee();
          break;
        case 2:
          "Remove Employee";
          removeEmployee();
          break;
        case 3:
          "Edit Employee Pay";
          editEmployee();
          break;
        case 4:
          "Display Employee";
          displayEmployee();
          break
      }
   
  }
  addEmployee(name,age) {
    let newEmployee = prompt(
      "Enter Employee's Info with commas: Name, Age, Work hours and Pay Rate"
    );
    if(this.hours >= 40){
      newEmployee = new Manager(name,age,pay)
    } else {
      newEmployee = new PartTime(name, age, pay,hours)
    }

    if(newEmployee !== null){
        alert(name+ "is an added employee")
      }
      else{
        alert("Try again, employee information needed")
      }
    let newArray = newEmployee.split(",")
     
  }
  removeEmployee(name) {
    let deleteEmployee = prompt("Enter employee's ID or name to be removed");
    let leftArray = [];
    for(let i =leftArray.length; 0<i;)
    //const leftEmployee = deleteEmployee.filter(Employee === n);
    console.clear()
    left()
    alert(name+ "is no longer with the company")
  }

  editEmployee(name) {
    let change = prompt("Type employee's ID for changes")
    
  }

  displayEmployee(name, age, annualSalary, hours, pay) {
    
  }
  
}

((e) => {
  const menu = new Menu();
})();
