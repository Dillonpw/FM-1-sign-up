function submitForm() {
    if (validateForm()) {
        clearErrorMessages(); // Clear any previous error messages
        document.getElementById('submitButton').disabled = true;
        return true;  // Allow form submission
    }
    return false; // Prevent form submission
}

function validateForm() {
    // Get form input elements
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // Get error message elements
    const fnameError = document.getElementById('fnameError');
    const lnameError = document.getElementById('lnameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    
    // Check each field and display error messages if necessary
    let isValid = true;
    
    if (fname.value === '') {
        fnameError.textContent = 'Please enter your first name';
        isValid = false;
    }
    if (lname.value === '') {
        lnameError.textContent = 'Please enter your last name';
        isValid = false;
    }
    if (email.value === '') {
        emailError.textContent = 'Please enter your email address';
        isValid = false;
    } else if (!validateEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    if (password.value === '') {
        passwordError.textContent = 'Please enter a password';
        isValid = false;
    }
    
    // Form is valid if no errors are displayed
    return isValid;  // Prevent form submission if there are errors
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function clearErrorMessages() {
    const fnameError = document.getElementById('fnameError');
    const lnameError = document.getElementById('lnameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    fnameError.textContent = '';
    lnameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
}