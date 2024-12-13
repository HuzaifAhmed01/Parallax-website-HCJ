var text = document.getElementById('text');
var bird1 = document.getElementById('bird1');
var bird2 = document.getElementById('bird2');
var forest = document.getElementById('forest');
var rocks = document.getElementById('rocks');
var water = document.getElementById('water');
var btn = document.getElementById('btn');

window.addEventListener("scroll",function(){

let value = window.scrollY;

text.style.top = 30 + value *-0.5 +'%';
// text.style.transition = "4s"
bird1.style.top = value *-1.5+'px';

bird1.style.left = value *2+'px';
bird2.style.top = value *-1.5+'px';
bird2.style.left = value *-5+'px';
btn.style.marginTop = value*1.5+'px';
rocks.style.top = value*0.3+'px';
forest.style.top = value*0.3+'px';

})