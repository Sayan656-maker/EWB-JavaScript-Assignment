
function area(length=5 , width=4){
    console.log(`Standard Function Area (Default ${length}x${width}): ${length*width}`);
}

arrow = (length=5 , width=4)=>{
    console.log(`Arrow Function Area (Default ${length}x${width}): ${length*width}`);
}

area();
arrow(10,3);
try{
    console.log(length,width);
}catch(error){
    console.log(`Scope Test Error: ${error.name}: blockVar is not defined (when accessed outside block`);
}
