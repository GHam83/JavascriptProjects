function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are to short":"You are tall enough"; //Determines whether rider is tall enough to ride
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {//creates vehichle class
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "white and Black");//adds new customer vehicles
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;//displays Erik's vehicle info onclick
}

function Drink_Age() {
    var Age, Can_drink;
    Age = document.getElementById("Age").value;
    Can_drink = (Age >= 21) ? "You are old enough":"You are not old enough"; 
    document.getElementById("New_and_This").innerHTML = Can_drink + " to drink."; //determine customer legal age for drinking on click
}

function countdown() {
    document.getElementById("Nested_Function").innerHTML = sub();//countdown from 10
    function sub() {
        var begin = 10;
        function minus(){//nest function 
            begin -= 1;}
        minus()
        return begin;
        }
    }
