var num1 = 5;
var num2 = 8;
var num3 = 15;
var num4 = 3;
var num5 = 7;

if (num1 > num3) {
    console.log("5 is greater than 15")
}
else {
    console.log('5 is smaller than 15')
}
// Regular Condition Usage ------------------------------------
var myMoney = 20000;
var macPrice = 150000;
var gamingLaptopPrice = 60000;
var lenevoYogaPrice = 40000;
var oldLaptopPrice = 20000;

if (myMoney >= macPrice) {
    console.log('I will buy Mac')
}
else if (myMoney >= gamingLaptopPrice) {
    console.log('I will buy a Gaming Laptop')
}
else if (myMoney >= lenevoYogaPrice) {
    console.log('I will buy the Lenevo Yoga Laptop')
}
else if (myMoney >= oldLaptopPrice) {
    console.log('I will buy an Old Laptop')
}
else {
    console.log('I will manage my task with my phone till I get enough money to buy a Laptop')
}


// Nested Condition Usage --------------------------------------------------------------------

var myBudget = 10000;
var iPhonePrice = 95000;
var samsungGalaxyPrice = 90000;
var onePlusPrice = 85000;
var xiaomiPrice = 50000;
var oppoPrice = 25000;

if (myBudget >= iPhonePrice) {
    console.log('I will buy iPhone')
}
else {
    if (myBudget < samsungGalaxyPrice) {
        if (myBudget < onePlusPrice) {
            if (myBudget < xiaomiPrice) {
                if (myBudget < oppoPrice) {
                    console.log('I can not buy a phone')
                }
                else {
                    console.log('I will buy Oppo Phone')
                }
            }
            else {
                console.log('I will buy Xiaomi Phone')
            }
        }
        else {
            console.log('I will buy One Plus Phone')
        }
    }
    else {
        console.log('I will buy Samsung Galaxy Phone')
    }
}