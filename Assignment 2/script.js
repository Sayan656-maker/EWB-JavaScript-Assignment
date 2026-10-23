
let amount = Number(prompt("Enter your bill amount :"));
let percentage  = Number(prompt("Enter tip percentage :"));
let tipamount = amount * (percentage/100);

console.log(`Subtotal: $${amount}`);
console.log(`Tip Percentage: ${percentage}%`);
console.log(`Calculated Tip: $${tipamount}`);
console.log(`Total Amount to Pay: $${amount+tipamount}`);
