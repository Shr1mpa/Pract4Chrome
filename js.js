let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let image = document.querySelector('img');

image.onclick = function() {
    let src = image.getAttribute('src');
    if (src === 'img/mozila.png') {
        image.setAttribute('src', 'img/Chrome1.png');
    } else {
        image.setAttribute('src', 'img/mozila.png');
    }
}

let btn = document.querySelector('button');
let heading = document.querySelector('h1');

function SetUserName() {
    let myName = prompt('Please, enter your name:');
    if (!myName) {
        SetUserName();
    }
    else {
        localStorage.setItem('name', myName);
        heading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

btn.onclick = function() {
    SetUserName();
}