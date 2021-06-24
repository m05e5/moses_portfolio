const menuToggle = document.querySelector('.menu-toggle input');
const menulink = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
  if (menuToggle.checked === true) {
    nav.classList.add('new-nav-display');
  } else {
    nav.classList.remove('new-nav-display');
  }
});
menulink.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('slide');
  menuToggle.checked = false;
  nav.classList.remove('new-nav-display');
}));

// js modal object------------------------------------
const card1 = {
  title: 'Tonic',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './assets/Snapshoot1.png',
  tag1: 'html',
  tag2: 'Ruby on rails',
  tag3: 'css',
  tag4: 'javaScript',
  githubLink: 'https://github.com/m05e5/moses_portfolio/',
  liveDemoLink: 'https://m05e5.github.io/moses_portfolio/',
};
const card2 = {
  title: 'Multi-Post Sorties',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './assets/Snapshoot2.png',
  tag1: 'html',
  tag2: 'Ruby on rails',
  tag3: 'css',
  tag4: 'javaScript',
  githubLink: 'https://github.com/m05e5/moses_portfolio/',
  liveDemoLink: 'https://m05e5.github.io/moses_portfolio/',
};
const card3 = {
  title: 'Facebook 360',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './assets/Snapshoot3.png',
  tag1: 'html',
  tag2: 'Ruby on rails',
  tag3: 'css',
  tag4: 'javaScript',
  githubLink: 'https://github.com/m05e5/moses_portfolio/',
  liveDemoLink: 'https://m05e5.github.io/moses_portfolio/',
};
const card4 = {
  title: 'Uber Navigator',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './assets/Snapshoot4.png',
  tag1: 'html',
  tag2: 'Ruby on rails',
  tag3: 'css',
  tag4: 'javaScript',
  githubLink: 'https://github.com/m05e5/moses_portfolio/',
  liveDemoLink: 'https://m05e5.github.io/moses_portfolio/',
};

const card1Title = document.querySelector('#card1 h2');
const card1Img = document.querySelector('#card1 #c-img1');
const card1Desc = document.querySelector('#card1 .description');
const card1tag1 = document.querySelector('#card1 .tag1');
const card1tag2 = document.querySelector('#card1 .tag2');
const card1tag3 = document.querySelector('#card1 .tag3');
const card1tag4 = document.querySelector('#card1 .tag4');

const card2Title = document.querySelector('#card2 h2');
const card2Img = document.querySelector('#card2 #c-img2');
const card2Desc = document.querySelector('#card2 .description');
const card2tag1 = document.querySelector('#card2 .tag1');
const card2tag2 = document.querySelector('#card2 .tag2');
const card2tag3 = document.querySelector('#card2 .tag3');
const card2tag4 = document.querySelector('#card2 .tag4');

const card3Title = document.querySelector('#card3 h2');
const card3Img = document.querySelector('#card3 #c-img3');
const card3Desc = document.querySelector('#card3 .description');
const card3tag1 = document.querySelector('#card3 .tag1');
const card3tag2 = document.querySelector('#card3 .tag2');
const card3tag3 = document.querySelector('#card3 .tag3');
const card3tag4 = document.querySelector('#card3 .tag4');

const card4Title = document.querySelector('#card4 h2');
const card4Img = document.querySelector('#card4 #c-img4');
const card4Desc = document.querySelector('#card4 .description');
const card4tag1 = document.querySelector('#card4 .tag1');
const card4tag2 = document.querySelector('#card4 .tag2');
const card4tag3 = document.querySelector('#card4 .tag3');
const card4tag4 = document.querySelector('#card4 .tag4');

window.addEventListener('load', () => {
  card1Title.textContent = card1.title;
  card1Desc.textContent = card1.description;
  card1Img.src = card1.img;
  card1tag1.textContent = card1.tag1;
  card1tag2.textContent = card1.tag2;
  card1tag3.textContent = card1.tag3;
  card1tag4.textContent = card1.tag4;

  card2Title.textContent = card2.title;
  card2Desc.textContent = card2.description;
  card2Img.src = card2.img;
  card2tag1.textContent = card2.tag1;
  card2tag2.textContent = card2.tag2;
  card2tag3.textContent = card2.tag3;
  card2tag4.textContent = card2.tag4;

  card3Title.textContent = card3.title;
  card3Desc.textContent = card3.description;
  card3Img.src = card3.img;
  card3tag1.textContent = card3.tag1;
  card3tag2.textContent = card3.tag2;
  card3tag3.textContent = card3.tag3;
  card3tag4.textContent = card3.tag4;

  card4Title.textContent = card4.title;
  card4Desc.textContent = card4.description;
  card4Img.src = card4.img;
  card4tag1.textContent = card4.tag1;
  card4tag2.textContent = card4.tag2;
  card4tag3.textContent = card4.tag3;
  card4tag4.textContent = card4.tag4;
});

// js of my modal content------------------------------------
const modal1Title = document.querySelector('#myModal1 h2');
const modal1Img = document.querySelector('#myModal1 #pic1');
const modal1Desc = document.querySelector('#myModal1 .description');
const modal1tag1 = document.querySelector('#myModal1 .tag1');
const modal1tag2 = document.querySelector('#myModal1 .tag2');
const modal1tag3 = document.querySelector('#myModal1 .tag3');
const modal1tag4 = document.querySelector('#myModal1 .tag4');
const modal1live = document.querySelector('#myModal1 #live1');
const modal1github = document.querySelector('#myModal1 #github1');

const modal2Title = document.querySelector('#myModal2 h2');
const modal2Img = document.querySelector('#myModal2 #pic2');
const modal2Desc = document.querySelector('#myModal2 .description');
const modal2tag1 = document.querySelector('#myModal2 .tag1');
const modal2tag2 = document.querySelector('#myModal2 .tag2');
const modal2tag3 = document.querySelector('#myModal2 .tag3');
const modal2tag4 = document.querySelector('#myModal2 .tag4');
const modal2live = document.querySelector('#myModal2 #live2');
const modal2github = document.querySelector('#myModal2 #github2');

const modal3Title = document.querySelector('#myModal3 h2');
const modal3Img = document.querySelector('#myModal3 #pic3');
const modal3Desc = document.querySelector('#myModal3 .description');
const modal3tag1 = document.querySelector('#myModal3 .tag1');
const modal3tag2 = document.querySelector('#myModal3 .tag2');
const modal3tag3 = document.querySelector('#myModal3 .tag3');
const modal3tag4 = document.querySelector('#myModal3 .tag4');
const modal3live = document.querySelector('#myModal3 #live3');
const modal3github = document.querySelector('#myModal3 #github3');

const modal4Title = document.querySelector('#myModal4 h2');
const modal4Img = document.querySelector('#myModal4 #pic4');
const modal4Desc = document.querySelector('#myModal4 .description');
const modal4tag1 = document.querySelector('#myModal4 .tag1');
const modal4tag2 = document.querySelector('#myModal4 .tag2');
const modal4tag3 = document.querySelector('#myModal4 .tag3');
const modal4tag4 = document.querySelector('#myModal4 .tag4');
const modal4live = document.querySelector('#myModal4 #live4');
const modal4github = document.querySelector('#myModal4 #github4');

// js of my modal------------------------------------
// Get the modal
const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
const btn1 = document.getElementById('myBtn1');
const btn2 = document.getElementById('myBtn2');
const btn3 = document.getElementById('myBtn3');
const btn4 = document.getElementById('myBtn4');

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName('close')[0];
const span2 = document.getElementsByClassName('close')[1];
const span3 = document.getElementsByClassName('close')[2];
const span4 = document.getElementsByClassName('close')[3];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal1.style.display = 'block';
  modal1Title.textContent = card1.title;
  modal1Desc.textContent = card1.description;
  modal1Img.src = card1.img;
  modal1tag1.textContent = card1.tag1;
  modal1tag2.textContent = card1.tag2;
  modal1tag3.textContent = card1.tag3;
  modal1tag4.textContent = card1.tag4;
  modal1live.href = card1.liveDemoLink;
  modal1github.href = card1.githubLink;
};

btn2.onclick = function () {
  modal2.style.display = 'block';
  modal2Title.textContent = card2.title;
  modal2Desc.textContent = card2.description;
  modal2Img.src = card2.img;
  modal2tag1.textContent = card2.tag1;
  modal2tag2.textContent = card2.tag2;
  modal2tag3.textContent = card2.tag3;
  modal2tag4.textContent = card2.tag4;
  modal2live.href = card2.liveDemoLink;
  modal2github.href = card2.githubLink;
};

btn3.onclick = function () {
  modal3.style.display = 'block';
  modal3Title.textContent = card3.title;
  modal3Desc.textContent = card3.description;
  modal3Img.src = card3.img;
  modal3tag1.textContent = card3.tag1;
  modal3tag2.textContent = card3.tag2;
  modal3tag3.textContent = card3.tag3;
  modal3tag4.textContent = card3.tag4;
  modal3live.href = card4.liveDemoLink;
  modal3github.href = card4.githubLink;
};

btn4.onclick = function () {
  modal4.style.display = 'block';
  modal4Title.textContent = card4.title;
  modal4Desc.textContent = card4.description;
  modal4Img.src = card4.img;
  modal4tag1.textContent = card4.tag1;
  modal4tag2.textContent = card4.tag2;
  modal4tag3.textContent = card4.tag3;
  modal4tag4.textContent = card4.tag4;
  modal4live.href = card4.liveDemoLink;
  modal4github.href = card4.githubLink;
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = 'none';
};
span2.onclick = function () {
  modal2.style.display = 'none';
};
span3.onclick = function () {
  modal3.style.display = 'none';
};
span4.onclick = function () {
  modal4.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
  if (event.target === modal3) {
    modal3.style.display = 'none';
  }
  if (event.target === modal4) {
    modal4.style.display = 'none';
  }
};