import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const storageKey = 'feedback-form-state';

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

function onFormData() {
  const formData = { email: email.value, message: message.value };

  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(storageKey));
  localStorage.removeItem(storageKey);
}
dataFromLocalStorage();
function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(storageKey));

  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
