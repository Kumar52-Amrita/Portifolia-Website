
let x = document.querySelector('.navlink');
let y = document.getElementById('closeNav');
let menubutton = document.getElementById('openNav');

function openNavBar() {
    y.style.display = 'block';
    x.style.display = 'block';
    menubutton.style.display = 'none';
}

function closeNavBar() {
    y.style.display = 'none';
    x.style.display = 'none';
    menubutton.style.display = 'block';
}

