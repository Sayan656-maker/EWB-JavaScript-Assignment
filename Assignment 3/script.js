
let score = Number(prompt("Enter your marks :"));
let grade;
let sttatus;

if(score>=0 && score<=100){
    switch(true){
        case score >=90:
            grade = "O";
            break;
        case score >=80 :
            grade = "A";
            break;
        case score >=60 :
            grade = "B";
            break;
        case score >=40 :
            grade = "c";
            break;
        case score >=0 :
            grade = "F";
            break;
    }

    sttatus = score>=40?"Passed":"Failed";

    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log(`Status: ${sttatus}`);
}
else{
    console.log("Undefine score is entered");
}
