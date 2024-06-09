// Define tryLogin globally
window.tryLogin = function () {
    const emailInput = document.querySelector("#login_form_email");
    const passwordInput = document.querySelector("#login_form_password");
    const loginButton = document.querySelector('button[type="submit"]');

    if (emailInput && passwordInput && loginButton) {
        // Fill in the login details
        const inputEvent = new Event("input", {
            bubbles: true,
            cancelable: true
        });

        // Fill in the login details and dispatch input events
        emailInput.value = "ahmad.chand@ili.digital";
        emailInput.dispatchEvent(inputEvent);

        passwordInput.value = "Dizzybull99?";
        passwordInput.dispatchEvent(inputEvent);
        // Click the login button
        loginButton.click();
        // Stop observing once the login attempt has been made
        observer.disconnect();
    }
};
