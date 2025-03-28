const scriptURL = "https://script.google.com/macros/s/AKfycbzCLMyki8wMZIIVlxIjWZff2SHrXZOvq--eja5sC-LlpmGOC-aRqo_Wvh_5VzvrKMsq/exec"; // Replace with your actual script URL

// Function to register a new user
async function registerUser(event) {
    event.preventDefault();
    
    let name = document.querySelector(".register input[type='text']").value;
    let email = document.querySelector(".register input[type='email']").value;
    let password = document.querySelector(".register input[type='password']").value;

    let response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ action: "register", name, email, password }),
        headers: { "Content-Type": "application/json" }
    });

    let result = await response.json();
    alert(result.message);
}

// Function to log in a user
async function loginUser(event) {
    event.preventDefault();
    
    let email = document.querySelector(".login input[type='email']").value;
    let password = document.querySelector(".login input[type='password']").value;

    let response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ action: "login", email, password }),
        headers: { "Content-Type": "application/json" }
    });

    let result = await response.json();

    if (result.success) {
        alert(result.message);
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert(result.message);
    }
}

// Attach event listeners
document.querySelector(".login .btn").addEventListener("click", loginUser);
document.querySelector(".register .btn").addEventListener("click", registerUser);

