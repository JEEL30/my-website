// ===============================
// API Gateway URL
// ===============================
const API_URL = "https://hsw4carufl.execute-api.us-east-1.amazonaws.com/prod";


// ===============================
// SIGNUP FUNCTION
// ===============================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        fetch(API_URL + "/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            alert("Registration Successful ✅");
            window.location.href = "login.html";
        })
        .catch(error => {
            console.error("Signup Error:", error);
            alert("Signup failed");
        });
    });
}


// ===============================
// LOGIN FUNCTION
// ===============================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        fetch(API_URL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {

            if (data.success) {
                localStorage.setItem("userEmail", email);
                window.location.href = "welcome.html";
            } else {
                alert("Invalid Email or Password ❌");
            }

        })
        .catch(error => {
            console.error("Login Error:", error);
            alert("Login failed");
        });
    });
}
