let plist = [{ name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }];

console.log("-- All Products (forEach) --");
plist.forEach((i)=>{
    console.log(`Item: ${i.name} - Price: $${i.price}`);
});

console.log("-- Filtered Products (Price < $50) --");
let flist = plist.filter((i)=>{
    if(i.price < 50){
        return (i);
    };
});
console.log(JSON.stringify(flist));

console.log("-- Mapped Product Tags (map) --");
let mlist = plist.map((i)=>{
    return (`${i.name.toUpperCase()} costs $${i.price} `);
});

console.log(mlist);