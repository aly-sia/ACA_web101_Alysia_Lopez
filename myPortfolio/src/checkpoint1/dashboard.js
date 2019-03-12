//calling the clear button by its Id name//
var clearBtn = document.getElementById('calc-clear');
//calling the display area by it's Id name, we will use this 'calc-display-val' Id throughout the Javascript file when refering to the display//
var displayValElement = document.getElementById('calc-display-val');

//we want the display to show a '0'//
var displayVal = '0';
//we use pendingVal to mean udefined, for exqmple if you say 5+3 the '3' will display while the '5' is pending//
var pendingVal;
//this is an array that is used to hold all values for evaluation//
var evalStringArray = [];

//calling the operator buttons by their Id name//
var divideBtn = document.getElementById('calc-divide');
var timesBtn = document.getElementById('calc-times');
var equalsBtn = document.getElementById('calc-equals');

//making an array called 'calcNumBtns to call all divs by the class name 'calc-button'//
var calcNumBtns = document.getElementByClassName('calc-button');
//making an array called 'calcOperatorBtns' to call all divs by the class name 'calc-btn-operator'//
var calcOpertorsBtns = document.getElementbyClassName('calc-btn-operator')

//creates a click event, equal to a function. When a calcnumbtn is clicked it passes the function updatedisplayval to reveal value of button clicked//
var updateDisplayVal = (clickObj) => {
//the var btnText is equal to the object that is clicked and will display the inner text in the HTMl file//
  var btnText = clickObj.target.innerText;
  
//If the value of display is strictly equal to zero, clear it. No number gets added to zero. //
  if(displayVal === '0') {
      displayVal = '';
  }
  
  displayVal += btnText;
  displayValElement.innerText = displayVal;
}
//creates the performOperation function. Takes a clickObj//
//switch statement is used in the case that operator is '' do what is in the code block//
var performOperation = (clickObj) => {
  var operator = clickObj.target.innerText;
   switch(operator) {
    case '+':
      pendingVal = displayVal;
      //default//
      displayVal = '0';
      //displays the numbers on the calculator//
      displayElement.innerText = display;
      //push to array 'pendigVal)//
      evalStringArray.push(pendingVal);
      //using the string to push the eval//
      evalStringArray.push('+');
      break;
    
    case '-':
      pendingVal = displayVal;
      displayVal = '0';
      displayElement.innerText = display;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;
      
    case 'x':
      pendingVal = displayVal;
      displayVal = '0';
      displayElement.innerText = display;
      evalStringArray.push(pendingVal);
      evalStringArray.push('*');
      break;
      
    case '÷':
      pendingVal = displayVal;
      displayVal = '0';
      displayElement.innerText = display;
      evalStringArray.push(pendingVal);
      evalStringArray.push('/');
      break;
      
    case '=':
      evalStringArray.push(displayVal);
      var evalution = eval(evalStringArray).join(''));
      displayVal = evaluation;
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;
      
  }
}
//refers to array made in line 31//
//this is a for loop and is placing a click event on numbers that trigger updateDisplayVal//
//i=0, if i is less than the var calcNumBtns length of the string then i is plus one//
for (let i = 0; i < calcNumBtns.length; i++) {
    //creates a clik event so when the button is clicked something happens, given 'false' so no other options can be taken//
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
  
}
//refers to array made in line 32//
//i=0, if i is less than the var calcOperatorBtn length of the string then i is plus one//
for (let i = 0; i < calcOperatorBtns.length; i++) {
        //creates a clik event so when the button is clicked something happens, given 'false' so no other options can be taken//
 calcOperatorBtns[i].addEventListener('click', performOperation, false);
}
//the clear button is equal to a function// 
clearBtn.onClick = () => {
//displayval is given the default of zero//
  displayVal = '0';
  //clears//
  pendingVal = undefined;
  //default value to clear//
  evalStringArray = [];
  //update element to zero since it is cleared//
  displayValElement.innerHTML = displayVal;
}