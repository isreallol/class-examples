// 1. Change text of h1
const title = document.getElementById('title');
title.innerText = 'Changed this!!!'

// 2. Change the background color of multiple elements
const boxes = document.getElementsByClassName('box');
console.log(boxes);
Array.from(boxes).forEach(function (box) {
    box.style.backgroundColor = 'red';
});

// 3. hide/show element using querySelector
const button = document.querySelector('.hide');
button.style.display = 'none';