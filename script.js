const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image1Title = document.getElementById('img1-title');
const image2Title = document.getElementById('img2-title');
const image3Title = document.getElementById('img3-title');
const textBox = document.getElementById('text-box');
const aboutTitle = document.getElementById('about-title');

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.add('fa-moon');
  nav.children[1].textContent = 'HOBBIES';
  aboutTitle.textContent = 'Hobbies';
  image1.src = 'img/undraw_basketball_agx4.svg'
  image2.src = 'img/undraw_video_game_night_8h8m.svg'
  image3.src = 'img/undraw_traveling_re_weve.svg'
  image1Title.textContent = 'Basketball';
  image2Title.textContent = 'Playing Games';
  image3Title.textContent = 'Travelling';
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(239 248 251 / 50%)';
  textBox.style.backgroundColor = 'rgba(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-sun');
  nav.children[1].textContent = 'SKILLS';
  aboutTitle.textContent = 'Technical Skills';
  image1.src = 'img/undraw_proud_coder_light.svg'
  image2.src = 'img/undraw_conceptual_idea_light.svg'
  image3.src = 'img/undraw_feeling_proud_light.svg'
  image1Title.textContent = 'JavaScript Developer';
  image2Title.textContent = 'React Developer';
  image3Title.textContent = 'Full Stack Developer';
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);