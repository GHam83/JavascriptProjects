function call_loop() {
    var digit = ""
    var x = 1;
    while (x < 10) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

function len() {
    var str = "doh my!";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}

var players = ["Mackinnon", "Landeskog", "Makar", "Kadri"];
var content = "";
var y;
function for_Loop() {
    for (y = 0; y < players.length; y++) {
    content += players[y] + "<br>";
    }
    document.getElementById("PLayers").innerHTML = content;
}

function active() {
    var active_player = [];
    active_player[0]="Active";
    active_player[1]="Active";
    active_player[2]="Inactive";
    active_player[3]="Active";
    document.getElementById("Avs").innerHTML = "This player is " + active_player[1] + ".";
}

function cons() {
    const equip = {type:"stick", sport:"hockey", other:"puck"};
    equip.type = "bat";
    equip.sport= "baseball";
    equip.type2 = "skates";
    document.getElementById("constant").innerHTML = "THe equipment used in " + equip.sport + " is a " + equip.type + ". And I added " + equip.type2 + ".";
}

function lets() {
    var c = 10;
    document.write(c); {
        let c = 13;
        document.write(c);
    }
    document.write(c)
}

let Homer = {
    show: "The Simpsons ",
    color: "Yellow ",
    job: "Nuclear Safety Technician ",
    favorite_beverage: "beer ",
    description : function() {
        return "Some words related to Homer Simpson: " + this.show + this.color + this.job + this.favorite_beverage;
    }
};
document.getElementById("character").innerHTML = Homer.description();