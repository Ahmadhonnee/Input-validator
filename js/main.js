var myFormEl = document.querySelector(".myForm");

var passwordEl = document.querySelector(".myForm__password");
var passwordValidFeedEl = document.querySelector(".myForm__password ~ .valid-feedback")
var passwordInvalidFeedEl = document.querySelector(".myform__password ~ .invalid-feedback")


var emailEl = document.querySelector(".myform__email");
var emailValidFeedEl = document.querySelector(".myform__email ~ .valid-feedback")
var emailInvalidFeedEl = document.querySelector(".myform__email ~ .invalid-feedback")



/**
 * object => email, age, firstname
 */
var validateForm = function (obj) {
    let isValid = {
        email: false,
        password: false
    };
    if (isValid.password = validatePassword(obj.password)) {

        passwordEl.classList.remove("is-invalid");
        passwordEl.classList.add("is-valid");
    } else {
        passwordEl.classList.add("is-invalid");
        passwordEl.classList.remove("is-valid");
    }

    if (isValid.email = validateEmail(obj.email)) {
        emailEl.classList.remove("is-invalid");
        emailEl.classList.add("is-valid");
    } else {
        emailEl.classList.add("is-invalid");
        emailEl.classList.remove("is-valid");
    }
    return isValid.password && isValid.email
}



myFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = {
        // firstname: nameEl.value,
        password: passwordEl.value,
        email: emailEl.value
    }

    if (validateForm(data)) {
        console.log("Ma'lumot jo'natish uchun tayyor")
        myFormTitleEl.style.backgroundColor = "green";
        myFormTitleEl.style.color = "white";
        modalOpen()

    } else {
        console.error("Ma'lumot berilgan shartlarga to'g'ri kelmadi")
        myFormTitleEl.style.backgroundColor = "red";
        myFormTitleEl.style.color = "white";
    }
})