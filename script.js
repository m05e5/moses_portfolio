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
const cards = [{
  key: 1,
  id: 'c-img1',
  title: 'Tonic',
  company_name: 'FACEBOOK',
  company_type: 'Back End Dev',
  company_year: '2015',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './assets/Snapshoot1.png',
  alt: 'Card image',
  tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
  githubLink: 'github.com/m05e5/moses_portfolio/',
  liveDemoLink: 'www.google.com',
},
{
  key: 2,
  id: 'c-img2',
  title: 'Multi-Post Sorties',
  company_name: 'FACEBOOK',
  company_type: 'Back End Dev',
  company_year: '2015',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './assets/Snapshoot2.png',
  alt: 'Card image',
  tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
  githubLink: 'github.com/m05e5/moses_portfolio/',
  liveDemoLink: 'www.google.com',
},
{
  key: 3,
  id: 'c-img3',
  title: 'Facebook 360',
  company_name: 'FACEBOOK',
  company_type: 'Back End Dev',
  company_year: '2015',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './assets/Snapshoot3.png',
  alt: 'Card image',
  tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
  githubLink: 'github.com/m05e5/moses_portfolio/',
  liveDemoLink: 'www.google.com',
},
{
  key: 4,
  id: 'c-img4',
  title: 'Uber Navigator',
  company_name: 'FACEBOOK',
  company_type: 'Back End Dev',
  company_year: '2015',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './assets/Snapshoot4.png',
  alt: 'Card image',
  tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
  githubLink: 'github.com/m05e5/moses_portfolio/',
  liveDemoLink: 'www.google.com',
}];

const CardWrap = document.querySelector('#card-section');
const lunchCards = () => {
  cards.forEach((item) => {
    // CREATE PROJECT ITEM
    const list = document.createElement('li');
    list.classList.add('grid-card');
    // CREATE PROJECT IMAGE
    const workImg = document.createElement('img');
    workImg.classList.add('card-img');
    if (item.key % 2 === 0) {
      workImg.classList.add('c-2');
    }
    workImg.src = item.img;
    workImg.alt = item.alt;
    workImg.id = item.id;
    list.appendChild(workImg);
    const workbody = document.createElement('div');
    workbody.classList.add('card-body');
    // CREATE PROJECT HEADING
    const cardHead = document.createElement('h2');
    cardHead.classList.add('card-title');
    cardHead.innerText = item.title;
    workbody.appendChild(cardHead);
    // CREATE PROJECT ATTRIBUTES
    const workatt = document.createElement('div');
    workatt.classList.add('card-attribut');
    // CREATE PROJECT ATTRIBUTES COMPANY NAME
    const companyName = document.createElement('span');
    companyName.classList.add('att1');
    companyName.innerText = item.company_name;
    workatt.appendChild(companyName);
    // CREATE PROJECT DETAILS-DOT
    const dotImg = document.createElement('img');
    dotImg.classList.add('dot');
    dotImg.src = './assets/Counter.png';
    dotImg.alt = 'dot';
    workatt.appendChild(dotImg);
    // CREATE PROJECT ATTRIBUTES COMPANY TYPE
    const companyType = document.createElement('span');
    companyType.classList.add('att2');
    companyType.innerText = item.company_name;
    workatt.appendChild(companyType);
    // CREATE PROJECT DETAILS-SECOND-DOT
    const secDotImg = document.createElement('img');
    secDotImg.classList.add('dot');
    secDotImg.src = './assets/Counter.png';
    secDotImg.alt = 'dot';
    workatt.appendChild(secDotImg);
    // CREATE PROJECT ATTRIBUTES COMPANY DATE
    const companyDate = document.createElement('span');
    companyDate.classList.add('att2');
    companyDate.innerText = item.company_name;
    workatt.appendChild(companyDate);
    workbody.appendChild(workatt);

    // CREATE PROJECT DESCRIPTION
    const workDescription = document.createElement('p');
    workDescription.classList.add('card-text');
    workDescription.innerText = item.description;
    workbody.appendChild(workDescription);
    // CREATE PROJECT TECHNOLOGIES LIST
    const projectTags = document.createElement('ul');
    projectTags.classList.add('tag-section');
    item.tags.forEach((tech) => {
      const techItem = document.createElement('li');
      techItem.classList.add('tag-div');
      const tag = document.createElement('span');
      tag.classList.add('tag');
      tag.innerText = tech;
      techItem.appendChild(tag);
      projectTags.appendChild(techItem);
    });
    workbody.appendChild(projectTags);
    // CREATE SEE PROJECT BUTTON
    const seeMoreBtn = document.createElement('button');
    seeMoreBtn.type = 'button';
    seeMoreBtn.classList.add('button');
    seeMoreBtn.innerText = 'See Project';
    seeMoreBtn.dataset.key = item.key;
    seeMoreBtn.id = `myBtn${item.key}`;
    workbody.appendChild(seeMoreBtn);
    list.appendChild(workbody);
    CardWrap.appendChild(list);
  });
};

lunchCards();

// js of my modal content------------------------------------
const modalTitle = document.querySelector('#myModal h2');
const modalImg = document.querySelector('#myModal #pic1');
const modalDesc = document.querySelector('#myModal .description');
const modaltag1 = document.querySelector('#myModal .tag1');
const modaltag2 = document.querySelector('#myModal .tag2');
const modaltag3 = document.querySelector('#myModal .tag3');
const modaltag4 = document.querySelector('#myModal .tag4');
const modallive = document.querySelector('#myModal #live1');
const modalgithub = document.querySelector('#myModal #github1');

// js of my modal------------------------------------
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn1 = document.getElementById('myBtn1');
const btn2 = document.getElementById('myBtn2');
const btn3 = document.getElementById('myBtn3');
const btn4 = document.getElementById('myBtn4');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[0].title;
  modalDesc.textContent = cards[0].description;
  modalImg.src = cards[0].img;
  modaltag1.textContent = cards[0].tags[0];
  modaltag2.textContent = cards[0].tags[1];
  modaltag3.textContent = cards[0].tags[2];
  modaltag4.textContent = cards[0].tags[3];
  modallive.href = cards[0].liveDemoLink;
  modalgithub.href = cards[0].githubLink;
};

btn2.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[1].title;
  modalDesc.textContent = cards[1].description;
  modalImg.src = cards[1].img;
  modaltag1.textContent = cards[1].tags[0];
  modaltag2.textContent = cards[1].tags[1];
  modaltag3.textContent = cards[1].tags[2];
  modaltag4.textContent = cards[1].tags[3];
  modallive.href = cards[1].liveDemoLink;
  modalgithub.href = cards[1].githubLink;
};

btn3.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[2].title;
  modalDesc.textContent = cards[2].description;
  modalImg.src = cards[2].img;
  modaltag1.textContent = cards[2].tags[0];
  modaltag2.textContent = cards[2].tags[1];
  modaltag3.textContent = cards[2].tags[2];
  modaltag4.textContent = cards[2].tags[3];
  modallive.href = cards[3].liveDemoLink;
  modalgithub.href = cards[3].githubLink;
};

btn4.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[3].title;
  modalDesc.textContent = cards[3].description;
  modalImg.src = cards[3].img;
  modaltag1.textContent = cards[3].tags[0];
  modaltag2.textContent = cards[3].tags[1];
  modaltag3.textContent = cards[3].tags[2];
  modaltag4.textContent = cards[3].tags[3];
  modallive.href = cards[3].liveDemoLink;
  modalgithub.href = cards[3].githubLink;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};