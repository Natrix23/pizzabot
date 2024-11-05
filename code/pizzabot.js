/*
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
let orderName = prompt(`Enter the name of the pizza you want to order today.`);
let orderQuantity = prompt(`How many of ${orderName} do you want?`);

if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {

let cookingTime;
    if (orderQuantity >= 1 && orderQuantity <= 2) {
        cookingTime = 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        cookingTime = 15;
    } else {
        cookingTime = 20;
    }

let orderTotal = orderQuantity * pizzaPrice;

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`);
} else {
    alert("Sorry, we don't have that pizza on the menu.");
}
*/


const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;


alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

function checkOrderName(orderName) {
    return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni;
}

function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
    if (orderQuantity >= 1 && orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15;
    } else {
        return 20;
    }
}

/*const orderName = prompt("Enter the name of the pizza you'd like to order:");
let orderQuantity = prompt(`How many of ${orderName} do you want?`);

if (checkOrderName(orderName)) {
    const totalCostValue = totalCost(orderQuantity);  
    const cookingTimeValue = cookingTime(orderQuantity); 

    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCostValue} kr. The pizzas will take ${cookingTimeValue} minutes.`);
} else {
    alert("Sorry, we don't have that pizza on the menu.");
}*/

function processOrder(form) {
    let orderName = form.pizzaType.value;
    let orderQuantity = form.orderQuantity.value;

    if (checkOrderName(orderName)) {
        const cost = totalCost(orderQuantity);
        const time = cookingTime(orderQuantity);

        document.getElementById("output").textContent = 
            `Great, I'll get started on your ${orderName} right away, it will cost ${cost} kr. The pizzas will take ${time} minutes.`;
    } else {
        document.getElementById("output").textContent = 
            "Sorry, we don't have that pizza on the menu.";
    }
}
