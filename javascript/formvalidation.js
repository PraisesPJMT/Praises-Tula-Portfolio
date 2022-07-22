const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessage = document.querySelector('.error-message');
const storedFormData = JSON.parse(localStorage.getItem('formData'));

window.addEventListener('load', () => {
  if (Object.keys(storedFormData).length) {
    nameInput.value = storedFormData.name;
    emailInput.value = storedFormData.email;
    messageInput.value = storedFormData.message;
  }
});

contactForm.addEventListener('submit', (form) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    form.preventDefault();
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }
});
