let questions = [
    "Que quiere decir ser una persona sexualmente inteligente",
    "Cual de estas ETS es la menos común?",
    "Donde se produce el semen?",
    "Las relaciones sexuales entre dos personas del mismo sexo",
    "fin"
];

let answers = [
    ["Con muchas experiencias sexuales en su vida y adquiere sabiduría",
     "Es quien tiene la facultad de poder hacer el amor disfrutando.",
     "Aquella que habla abiertamente de cualquier tema relacionado con sexualidad "],
    [
        "Citomegalovirus",
        "Tricomoniasis",
        "VPH"
    ],
    [
        "En el epidídimo",
        "Testículos",
        "Cervix"
    ],
    [
        "Tienen mismo riesgo de contraer una ETS",
        "Tienen menos riesgo de contraer una ETS",
        "Tienen mas riesgo de contraer una ETS"
    ]
];

var questionIndex = 0;

let doctorButton = document.getElementById("doctor");

doctorButton.addEventListener("click", function() {
    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "block";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "none";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "none";
});

let questionsButton = document.getElementById("question");

questionsButton.addEventListener("click", function() {
    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "none";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "block";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "none";
});

let pillsButton = document.getElementById("pills");

pillsButton.addEventListener("click", function() {
    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "none";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "none";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "block";
});

let questionForm = document.getElementById("questionForm");

questionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let question = document.getElementsByClassName("question")[0];
    let op1 = document.getElementById("op1");
    let op2 = document.getElementById("op2");
    let op3 = document.getElementById("op3");
    if (questionIndex < questions.length) {
        questionIndex++;
    }
    if (questions[questionIndex] != "fin") {
        question.innerHTML = questions[questionIndex];
        op1.innerHTML = answers[questionIndex][0];
        op2.innerHTML = answers[questionIndex][1];
        op3.innerHTML = answers[questionIndex][2];
        console.log(answers[questionIndex]);

    } else {
        window.location.href = "index.html";
    }
});