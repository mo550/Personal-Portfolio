// Main Toggle
let toggle = document.querySelector('.front-page .toggle'),
    frontPage = document.querySelector('.front-page'),
    portfolio = document.querySelector('.portfolio');

toggle.addEventListener('click', function(){
  frontPage.classList.add('active');
  portfolio.classList.add('active');
  navigation.classList.remove('rtn');
});


// Return To Main Page
let rtnToggle = document.querySelector('.toggle-btns .rtn-toggle');

rtnToggle.addEventListener('click', function(){
  frontPage.classList.remove('active');
  portfolio.classList.remove('active');
  navigation.classList.add('rtn');
});


// Navigation Toggle
let mainSec = document.querySelector('.main'),
    topBar = document.querySelector('.main .topbar'),
    navigation = document.querySelector('.navigation'),
    navToggle = document.querySelector('.toggle-btns .nav-toggle');

navToggle.addEventListener('click', function(){
  navToggle.classList.toggle('remove');
  navigation.classList.toggle('remove');
  topBar.classList.toggle('remove');
  mainSec.classList.toggle('remove');
});

// Close Menu When Clicking Nav links
function closeMenu(){
  let navigation = document.querySelector('.navigation');
  navigation.classList.remove('remove');
}


// Theme Switcher
let themeSwitcher = document.querySelector('.themeSwitcher'),
    body = document.querySelector('body');

themeSwitcher.addEventListener('click', function(){
  themeSwitcher.classList.toggle('light');
  body.classList.toggle('dark');

    if (themeSwitcher.innerHTML === '<i class="far fa-moon"></i>'){
      themeSwitcher.innerHTML = '<i class="far fa-sun"></i>';
    } else {
      themeSwitcher.innerHTML = '<i class="far fa-moon"></i>';
    }
});

// Start ScrollToTop Button
const ScrollToTop = document.querySelector('#scrollToTop');

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= 1500) {
      ScrollToTop.classList.add('active');
    } else {
      ScrollToTop.classList.remove('active');
    }
  });

ScrollToTop.addEventListener('click', function() {
  window.scrollTo ({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
});
// End ScrollToTop Button
