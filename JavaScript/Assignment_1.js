//JavaScript Assignment 1 - 5

//Assignment 1: Smart Discount Calculator

function smartDisCal(name,age,amt){
    if(age < 18){
        let finalAmt
        let dis
        if(amt > 5000){
             dis = 15
             finalAmt = amt - (amt*0.15)    
        }
        else{
             dis = 10
             finalAmt = amt - (amt*0.10)
        }
        console.log(`Hi ${name}! You received a total discount of ${dis}%. Final amount: ₹${finalAmt}`)
    }

    else if(age >= 60){
        let finalAmt
        let dis
        if(amt > 5000){
             dis = 25
             finalAmt = amt - (amt*0.25)    
        }
        else{
             dis = 20
             finalAmt = amt - (amt*0.20)
        }
        console.log(`Hi ${name}! You received a total discount of ${dis}%. Final amount: ₹${finalAmt}`)
    }

    else {
        let finalAmt
        let dis=0
        if(amt > 5000){
             dis = 5
             finalAmt = amt - (amt*0.05)    
        }
        else{
             finalAmt = amt
        }
        console.log(`Hi ${name}! You received a total discount of ${dis}%. Final amount: ₹${finalAmt}`)
    }
}

smartDisCal('Yash',17,300)
smartDisCal('Hitanshu', 25,600)
smartDisCal('Vatsal',61,800)


//Assignment 2: Login Validation System

function Login(userID,password){
    const ID = "ABC@email.com"
    const pwd = 123456789

    if (userID === ID){
        if(password === pwd){
            console.log("Login Successful!")
        }
        else{
            console.log("Invalid Password")
        }
    }
    else{
        console.log("Invalid Username")
    }
}
console.log('\n')

Login('Yash',123)
Login('ABC@email.com',123456)
Login('ABC@email.com',123456789)

//Assignment 3: Number Analyzer Tool
function oddEven(x){
    if(x%2 === 0){
       return 'Even'
    }
    else{
        return 'ODD'
    }
}

function num(n){
    let OE
    let type
    if(n === 0){
        OE = oddEven(n)
        type = 'Zero'
    }
    else if(n>0){
        OE = oddEven(n)
        type = 'Positive'
    } 
    else{
       OE = oddEven(n)
        type = 'Negative'
    }

    console.log(`The number ${n} is ${type} and ${OE}`)
}
console.log('\n')

num(5)
num(-8)
num(0)

//Assignment 4: Shopping Eligibility Checker

function checkEligibility(isMem, cartValue) {
    if(isMem && cartValue > 1000 ) {
        console.log("You are eligible for free delivery!");
    }
    else if(isMem && cartValue > 2000){
        console.log("You are eligible for free delivery!");
    }
    else {
        console.log("You are not eligible for free delivery.");
    }
}

console.log('\n')
checkEligibility(true,1001)
checkEligibility(false,1001)

//Assignment 5: Grade Evaluation System

function gradeEvaluation(marks){
    let grade = 0
    if (marks > 100 || marks < 0){
        console.log('Invalid Marks Entered')
    }
    else{
        if(marks>=90){
            grade = 'A'
        }
        else if(marks >= 75 && marks < 90){
            grade = 'B'
        }
        else if(marks >= 50 && marks < 75){
            grade = 'C'
        }
        else{
            grade = 'Fail'
        }
        console.log(`Your grade is ${grade}`)
    }
}
console.log('\n')

gradeEvaluation(80)
gradeEvaluation(45)
gradeEvaluation(101)