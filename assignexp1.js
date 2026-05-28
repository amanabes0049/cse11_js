function calculationResult() {

    const n = parseInt(document.getElementById("subjects").value);
    let total = 0;

    for (let i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter marks for subject " + (i + 1)));
        total += x;
    }

    let avg = total / n;
    let grade;
    let r;

    if (avg >= 90) {
        grade = 'A+';
    } 
    else if (avg >= 75) {
        grade = 'A';
    } 
    else if (avg >= 60) {
        grade = 'B';
    } 
    else if (avg >= 50) {
        grade = 'C';
    } 
    else if (avg >= 40) {
        grade = 'D';
    } 
    else {
        grade = 'F';
    }

    if (avg >= 40)
        r = 'Pass';
    else
        r = 'Fail';

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + avg.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + r;
}