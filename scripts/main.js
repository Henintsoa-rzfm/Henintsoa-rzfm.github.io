function aona(){
	let myHeading = document.querySelector('h1');
	myHeading.textContent = 'Bonjour, monde !';	
}

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});