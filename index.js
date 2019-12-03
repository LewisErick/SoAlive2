let doctorButton = document.getElementById("doctor");

doctorButton.addEventListener("click", function() {
    let calendarView =  document.getElementsByClassName("calendar-page")[0];
    calendarView.style.display = "none";

    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "block";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "none";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "none";

    let chatView =  document.getElementById("chat-main");
    chatView.style.display = "none";

    let profileView =  document.getElementById("profile-main");
    profileView.style.display = "none";

    let body = document.getElementsByTagName("body")[0];
    body.style.background = "white";
    body.style.color = "black";
});

let questionsButton = document.getElementById("question");

questionsButton.addEventListener("click", function() {
    let notifView =  document.getElementsByClassName("notifications-page")[0];
    notifView.style.display = "none";
    
    let calendarView =  document.getElementsByClassName("calendar-page")[0];
    calendarView.style.display = "none";

    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "none";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "block";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "none";

    let profileView =  document.getElementById("profile-main");
    profileView.style.display = "none";

    let chatView =  document.getElementById("chat-main");
    chatView.style.display = "none";
});

let pillsButton = document.getElementById("pills");

pillsButton.addEventListener("click", function() {
    let notifView =  document.getElementsByClassName("notifications-page")[0];
    notifView.style.display = "none";

    let calendarView =  document.getElementsByClassName("calendar-page")[0];
    calendarView.style.display = "none";

    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "none";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "none";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "block";

    let chatView =  document.getElementById("chat-main");
    chatView.style.display = "none";

    let profileView =  document.getElementById("profile-main");
    profileView.style.display = "none";

    let body = document.getElementsByTagName("body")[0];
    body.style.background = "white";
    body.style.color = "black";
});

let calendarButton = document.getElementById("calendar");

calendarButton.addEventListener("click", function() {
    let notifView =  document.getElementsByClassName("notifications-page")[0];
    notifView.style.display = "none";

    let calendarView =  document.getElementsByClassName("calendar-page")[0];
    calendarView.style.display = "block";

    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "none";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "none";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "none";

    let chatView =  document.getElementById("chat-main");
    chatView.style.display = "none";

    let profileView =  document.getElementById("profile-main");
    profileView.style.display = "none";

    let body = document.getElementsByTagName("body")[0];
    body.style.background = "white";
    body.style.color = "black";
});

let notifButton = document.getElementById("notif");

notifButton.addEventListener("click", function() {
    let notifView =  document.getElementsByClassName("notifications-page")[0];
    notifView.style.display = "block";

    let calendarView =  document.getElementsByClassName("calendar-page")[0];
    calendarView.style.display = "none";

    let doctorView =  document.getElementsByClassName("doctors-main")[0];
    doctorView.style.display = "none";

    let questionsView =  document.getElementsByClassName("questions-main")[0];
    questionsView.style.display = "none";

    let productsView =  document.getElementsByClassName("products-main")[0];
    productsView.style.display = "none";

    let chatView =  document.getElementById("chat-main");
    chatView.style.display = "none";

    let profileView =  document.getElementById("profile-main");
    profileView.style.display = "none";

    let body = document.getElementsByTagName("body")[0];
    body.style.background = "white";
    body.style.color = "black";
});

$(document).ready(function() {
    $(".product-img").on("click", function(event) {
        event.preventDefault();
        
        $(".product-img").css("filter", "blur(20px)");
        $(this).css("filter", "none");
    });

    $(".toast__close").on("click", function(event) {
        $(this).parent().fadeOut();
    });

    $(".docdoc").on("click", function(event) {
        $("#chat-main").show();
        $("#profile-main").hide();
        $(".calendar-page").hide();
        $(".doctors-main").hide();
        $(".questions-main").hide();
        $(".products-main").hide();
        $(".notifications-page").hide();
    });

    $("#chatbutton").on("click", function(event) {
        event.preventDefault();

        $("#dynamic-chat").append(`
            <div class="outgoing_msg">
                          <div class="sent_msg">
                            <p>${$("#chattext").val()}</p>
                            <span class="time_date"> 11:01 AM    |    Hoy</span> </div>
                        </div>
            `);
    });

    $("#profile").on("click", function(event) {
        let body = document.getElementsByTagName("body")[0];
        body.style.background = "linear-gradient(180deg, rgba(74,70,255,1) 0%, rgba(80,85,252,1) 21%, rgba(126,197,232,1) 100%)";
        body.style.color = "black";

        event.preventDefault();

        $("#profile-main").show();
        $("#chat-main").hide();
        $(".notifications-page").hide();
        $(".calendar-page").hide();
        $(".doctors-main").hide();
        $(".questions-main").hide();
        $(".products-main").hide();
    });
});