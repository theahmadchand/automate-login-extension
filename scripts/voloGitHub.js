// Define tryContinue globally
window.tryContinue = function () {
    const continueButton = document.querySelector('button[type="submit"]');

    if (continueButton) {
        // Click the continue button
        continueButton.click();
        // Stop observing once the login attempt has been made
        observer.disconnect();
    }
};
