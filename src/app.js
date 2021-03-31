
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
// const iconError = document.getElementById('icon-error');
const emailError = document.getElementById('error-msg');


emailInput.addEventListener("input", function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (emailInput.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.innerHTML = ''; // Reset the content of the message
        emailError.className = 'error-msg'; // Reset the visual state of the message
        // iconError.className = 'icon-error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }

});

form.addEventListener('submit', (event) => {

    // if the email field is valid, we let the form submit

    if (!emailInput.value || emailInput.value.trim().length === 0 || !email.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});



function showError() {
    if (!emailInput.value || emailInput.value.trim().length === 0) {
        // If the field is empty
        // display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        emailError.textContent = 'Please provide a valid email.';
    } else if (email.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    // Set the styling appropriately
    emailError.className = 'error-msg';
    // iconError.className = 'icon-error active';
}