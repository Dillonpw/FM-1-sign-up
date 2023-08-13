function validateForm() {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const signPass = document.getElementById('password');

    const fnameError = document.getElementById('fnameError');
    const lnameError = document.getElementById('lnameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const isfNameValid = fname.value.trim() !== '';
    const islNameValid = lname.value.trim() !== '';
    const isEmailValid = emailInput.value.trim() !== '';
    const isPasswordValid = signPass.value.trim() !== '';

    fnameError.textContent = isfNameValid ? '' : 'First name is required.';
    lnameError.textContent = islNameValid ? '' : 'Last name is required.';
    emailError.textContent = isEmailValid ? '' : 'Email is required.';
    passwordError.textContent = isPasswordValid ? '' : 'Password is required.';

    const isFormValid =
        isfNameValid && islNameValid && isEmailValid && isPasswordValid;

    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = !isFormValid;

    if (!isFormValid) {
        alert('Please fill out all the required fields before submitting.');
    }
}

const formInputs = document.querySelectorAll('.myForm input');
formInputs.forEach((input) => {
    input.addEventListener('input', validateForm);
});

const myForm = document.querySelector('.myForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    validateForm();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    let message = `Name: ${fname} ${lname} \nEmail: ${email}\n is this correct?`;
    alert(message);
});
