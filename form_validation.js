
const submitBtn = document.getElementById('submit');
const message = document.getElementById('form-state');
message.style.color = "red";
submitBtn.addEventListener('click',function(event) {
    const email = document.getElementById('email').value;
    const lowerCaseEmail = email.toLowerCase();

});