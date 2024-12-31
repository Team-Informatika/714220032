// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
    const hireMeButton = document.getElementById('hire-me');

    if (hireMeButton) { // Check if the button exists
        hireMeButton.addEventListener('click', function () {
            alert("Thanks for reaching out! Let’s create something amazing together. Contact me at: ayuniiraniaa@gmail.com");
        });
    } else {
        console.error('Hire Me button not found.');
    }
});
