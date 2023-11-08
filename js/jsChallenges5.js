let c5 = document.querySelector('.thumbnail1');
let element = document.querySelector('#display');

function c5in(){
    console.log('in');
}

function c5out(){
    console.log('out');
}

c5.addEventListener('mouseover', c5in);
c5.addEventListener('mouseout', c5out);