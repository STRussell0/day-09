const title = document.createElement('h1');
title.innerHTML = "Username Time!"
document.body.appendChild(title);

const userName = document.createElement('p');
userName.innerHTML = 'Please enter your username'
document.body.appendChild(userName);

const input = document.createElement('input');
document.body.appendChild(input);
document.querySelector('input').setAttribute('placeholder', 'Enter your username here');

const button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'Submit';

button.addEventListener('click', () => {

    input.style.display = 'none';
    button.style.display = 'none';
    userName.innerHTML = 'Thank you! :]'

    const userNameDisplay = document.createElement('h3')
    userNameDisplay.innerHTML = 'You have selected "' + input.value + '" as your username.';
    document.body.appendChild(userNameDisplay);
})