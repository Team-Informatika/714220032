// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
    const hireMeButton = document.getElementById('hire-me');

    if (hireMeButton) { // Check if the button exists
        hireMeButton.addEventListener('click', function () {
            alert("Thank you for your interest! Let's work together to create amazing projects. Contact me at: ayuniiraniaa@gmail.com");
        });
    } else {
        console.error('Hire Me button not found.');
    }
});
