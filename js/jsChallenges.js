function challenge1(){
    let element = document.querySelector('#subscribe');
    if (element.checked) {
        document.querySelector('#emailDiv').style.display = 'block';
    } else {
        document.querySelector('#emailDiv').style.display = 'none';
    }
}

let c1 = document.querySelector('#subscribe');
c1.addEventListener('click', challenge1);
