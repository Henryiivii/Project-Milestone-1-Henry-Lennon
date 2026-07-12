
function gradeQuiz() {

let score = 0;
let total = 5;

let output = "";

let q1 = document.getElementById("q1").value.trim().toLowerCase();

if(q1 === "github copilot"){
    score++;
    output += "<p style='color:green'>Question 1: Correct</p>";
}else{
    output += "<p style='color:red'>Question 1: Incorrect (Answer: GitHub Copilot)</p>";
}

if(document.querySelector('input[name="q2"]:checked')?.value=="b"){
    score++;
    output += "<p style='color:green'>Question 2: Correct</p>";
}else{
    output += "<p style='color:red'>Question 2: Incorrect (Answer: GitHub Copilot)</p>";
}

if(document.querySelector('input[name="q3"]:checked')?.value=="a"){
    score++;
    output += "<p style='color:green'>Question 3: Correct</p>";
}else{
    output += "<p style='color:red'>Question 3: Incorrect (Answer: AI coding assistant)</p>";
}

if(document.querySelector('input[name="q4"]:checked')?.value=="c"){
    score++;
    output += "<p style='color:green'>Question 4: Correct</p>";
}else{
    output += "<p style='color:red'>Question 4: Incorrect (Answer: Review AI code)</p>";
}

let correct =
document.getElementById("c1").checked &&
document.getElementById("c2").checked &&
!document.getElementById("c3").checked &&
document.getElementById("c4").checked;

if(correct){
    score++;
    output += "<p style='color:green'>Question 5: Correct</p>";
}else{
    output += "<p style='color:red'>Question 5: Incorrect (Answers: HTML, CSS, JavaScript)</p>";
}

let result = "";

if(score >= 4){
    result = "<h2 style='color:green'>PASS</h2>";
}else{
    result = "<h2 style='color:red'>FAIL</h2>";
}

document.getElementById("results").innerHTML =
result +
"<h3>Total Score: " + score + " / " + total + "</h3>" +
output;

}

function resetQuiz(){

document.getElementById("quizForm").reset();

document.getElementById("results").innerHTML="";

}
