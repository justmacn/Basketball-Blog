// declares global variables
const modeSwitch = document.querySelector('#mode-switcher');
const modeContainer = document.querySelector('.mode-container');

// this variable represents our default color mode 
let mode = 'light';

// upon clicking, the event function will swap out the class of the page's color mode
modeSwitch.addEventListener('click', function () {
  // if the mode variable is already light it will reassign the value to dark
  if (mode === 'light') {
    mode = 'dark';
    modeContainer.setAttribute('class', 'dark');
  }
  // if its dark it will switch to light
  else {
    mode = 'light';
    modeContainer.setAttribute('class', 'light');
  }
});
