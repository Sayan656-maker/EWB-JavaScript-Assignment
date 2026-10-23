
let num = Number(prompt("Enter the number :"));

console.log(`-- Multiplication Table of ${num} --`);
for(let i=1 ; i<=5 ; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}

let n = 1;
console.log("-- First number > 10 divisible by 6 --");
while(true){
    if(n>10 && n%6 === 0){
        console.log(`Found: ${n}`);
        break;
    }
    n++;
}

let j=1;

do{
    if(j === 3){
        j++;
        continue;
    }
    console.log(`Number: ${j}`);
    j++;
} while(j<=5)
