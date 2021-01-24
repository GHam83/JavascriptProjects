function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var SizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');//prints an itemized receipt for user
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1= text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }else if (selectedSize === "Large Pizza")  {
        sizeTotal =14;
    }else if (selectedSize === "Extra Large Pizza") {//allows user to select a size of pizza
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);//logs the size and total in browser console
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray= document.getElementsByClassName("toppings");//allows user to select multiple toppings
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);//adjusts price depending on total toppings
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping= "+"$"+toppingTotal+".00");//logs total based on size and toppings
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";//shows total
};