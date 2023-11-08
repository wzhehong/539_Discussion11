let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let element = document.querySelector('#display');

function c5in(){
    element.innerHTML = img1.alt;
    element.style.backgroundImage = "url('"+img1.src+"')";
    console.log('in');
}

function c5out(){
    element.innerHTML = 'Hover over an image below to display the image and the alt text.';
    element.style.background = '#6E3DFF';
    element.style.backgroundImage = url('');
    console.log('out');
}

img1.addEventListener('mouseover', c5in);
img1.addEventListener('mouseout', c5out);