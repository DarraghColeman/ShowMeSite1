//(COLOUR COORDINATE JS FILE BELOW)

// Get all images inside .inner-box
const innerBoxes = document.querySelectorAll('.inner-box');

// Add click event listener to each inner-box
innerBoxes.forEach((box) => {
  box.addEventListener('click', function(event) {
    // Stop the event from propagating to the parent elements
    event.stopPropagation();

    // Find the image within the clicked inner-box
    const image = box.querySelector('img');

    // Trigger the animation on the image
    image.classList.add('clicked');

    // Remove the 'clicked' class after the animation finishes
    setTimeout(() => {
      image.classList.remove('clicked');
    }, 300); // Match the animation duration in milliseconds
  });
});