const randomNumber = document.querySelector('.rand-num');
const genButton = document.querySelector('.generate');


function generateRandomNumber () {
    const randNum = Math.floor(Math.random() * 10 + 1);
    randomNumber.innerHTML = randNum;
}

genButton.addEventListener('click', generateRandomNumber);