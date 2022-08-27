/* Returns true or false */
function validateEmail(email) {
    let regex = /^[0-9A-Za-z]{3,}\@[0-9A-Za-z]{3,10}\.[A-Za-z0-9]{1,4}$/
    return regex.test(email);
}

function validatePassword(password) {
    let regex = /^[0-9]{5,10}$/;
    return regex.test(password);
}