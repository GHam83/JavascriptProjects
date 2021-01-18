x = 10
function add() {
    document.write(x + 2);//outside variable, add x
}

function sub() {
    document.write(x-2);//outside variable, subtract x
}

function times() {
    y = 10;
    document.write(x * 8);//inside variable, multiply x
}

function div() {
    document.write(y/2);//no local variable, log to view in browser
    console.log(y/2);
}

function time() {
    if (new Date().getHours() < 12) {
        document.getElementById("Hi").innerHTML = "Good Morning";
    }
    if (new Date().getHours() >12 <18) {
        document.getElementById("Hi").innerHTML = "Good Afternoon";//Greeting per appropriate time of day
    }
    if (new Date().getHours() >18 <23) {
        document.getElementById("Hi").innerHTML = "Good Evening";
    }
    else {
        document.write("What dimension are you in?")
    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//copy per instructions alternate greeting based on time of day.
}