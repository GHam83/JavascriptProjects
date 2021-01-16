function avs(){
    var player={
        Name: "MacKinnon",
        Number: "29",
        Postion: "Center",
    };
    delete player.Position
    document.getElementById("dictionary").innerHTML= player.Name;
}