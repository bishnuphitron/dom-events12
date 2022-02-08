function makeRed() {
  document.body.style.backgroundColor = 'red';
}

// handle blue btn click by setting function name
const blueButton = document.getElementById('make-blue-btn');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}