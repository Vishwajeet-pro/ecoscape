// === 1. Responsive Navigation Menu ===
document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      // Toggle the 'active' class to show/hide the nav links
      navLinks.classList.toggle('active');
    });
  }


  // === 2. Contact Form Validation ===
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop the form from submitting
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Simple validation
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
      } else {
        // In a real project, you would send this data to a server.
        // For this demo, we'll just show a success message.
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Clear the form
      }
    });
  }

});