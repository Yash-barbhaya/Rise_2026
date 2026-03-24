//1: Student Report System
const Students = [
  { name: 'Yash', marks: [90, 70, 50] },
  { name: 'Neel', marks: [66, 78, 67] },
  { name: 'Vatsal', marks: [35, 50, 90] },
];

const studentAverage = Students.map((student) => {
  const totalMarks = student.marks.reduce((num, res) => num + res, 0);
  const averageMarks = totalMarks / student.marks.length;
  return { ...student, average: averageMarks };
});

const studentResult = studentAverage.map((student) => {
  let result;
  if (student.average >= 75) {
    result = 'Distinction';
  } else if (student.average >= 50) {
    result = 'Pass';
  } else {
    result = 'Fail';
  }
  return { ...student, result };
});

console.log(studentResult);


//2: Shopping Cart Analyzer
function shoppingCart(...prices){ //Rest Operator
  let sum = 0;
  let countItems = 0; 
  for(let n of prices){
    sum = sum + n;
    countItems++;
  }
  console.log(`Total Amount is ${sum} and Number of items are ${countItems}`);
}

shoppingCart(50,60,90,50);

//3: User Profile Updater
let Profile = {
    firstName : 'Yash',
    lastName : 'Barbhaya',
    age : 21,
    hobbies: ['A','B']
}

let copyProfile = {...Profile}
copyProfile.profession = 'Fresher';

console.log(Profile);
console.log(copyProfile);

//4: Product Filter & Transform
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 20000 },
  { name: "Keyboard", price: 800 }
];

const result = products
  .filter(product => product.price > 1000)   
  .map(product => {                          
    const discountedPrice = product.price * 0.9; 
    return { ...product, discountedPrice };
  });

console.log(result);

//5: Dynamic Number Processor

function Numbers(...nums){
  const Even = nums.filter(n => n%2 === 0);
  const Odd = nums.filter(n => n%2 !== 0);
  let sumOdd = 0;
  let sumEven = 0;
  for(let x of Even){
    sumEven += x;
  }

  for(let x of Odd){
    sumOdd += x;
  }
  



  console.log(Even);
  console.log(`The sum of Even Numbers are ${sumEven}`);
  console.log(Odd);
  console.log(`The sum of Odd Numbers are ${sumOdd}`);
}

Numbers(1,2,3,4,5,6,7,8,9,10)