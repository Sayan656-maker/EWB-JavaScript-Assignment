let list=[
    {pname: "Laptop", price: 800},
    {pname: "Mouse", price: 25}
];


let nname = prompt("Enter product name: ");
let nprice = Number(prompt("Enter price of the product: "));

if (nname === null || nname.trim() === "" || nprice <= 0) {
    console.log("Invalid input! Product was not added.");
} 
else {
    list.push({pname: nname, price: nprice});
    console.log("--- Initializing Inventory System ---");
    console.log(`[Prompt executed: User adds "${nname}" at "$${nprice}"]`);
}

console.log("--- Processing Inventory Roster (forEach) ---");
for(let i=0 ; i<list.length ; i++){
    if(list[i].pname === null || list[i].pname.trim() ==="" || list[i].price <=0){
        continue;
    }
    let catagory;
    if(list[i].price <=100){
        catagory = "Budget";
    }
    else if(list[i].price <=200){
        catagory = "Standard";
    }
    else{
        catagory = "Premium";
    }
    list[i].catagory = catagory;
};

list.forEach((i)=>{ 
    console.log(`* Item: ${i.pname} ($${i.price}) -> Category: ${i.catagory}`);
});


function total(all){
    let total = 0;
    for (let i of all){
        total += i.price;
    }
    
    return total;
}

const addOther = (price, tax = 0, discount = 0) =>{
    let taxAmount = price * tax / 100;
    let discountAmount = price * discount / 100;
    return price + taxAmount - discountAmount;
};


console.log("--- Financial Analytics ---");
console.log(`Total Inventory Value: $${addOther(total(list))}`);

let flist = list.filter((i)=>{
    if (i.price <=200){
        return (i.pname);
    };
});

let clist = flist.map((i)=>{
    return (i.pname);
});
console.log("Filtered Affordable Items (Under $200):",JSON.stringify(clist));

let cclist = list.map((i)=>{
    return (`${i.pname.toUpperCase()}: $${i.price}`);
});
console.log("Formatted Report List:",JSON.stringify(cclist));

