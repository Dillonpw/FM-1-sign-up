//this was is ai asissted, not functioning properly at this point.//
function validateForm() {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const signPass = document.getElementById('password');

    const fnameError = document.getElementById('nameError');
    const lnameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const ageError = document.getElementById('passwordError');

    const isfNameValid = fname.value.trim() !== '';
    const islNameValid = lname.value.trim() !== '';
    const isEmailValid = emailInput.value.trim() !== '';
    const isAgeValid = signPass.value.trim() !== '';

    fnameError.textContent = isfNameValid ? '' : 'Name is required.';
    lnameError.textContent = islNameValid ? '' : 'Name is required.';
    emailError.textContent = isEmailValid ? '' : 'Email is required.';
    ageError.textContent = isAgeValid ? '' : 'Age is required.';

    const isFormValid =
        isfNameValid && islNameValid && isEmailValid && isAgeValid;

    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = !isFormValid;

    if (!isFormValid) {
        alert('Please fill out all the required fields before submitting.');
    }
}

const formInputs = document.querySelectorAll('#myForm input');
formInputs.forEach((input) => {
    input.addEventListener('input', validateForm);
});

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fname = document.getElementById('name').value;
    const lname = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    let message = `Name: ${fname} ${lname} \nEmail: ${email}\n is this correct?`;
    alert(message);
});
