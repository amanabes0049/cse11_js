function calculateResult(){

    let name = document.getElementById("name").value;

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);


    // Calculate Total Marks
    let sum = s1 + s2 + s3 + s4 + s5;


    // Calculate Average
    let average = sum / 5;


    // Calculate Percentage
    let percentage = (sum / 500) * 100;


    let grade;


    if(percentage >= 90){
        grade = "A+";
    }
    else if(percentage >= 80){
        grade = "A";
    }
    else if(percentage >= 70){
        grade = "B";
    }
    else if(percentage >= 60){
        grade = "C";
    }
    else if(percentage >= 40){
        grade = "D";
    }
    else{
        grade = "F";
    }


    let status;

    if(percentage >= 40){
        status = "PASS";
    }
    else{
        status = "FAIL";
    }


    document.getElementById("result").innerHTML =

    `
    Student Name: ${name}<br>
    Total Marks: ${sum}/500 <br>
    Average Marks: ${average}<br>
    Percentage: ${percentage}%<br>
    Grade: ${grade}<br>
    Result: ${status}
    `;

}