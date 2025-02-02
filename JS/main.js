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
    this.annualSalary = ((this.payRate * hours)* 52)- 1000;
  }
}

class PartTime extends Employee {
  constructor(name,age,pay,hours) {
    super(name,age);
    this.payRate = pay;
    this.hours = hours;
    this.employeeType = "Part Time"
  }
  calculatePay() {
    this.annualSalary = ((this.payRate * hours )* 52);
  }
}

class Menu {
  constructor(name,age,a,hours,pay) {
    this.id = "ID"
    this.name = name;
    this.age = age;
    this.annualSalary = a;
    this.hours = hours;
    this.payRate = pay;
    this.employeeType = " ";
    console.log("I have the greatest TEAM!")
    console.log("ID\tName\tSalary\tHrs\tPay\tFT/PT")
    const oneEmployee =  new Employee();
    oneEmployee.name = "Samuel"
    oneEmployee.annualSalary = 9660
    oneEmployee.age = 32
    oneEmployee.hours = 41
    oneEmployee.pay = 5
    oneEmployee.employeeType = "Manager";
    console.log("1"+"\t"+oneEmployee.name+"\t" +oneEmployee.annualSalary+"\t"+oneEmployee.hours+"\t" +oneEmployee.pay+"\t" +oneEmployee.employeeType )
    const twoEmployee =  new Employee();
    twoEmployee.name = "Jimbo"
    twoEmployee.annualSalary = 1664;
    twoEmployee.age = 23
    twoEmployee.hours = 32
    twoEmployee.pay = 1
    twoEmployee.employeeType = "Part Time";
    console.log("2"+"\t"+twoEmployee.name+"\t" +twoEmployee.annualSalary+"\t"+twoEmployee.hours+"\t" +twoEmployee.pay+"\t" +twoEmployee.employeeType )
    const threeEmployee =  new Employee();
    threeEmployee.name = "Stacey"
    threeEmployee.annualSalary = 7320;
    threeEmployee.age = 29;
    threeEmployee.hours = 40
    threeEmployee.pay = 4
    threeEmployee.employeeType = "Manager";
    console.log("3"+"\t"+threeEmployee.name+"\t" +threeEmployee.annualSalary+"\t"+threeEmployee.hours+"\t" +threeEmployee.pay+"\t" +threeEmployee.employeeType )
    let workerArray = [oneEmployee,twoEmployee,threeEmployee];
    console.log(workerArray)
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

  displayEmployee(name, age, annualSalary, hours, pay, employeeType) {
    this.name = name;
    this.age = age;
    this.annualSalary = 0;
    this.hours = 0;
    this.payRate = pay;
    this.employeeType = "";

  }
  
}

((e) => {
  const menu = new Menu();
  
})();
