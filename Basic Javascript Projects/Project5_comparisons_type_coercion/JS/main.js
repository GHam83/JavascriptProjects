document.write(typeof "word");//display string or number 

document.write(2E319);//writes 2 to 319 power

document.write(-2E319);//moves decimal to the left

document.write(10>3);//states 10 is greater than 3 true

document.write(100>1000);//states 100 is greater than 1000 false

document.write(100<1000);//states 100 is less than 1000 true

console.log(2+7);//shows in browser (control, shift, "I")

document.write("12" + 3);//writes 123

console.log(2>7);//shows false in browser log

document.write(3==-3);//writes false that 3 is equal to -3

document.write(3==4);

A=8
B=8
document.write(A===B);//states that A and B are the same variable and that both equal 8

C="Dude"
D="Gal"
document.write(C===D);//states that C and D are the same but their value is different

E="Hi"
F=6
document.write(E===F);//states that E and F are same var but their values are different types

Parent = "Mom"
Sibling = "Sister"
document.write(Parent===Sibling);//states that the variables are different types

document.write(3>1 && 8>7);//states that both are true

document.write(3>1 && 3>8);//output false because only one statement is true

document.write(2>3 || 2>4);//true because one is true

document.write(2>1 || 2>3);//true because one is true

function not_function() {
    document.getElementById("Not").innerHTML = !(20>10);//output false because 20 is greater than 10
}

function not_function2() {
    document.getElementById("Not2").innerHTML = !(5>10);//output true because 5 is not greater than 10
}

