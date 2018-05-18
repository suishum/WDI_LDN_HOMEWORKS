let calculatorOn = true;

while (calculatorOn) {
  //let user decide which calculator they want to use
  const calcType = window.prompt('Which type of calculator would you like to use? \n[b]asic calculator, \n[m]ortgage calculator, \nbm[i] calculator, \n[t]rip calculator?');

  if (calcType === 'b') {
    //BASIC CALCULATOR
    window.alert('Welcome to the Basic Calculator');
    //ask the user which type of calculation they want to do
    const basicCalc = window.prompt('Would you like to..  \n[a]dd, \n[s]ubtract, \n[d]ivide, \n[m]ultiply, \n[p]ower or \ns[q]uareroot?');
    console.log('User chose: ' + basicCalc);
    //store a first number and a second number in 2 variables, also don't forget to convert to a number
    const firstNumber = parseFloat(window.prompt('Enter your first number'));
    console.log('First number is: ' + firstNumber);
    const secondNumber = parseFloat(window.prompt('Enter your second number'));
    console.log('Second number is: ' + secondNumber);

    if (basicCalc === 'a') {
      const addedTotal = firstNumber + secondNumber;
      window.alert('The result of the addition ' + firstNumber + ' + ' + secondNumber + ' is: ' + addedTotal);
      calculatorOn = window.confirm('Would you like to try again?');
    } else if (basicCalc === 's') {
      const subtractedTotal = firstNumber - secondNumber;
      window.alert('The result of the subtraction ' + firstNumber + ' - ' + secondNumber + ' is: ' + subtractedTotal);
      calculatorOn = window.confirm('Would you like to try again?');
    } else if (basicCalc === 'd') {
      const dividedTotal = firstNumber / secondNumber;
      window.alert('The result of the division ' + firstNumber + ' + ' + secondNumber + ' is: ' + dividedTotal);
      calculatorOn = window.confirm('Would you like to try again?');
    } else if (basicCalc === 'm') {
      const multipliedTotal = firstNumber * secondNumber;
      window.alert('The result of the multiplication ' + firstNumber + ' + ' + secondNumber + ' is: ' + multipliedTotal);
      calculatorOn = window.confirm('Would you like to try again?');
    } else if (basicCalc === 'p') {
      const powerTotal = Math.pow(firstNumber, secondNumber);
      window.alert('The result of the power calculation: ' + firstNumber + ' to the power of ' + secondNumber + ' is: ' + powerTotal);
      calculatorOn = window.confirm('Would you like to try again?');
    } else if (basicCalc === 'q') {
      const sqrt1 = Math.sqrt(firstNumber);
      const sqrt2 = Math.sqrt(secondNumber);
      window.alert('The squareroot of ' + firstNumber + ' is ' + sqrt1 + '\nThe squareroot of ' + secondNumber + ' is ' + sqrt2);
    } else {
      window.alert('Sorry, invalid input for calculation type.');
      calculatorOn = window.confirm('Would you like to try again?');
    }

  } else if (calcType === 'm') {
    //MORTGAGE CALCULATOR
    window.alert('Welcome to the Mortgage Calculator');
    //accept inputs for mortgage calculation
    const principal = parseFloat(window.prompt('Enter your principal'));
    console.log('The principal is: ' + principal);
    const annualInterest = parseFloat(window.prompt('Enter your ANNUAL interest'))/12;
    console.log('Annual interest is: ' + annualInterest);
    const noOfPayments = parseFloat(window.prompt('Enter your number of payments'));
    console.log('Number of payments is: ' + noOfPayments);
    //calculating monthly repayment
    const monthlyRepayment = principal * ((annualInterest * Math.pow((1 + annualInterest), noOfPayments))
    /(Math.pow((1 + annualInterest), noOfPayments) - 1));
    window.alert('Your monthly repayment amount is ' + monthlyRepayment);
    calculatorOn = window.confirm('Would you like to try again?');

  } else if (calcType === 'i') {
    //BMI CALCULATOR
    window.alert('Welcome to the BMI calculator');
    const bmiUnit = window.prompt('Which unit would you like to use? \n[i]mperial or \n[m]etric');
    //accept inputs for BMI calculation, could use ternary operator here
    if (bmiUnit === 'i') {
      const weight = parseFloat(window.prompt('Enter your weight in lbs'));
      console.log('The weight in lbs is: ' + weight);
      const height = parseFloat(window.prompt('Enter your height in inches'));
      console.log('The height in inches is: ' + height);
      const bmi = (weight/(Math.pow(height, 2)) * 703);
      window.alert('Your BMI is ' + bmi);
      calculatorOn = window.confirm('Would you like to try again?');
    } else if (bmiUnit === 'm') {
      const weight = parseFloat(window.prompt('Enter your weight in kgs'));
      console.log('The weight in kgs is: ' + weight);
      const height = parseFloat(window.prompt('Enter your height in meters'));
      console.log('The height in meters is: ' + height);
      const bmi = weight/(Math.pow(height, 2));
      window.alert('Your BMI is ' + bmi);
      calculatorOn = window.confirm('Would you like to try again?');
    }

  } else if (calcType === 't') {
    //TRIP CALCULATOR
    const distance = parseFloat(window.prompt('Enter your distance in miles'));
    console.log('The distance in miles is: ' + distance);
    const costPerGallon = parseFloat(window.prompt('Enter your costPerGallon'));
    console.log('The costPerGallon is: ' + costPerGallon);

    const speed = parseFloat(window.prompt('Enter your speed (MPH)'));
    console.log('The speed (MPH) is: ' + speed);
    let fuelEfficiency = parseFloat(window.prompt('Enter your fuelEfficiency (MPG)'));
    console.log('The fuelEfficiency (MPG) is: ' + fuelEfficiency);

    //extra bits from trip calculator
    if (speed > 60) {
      const amountMoreThan60 = speed - 60;
      fuelEfficiency = fuelEfficiency - (amountMoreThan60 * 2);
      if (fuelEfficiency <= 0) {
        window.alert('You\'re going too fast buddy!!');
        calculatorOn = window.confirm('Would you like to try again?');
      }
    }

    const time = (distance/speed);
    const gallonsUsed = (distance/fuelEfficiency);
    const totalCost = gallonsUsed * costPerGallon;
    window.alert('Your trip will take ' + time + ' hours and cost £' + totalCost + '.');
    calculatorOn = window.confirm('Would you like to try again?');
  }

}
