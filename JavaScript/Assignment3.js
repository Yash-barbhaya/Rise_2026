//1. Employee Salary Processor
const Employees = [
  { name: 'Yash', salary: 41000 },
  { name: 'Neel', salary: 75000 },
  { name: 'Vatsal', salary: 10000 },
  { name: 'Riya', salary: 68000 },
  { name: 'Amit', salary: 52000 },
  { name: 'Sneha', salary: 30000 }
];

const updateEmployee = Employees.filter((employee) => employee.salary > 40000);

const increaseSalary = updateEmployee.map((employee) => {
  return { ...employee, salary: employee.salary * 0.10 + employee.salary };
});

const newUpdateEmployee = Employees.map((employee) => ({...employee, Level : employee.salary > 70000 ?  'Senior' : 'Junior'}));

console.log(Employees);
console.log(increaseSalary);
console.log(newUpdateEmployee);


// 2. Order Management System

const orderId = document.getElementById("orderid");
const orderAmount = document.getElementById("orderamount");
const orderQuantity = document.getElementById("orderquantity");

const addBtn = document.getElementById("addorder");
const resultBtn = document.getElementById("result");
const tableBody = document.getElementById("tableBody");

let Orders = [];


addBtn.addEventListener("click", () => {

  const newOrder = {
    id: orderId.value,
    amount: Number(orderAmount.value),
    qty: Number(orderQuantity.value)
  };


  Orders = [...Orders, newOrder];

  const row = `
    <tr>
      <td>${newOrder.id}</td>
      <td>${newOrder.amount}</td>
      <td>${newOrder.qty}</td>
    </tr>
  `;

  tableBody.innerHTML += row;

  orderId.value = "";
  orderAmount.value = "";
  orderQuantity.value = "";
});


resultBtn.addEventListener("click", () => {

  const totalRevenue = Orders
    .map(order => order.amount * order.qty)
    .reduce((acc, val) => acc + val, 0);

  const totalQuantity = Orders
    .map(order => order.qty)
    .reduce((acc, val) => acc + val, 0);

  document.getElementById("totalRevenueOut").innerText =
    "Total Revenue: " + totalRevenue;

  document.getElementById("totalQuantityOut").innerText =
    "Total Quantity: " + totalQuantity;
});