const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');



.addEventListener("click", klic );
yellow.addEventListener("click", klic );
green.addEventListener("click", klic );




function klic () {
   
red.addEventListener('click', redColor);
red.addEventListener('click', yellowColor);
red.addEventListener('click', greenColor)
}



function redColor() {
    red.style.background = ('red');
    red.removeEventListener('click', redColor);
    red.addEventListener('click', yellowColor);
 
}

function yellowColor() {
 
    red.style.background = ('yellow');
    red.removeEventListener('click', yellowColor);
    red.addEventListener('click', greenColor);
 
}

function greenColor() {
    red.style.background = ('green');
    red.removeEventListener('click', greenColor);
    red.addEventListener('click', redColor);

}









