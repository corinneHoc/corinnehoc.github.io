// Image switcher code

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo_active.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/logo_active.png');
    }
});

 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bienvenue sur notre site !';
let myButtonResa = document.querySelector('#Resa');

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('nom', myName);
    if (myName ==='Emmanuel') {	
      myHeading.innerHTML = 'Tu es mon Amour, ' + myName;
    } else { 
      myHeading.innerHTML = 'Tu es qui toi ? ' + myName; 
      }
 
  }
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.innerHTML = 'Bienvenue, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

myButtonResa.onclick = function() {
  alert("En cours de developpement");
}

