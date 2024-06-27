let form = document.getElementById("form");

let username = document.getElementById("username");

let email = document.getElementById("email");

let password = document.getElementById("password");

let password2 = document.getElementById("password2");

// e is event common element

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

// error function

function setErrorFor(input, message) {

    // assign all input element to formcontrol

    let formControl = input.parentElement;
    let p = formControl.querySelector("p");

    // formcontrol property assign to formcontrol error

    formControl.className = 'form-controlerror';
    p.innerText = message;
}

// success function

function setSuccessFor(input, message) {
    let formControl = input.parentElement;
    let p = formControl.querySelector("p");

    // formcontrol property assing to fromcontrol success

    formControl.className = 'form-controlsuccess';
    p.innerText = message;

}


// trim to remove the whitespaces

function checkInputs() {

    let usernameValue = username.value.trim();

    let emailValue = email.value.trim();

    let passwordValue = password.value.trim();

    let password2Value = password2.value.trim();


    // username validation

    if (usernameValue === "") {
        setErrorFor(username, 'Username Cannot Be Blank');
    }
    else {
        setSuccessFor(username, 'Username Correct');
    }

    // email validation

    if (emailValue === "") {
        setErrorFor(email, 'Email Cannot Be Blank');
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email Not Valid');
    }
    else {
        setSuccessFor(email, 'Email Correct');
    }

    // password validation

    if (passwordValue === "") {
        setErrorFor(password, 'Password Cannot Be Blank');
    }
    else {
        setSuccessFor(password, 'Password Correct');
    }

    // conform password

    if (password2Value === "") {
        setErrorFor(password2, 'Password2 Cannot Be Blank');
    }
    else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password Does Not Match');
    }
    else {
        setSuccessFor(password2, 'Password2 Correct')
    }

}

// email function

function isEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}







