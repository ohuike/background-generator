var css = document.querySelector('h3');
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var body = document.getElementById('gradient');
var random = document.querySelector('button');



function changeColor(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
    
};

function randomize() {
	color1.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16); 
	color2.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
	changeColor(); 
    }

color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);
document.addEventListener("DOMContentLoaded", changeColor);
random.addEventListener('click', randomize);



