function Yo() {
    var part1 = "Yo ";
    var part2 = "Yo ";
    var part3 = "Ma ";
    var part4 = "is a ";
    var part5 = "cellist.";
    var sentence = part1.concat(part2, part3, part4, part5);
    document.getElementById("Yo Yo Ma").innerHTML = sentence;//puts the different strings into one sentence
}

function doh() {
    var sent = "All work and no play make Homer..something, something";//cuts word "work" out of string
    var part = sent.slice(4,9);
    document.getElementById("slice").innerHTML = part;
}

function cap() {
    var string = "hey there";
    var ups = string.toUpperCase();
    document.getElementById("Caps").innerHTML = ups;//turns string into uppercase
}

function find() {
    var it = "Please oh please let this work";
    var blah = it.search("let");
    document.getElementById("search").innerHTML = blah;//finds where the word let is in string
}

function weak() {
    var x = (2);
    document.getElementById("num").innerHTML = x.toString();//turns number into string
}

function precise() {
    var b = (1234.99082324)
    document.getElementById("exact").innerHTML = b.toPrecision(10);//sets the length of number to length 10
}