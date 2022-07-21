const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

function validateEmail(form) {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    form.preventDefault();
    errorMessage.style.display = 'block';
  }
}

contactForm.addEventListener('submit', validateEmail);