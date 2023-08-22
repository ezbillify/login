const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'DARSHAN' && password === 'Dmk@123') {
    errorMessage.textContent = 'Login successful!';
    errorMessage.style.color = 'green';
  } else {
    errorMessage.textContent = 'Invalid username or password';
    errorMessage.style.color = 'red';
  }
});
