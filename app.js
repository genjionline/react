// 38.1
// let userNames = ['Mike','Bob','Nikola'];
// let users = {};
// for (const userName of userNames) {
//     users[userName.toLowerCase()] = userName;
// } 
// console.log(users);
// 38.2
function maxSalary(salaries) {
    let maxSalary = 0;
    let maxSalaryEmployee = '';
  
    for (const [employee, salary] of Object.entries(salaries)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        maxSalaryEmployee = employee;
      }
    }
  
    return maxSalaryEmployee;
  }
  
  let salaries = {
    "Mike": 1500,
    "Bob": 1800,
    "Nikola": 1700
  };
  
  console.log(maxSalary(salaries));
// 38.3
let users = {mike: 'Mike', bob: 'Bob', nikola: 'Nikola'};
const { mike: userMike, bob: userBob, nikola: userNikola } = users;

console.log(userMike);
console.log(userBob);
console.log(userNikola);