document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const regex = /^[a-zA-Z]{2,20}/;
  if (!regex.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const regex = /^[0-9]{6}(-[0-9]{6})?$/;
  if (!regex.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!regex.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
