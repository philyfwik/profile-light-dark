const nav = document.getElementById('nav'); // for nav bar
// for toggle dark / light mode:
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
// for technical skills / hobbies: 
const aboutTitle = document.getElementById('about-title');  
const image1Title = document.getElementById('img1-title');
const image2Title = document.getElementById('img2-title');
const image3Title = document.getElementById('img3-title');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
// for project (to be toggle switched between js and react once more projects are completed)
const textBox = document.getElementById('text-box');
//const textBoxP = document.getElementById('text-box-p');
// for achievements
const achievement1 = document.getElementById('ach1');
const achievement2 = document.getElementById('ach2');
const achievement3 = document.getElementById('ach3');

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_img1_${color}.svg`;
  image2.src = `img/undraw_img2_${color}.svg`;
  image3.src = `img/undraw_img3_${color}.svg`;
  achievement1.src = `img/undraw_graduation_${color}.svg`;
  achievement2.src = `img/undraw_awards_${color}.svg`;
  achievement3.src = `img/undraw_awards_${color}.svg`;
}

// Change Image Titles
function imageTitle(title1, title2, title3) {
  image1Title.textContent = `${title1}`;
  image2Title.textContent = `${title2}`;
  image3Title.textContent = `${title3}`;
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
  nav.children[1].textContent = 'HOBBIES';
  aboutTitle.textContent = 'Hobbies';
  imageMode('dark');
  imageTitle('Basketball', 'Playing Games', 'Travelling');
  //projectsTitle.textContent = 'React Projects';
  //textBoxP.textContent = 'All Projects were built in ReactJS';
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(239 248 251 / 50%)';
  textBox.style.backgroundColor = 'rgba(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  nav.children[1].textContent = 'SKILLS';
  aboutTitle.textContent = 'Technical Skills';
  imageMode('light');
  imageTitle('JavaScript / Vue Developer', 'PHP / Laravel Developer', 'Full Stack Developer');
  //projectsTitle.textContent = 'JS Projects';
  //textBoxP.textContent = 'All Projects were built in JavaScript';
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}