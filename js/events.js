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

// handle event using anonymous function
const greenButton = document.getElementById('make-green-btn');
// anonymous function
greenButton.onclick = function () {
  document.body.style.backgroundColor = 'green';
}

// handle by using addEventListener
const goldenrodButton = document.getElementById('make-goldenrod-btn');
goldenrodButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
  document.body.style.backgroundColor = 'goldenrod';
}


// addEventListener
const hotpinkButton = document.getElementById('make-hotpink-btn');
hotpinkButton.addEventListener('click', function () {
  document.body.style.backgroundColor = 'hotpink';
})


// direct shortcut
document.getElementById('make-lightblue-btn').addEventListener
('click', function () {
  document.body.style.backgroundColor = 'lightblue';
})