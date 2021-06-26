const submitBtn = document.getElementById('submit');
const state = document.getElementById('form-state');
state.style.color = 'red';
submitBtn.onclick = function (event) {
  const email = document.getElementById('email').value;
  const lowerCaseEmail = email.toLowerCase();
  if (email !== lowerCaseEmail) {
    state.textContent = 'Incorrect Email Format';
    event.preventDefault();
  }
};