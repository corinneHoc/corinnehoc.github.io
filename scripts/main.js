// Image switcher code

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';


function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('nom', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.innerHTML = 'Mozilla est cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
