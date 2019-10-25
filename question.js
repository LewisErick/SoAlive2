let questions = [
    "Empiezo a sentirme aislada de los amigos que tenía antes",
    "Mi pareja a menudo critica mi aspecto.",
    "Si quiero participar en una actividad de la escuela o social por la tarde sin mi pareja, el/ella no se opone.",
    "Me siento presionada a participar en actividades sexuales.",
    "Mi pareja me ha hecho daño físico, aunque el/ella se arrepintió después.",
    "Mis sentimientos y deseos son importantes para mi pareja.",
    "fin"
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
    if (questionIndex < questions.length) {
        questionIndex++;
    }
    if (questions[questionIndex] != "fin") {
        question.innerHTML = questions[questionIndex];
    } else {
        window.location.href = "index.html";
    }
});