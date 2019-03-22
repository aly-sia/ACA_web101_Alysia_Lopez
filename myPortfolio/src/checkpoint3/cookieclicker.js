//initial number of cookies    
var num = 0;

// I am giving a variable of 'cookie' and referencing the HTML "cookie"
var cookie = document.getElementById("cookie");

//I am creating a function that will be used when the 'onclick' function in the HTML is referenced
function cookieClick() { 
//The original number, '0' will increase by '1' each time this funtion is referenced
    num += 1;
  
//I am creating a variable, 'numbers' and getting by the Id name given in the HTML document
    var numbers = document.getElementById("numbers");
       
//This prints out the number in the 'numbers' div
    numbers.innerHTML = num;      
    
}