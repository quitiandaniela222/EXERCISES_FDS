const flavorsYogurt = ["Natural", "Coconut", "Almond", "Vanilla"];
const priceYogurt = [14, 14, 16, 16];
const stockYogurt = [5, 5, 2, 0];

let selectedFlavor = 2;
let showflavors = flavorsYogurt[selectedFlavor]
console.log(showflavors)

if (flavorsYogurt.includes(selectedFlavor)) { // An if is created to specify that in that block of code to be executed. if a specified condition is true
    const index = flavorsYogurt.indexOf(selectedFlavor);
    if (stockYogurt[index] > 0) {
        console.log(`the price of yogurt ${selectedFlavor} is ${priceYogurt[index]}money and there is ${stockYogurt[index]}Units available.`);
    } else {
        console.log(`Sorry this taste ${selectedFlavor} it's already sold out.`);
    }
} else {
    console.log(`Sorry this yogurt ${selectedFlavor} sold out.`);
}


