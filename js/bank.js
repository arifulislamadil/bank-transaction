document.getElementById("login-submit").addEventListener("click", function () {
    //get user email
    const emailField = document.getElementById("email-field");
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById("password-field");
    const userPassword = passwordField.value;

    //check validation email & password
    if (userEmail == "Adil@gmail.com" && userPassword == "Arif") {
        location.href = "banking.html";
    }
    else {
        alert("please input valid email and passwprd");
    }
})