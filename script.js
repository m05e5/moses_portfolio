const menuToggle = document.querySelector('.menu-toggle input');
const menulink = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
  console.log('hello');
});
menulink.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('slide');
  document.querySelector('.menu-toggle input').checked = false;
}));