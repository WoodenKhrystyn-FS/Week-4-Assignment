class Employee {
  constructor(n,a) {
    this.name = n;
    this.age = a;
    this.annualSalary = 0;
    console.log("employee created")
  }
  //no methods only properties

}

class Manager extends Employee {
  constructor(n,a,m) {
    super(n,a);
    this.payRate = m;
    this.employeeType = "Manager";
  }

  calculatePay() {
    this.annualSalary = ((this.payRate * 40 )* 52)- 1000;
  }
}

class PartTime extends Employee {
  constructor(n,a,m,) {
    super(n,a);
    this.payRate = m;
    if(this.hours < 40){
       employeeType = "Part-Time";
    } else {
      employeeType = "Manager"
    }
  }
  calculatePay() {
    this.annualSalary = ((this.payRate * 40 )* 52);
  }
}

// class Menu {
//   constructor() {
//     this.employees = []
//   }
//   work(){
//   console.log(this.name+ "is an employee ")}
//   left(){
//   console.log(this.name+ "is no longer an employee ")}

//   displayMenu() {
//     let options = Number(
//       prompt(
//         "Menu:\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees\n5"
//       )
//     );
//     switch (options) {
//       case 1:
//         choice = "Add Employee";
//         break;
//       case 2:
//         choice = "Remove Employee";
//         break;
//       case 3:
//         choice = "Edit Employee";
//         break;
//       case 4:
//         choice = "Display Employee";
//     }
   
//   }
//   addEmployee() {
//     let newEmployee = prompt(
//       "Enter Employee's Info with commas: Name, Age, Work hours and Pay Rate"
//     );
//     const wordsArray = newEmployee.split(" ");
//     alert(newEmployee+ "Employee has been added");
//   }

//   removeEmployee() {
//     let deleteEmployee = prompt("Enter the employee's ID or name that is to be removed");
//     const leftEmployee = deleteEmployee.filter(Employee === n || "ID");
//     //console.log(leftEmployee)
    
//   }

//   editEmployee() {}



//   displayEmployee() {
    //let employeesArray = [];
//   }
  
// }

((e) => {
  //const menu = new Menu();
  const employee1 = new Employee
  employee1.name = "Sam"
  employee1.age = 24;
  employee1.hours = 40;
  employee1.payRate = 5;
  console.log()
  console.log(employee1.name, employee1.age, employee1.annualSalary, employee1.hours, employee1.payRate, employee1.employeeType)
  

  
})();
