const menuToggle = document.querySelector('.menu-toggle input');
const menulink = document.querySelectorAll('nav ul li a');
const navMenu = document.querySelectorAll('nav ul');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
  if(menuToggle.checked == true) {
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

//js modal object------------------------------------
const cardTitle = document.querySelector('#card1 .card-body h1').textContent;

const card1 = {
  title: "Tonic",
  description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  img: "./assets/Snapshoot1.png",
  tag: ["html", "Ruby on rails", "css", "javaScript"],
} ;
const card2 = {
  title: "Multi-Post Sorties",
  description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  img: "./assets/Snapshoot2.png",
  tag: ["html", "Ruby on rails", "css", "javaScript"],
} ;
const card3 = {
  title: "Facebook 360",
  description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  img: "./assets/Snapshoot3.png",
  tag: ["html", "Ruby on rails", "css", "javaScript"],
} ;
const card4 = {
  title: "Uber Navigator",
  description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  img: "./assets/Snapshoot4.png",
  tag: ["html", "Ruby on rails", "css", "javaScript"],
} ;

const modal1Title = document.querySelector('#myModal1 h2'); 
const modal1Img = document.querySelector('#myModal1 #pic'); 
const modal1Desc = document.querySelector('#myModal1 #description'); 
const modal1tag1 = document.querySelector('#myModal1 .tag1');
const modal1tag2 = document.querySelector('#myModal1 .tag2');
const modal1tag3 = document.querySelector('#myModal1 .tag3');
const modal1tag4 = document.querySelector('#myModal1 .tag4');

const modal2Title = document.querySelector('#myModal2 h2'); 
const modal2Img = document.querySelector('#myModal2 #pic'); 
const modal2Desc = document.querySelector('#myModal2 #description'); 
const modal2tag1 = document.querySelector('#myModal2 .tag1');
const modal2tag2 = document.querySelector('#myModal2 .tag2');
const modal2tag3 = document.querySelector('#myModal2 .tag3');
const modal2tag4 = document.querySelector('#myModal2 .tag4');

const modal3Title = document.querySelector('#myModal3 h2'); 
const modal3Img = document.querySelector('#myModal3 #pic'); 
const modal3Desc = document.querySelector('#myModal3 #description'); 
const modal3tag1 = document.querySelector('#myModal3 .tag1');
const modal3tag2 = document.querySelector('#myModal3 .tag2');
const modal3tag3 = document.querySelector('#myModal3 .tag3');
const modal3tag4 = document.querySelector('#myModal3 .tag4');

const modal4Title = document.querySelector('#myModal4 h2'); 
const modal4Img = document.querySelector('#myModal4 #pic'); 
const modal4Desc = document.querySelector('#myModal4 #description'); 
const modal4tag1 = document.querySelector('#myModal4 .tag1');
const modal4tag2 = document.querySelector('#myModal4 .tag2');
const modal4tag3 = document.querySelector('#myModal4 .tag3');
const modal4tag4 = document.querySelector('#myModal4 .tag4');

// js of my modal------------------------------------
// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
  modal1Title.textContent = card1.title;
  modal1Img.src = card1.img;
  modal1Desc.textContent = card1.description;
  modal1tag1.textContent = card1.tag[0];
  modal1tag2.textContent = card1.tag[1];
  modal1tag3.textContent = card1.tag[2];
  modal1tag4.textContent = card1.tag[3];
}

btn2.onclick = function() {
  modal2.style.display = "block";
  modal2Title.textContent = card2.title;
  modal2Img.src = card2.img;
  modal2Desc.textContent = card2.description;
  modal2tag1.textContent = card2.tag[0];
  modal2tag2.textContent = card2.tag[1];
  modal2tag3.textContent = card2.tag[2];
  modal2tag4.textContent = card2.tag[3];
}

btn3.onclick = function() {
  modal3.style.display = "block";
  modal3Title.textContent = card3.title;
  modal3Img.src = card3.img;
  modal3Desc.textContent = card3.description;
  modal3tag1.textContent = card3.tag[0];
  modal3tag2.textContent = card3.tag[1];
  modal3tag3.textContent = card3.tag[2];
  modal3tag4.textContent = card3.tag[3];
}

btn4.onclick = function() {
  modal4.style.display = "block";
  modal4Title.textContent = card4.title;
  modal4Img.src = card4.img;
  modal4Desc.textContent = card4.description;
  modal4tag1.textContent = card4.tag[0];
  modal4tag2.textContent = card4.tag[1];
  modal4tag3.textContent = card4.tag[2];
  modal4tag4.textContent = card4.tag[3];
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
} 

