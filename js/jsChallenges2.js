function challenge2() {
    let element = document.querySelector('#sameAddress');
    let billing = document.querySelector('#bill');
    let home = document.querySelector('#home')
    if (element.checked) {
        home.value = billing.value;
        home.disabled = true;
    } else {
        home.value = '';
        home.disabled = false;
    }
}
let c2 = document.querySelector('#sameAddress');
c2.addEventListener('click', challenge2);