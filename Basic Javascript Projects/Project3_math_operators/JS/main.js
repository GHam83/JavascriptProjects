window.alert(Math.random() * 100);//causes a random number to pop up in a window at the beginning


function addition() {
    var x= 1 + 2;
    document.getElementById("MATH").innerHTML = x; //adds the numbers 1 and 2

}


function subtraction() {
    var x= 100-75;
    document.getElementById("MATH").innerHTML = x;//subtracts 75 from 100

}

function multiply() {
    var x= 2*8;
    document.getElementById("MATH").innerHTML = x;//multiplies 2 by 8

}

function division() {
    var x= 10/2;
    document.getElementById("MATH").innerHTML = x;//divides 2 from 10

}

var x = 6;
x++;
document.write(x);//increment

var y = 7;
x--;
document.write(y);//decrement 
