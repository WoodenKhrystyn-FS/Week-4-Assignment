class Employee {
  constructor(n,a) {
    this.name = n;
    this.age = a;
    this.annualSalary = 0;
  }
}

class Manager extends Employee {
  constructor(n,a,m) {
    super(n,a);
    this.payRate = m;
    this.type = "Manager";
    console.log("Employee created");
  }

  calculatePay() {
    this.annualSalary = this.payRate * 40 * 52 - 1000;
  }
}

class PartTime extends Employee {
  constructor(n,a,m) {
    super(n,a);
    this.payRate = m;
    this.type = "Part-Time";
  }
  calculatePay() {
    this.annualSalary = this.payRate * 40 * 52;
  }
}

class Menu {
  constructor() {
    
  }

  displayMenu() {
    let options = Number(
      prompt(
        "Menu:\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees\n5"
      )
    );
    switch (options) {
      case 1:
        choice = "Add Employee";
        break;
      case 2:
        choice = "Remove Employee";
        break;
      case 3:
        choice = "Edit Employee";
        break;
      case 4:
        choice = "Display Employee";
    }
   
  }
  addEmployee() {
    let newEmployee = prompt(
      "Enter Employee's Info with commas: Name, Age, Work-Hours and Pay Rate"
    );
    const wordsArray = newEmployee.split(" ");
    //console.log(wordsArray);
  }

  removeEmployee() {
    let deleteEmployee = prompt("Enter the employee's ID or name that is to be removed");
    const leftEmployee = deleteEmployee.filter(Employee === n || "ID");
    console.log(leftEmployee)
    
  }

  editEmployee() {}



  displayEmployees() {
    
  }
  
}

((e) => {
    
  
})();
