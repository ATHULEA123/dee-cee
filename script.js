
// function formopen() {
//     const addemployeeform = document.getElementById("employeeform");
//     addemployeeform.style.display = "block";
//     overlayOn();
//   }
  document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const hamburger = document.querySelector('.hamburger');
    const navSection = document.querySelector('.navbar_sctn');
    const closeBtn = document.querySelector('.close_btn');

    // Initially hide the navigation section
    navSection.style.display = 'none';

    // Add click event to the hamburger icon
    hamburger.addEventListener('click', function () {
        navSection.style.display = 'block'; // Show navigation section
    });

    // Add click event to the close button
    closeBtn.addEventListener('click', function () {
        navSection.style.display = 'none'; // Hide navigation section
    });
});

