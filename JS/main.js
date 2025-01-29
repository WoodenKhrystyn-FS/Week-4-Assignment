class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = 0;
    this.annualSalary = 0;
  }
}

class Manager extends Employee {
  constructor(m, name, age) {
    super(name, age);
    this.payRate = m;
    if (workHours >= 40) {
      this.type = "Manager";
    }
  }
  calculatePay() {
    this.annualSalary = this.payRate * 40 * 52 - 1000;
  }
}

class PartTime extends Employee {
  constructor(m, name, age) {
    super(name, age);
    this.payRate = m;
    if (workHours < 40) {
      this.type = "Part-Time";
    }
  }
  calculatePay() {
    this.annualSalary = this.payRate * 40 * 52;
  }
}

class myProject {
  constructor() {}

  displayMenu() {
    let options = Number(
      prompt(
        "Menu:\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees\n5"
      )
    );
    switch (options) {
      case 1:
        this.addEmployee();
      case 2:
        this.removeEmployee();
      case 3:
        this.editEmployee();
      case 4:
        this.displayEmployees();
    }
  }
  addEmployee() {
    let newEmployee = prompt(
      "Enter Employee's Info with commas: Name, Age, Work-Hours and Pay Rate"
    );
    const wordsArray = newEmployee.split(" ");
    console.log(wordsArray);
  }

  removeEmployee(){
    let deleteEmployee = prompt("Enter the employee's ID or name that is to be removed");
    const leftArray = deleteEmployee.filter(Employee === name || "ID")
    console.log(leftArray)
  }

  editEmployee() {
    
  }
  displayEmployees() {
    console.log("ID\tName\tSalary\tHours\tPay\tFT/Pt")
  }
}

((e) => {
  //const myProject = new myProject();
})();
