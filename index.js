//We secure to all the code be executed when the page is loaded 
document.addEventListener('DOMContentLoaded', function () {
    // we obtain the two buttons, the opening and the closing button.
    const openButton = document.querySelector('.contact-btn');
    const closeButton = document.querySelector('.close-button');

    //we obtain the main container and the form container
    const main = document.querySelector('.main');
    const form = document.querySelector('.form');

    // Add event listener to the open button
    openButton.addEventListener('click', function () {
        // Add the 'hidden' class to the 'main' element
        main.classList.add('hidden');
        // Remove the 'hidden' class from the 'form' element
        form.classList.remove('hidden');
    });

    // Add event listener to the close button
    closeButton.addEventListener('click', function () {
        // Remove the 'hidden' class from the 'main' element
        main.classList.remove('hidden');
        // Add the 'hidden' class to the 'form' element
        form.classList.add('hidden');
    });
});