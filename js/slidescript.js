// Javascript Image Slide
const slide=document.querySelector(('slide');
const slideimages=document.querySelectorAll(('slide img');

//Buttons
const prevbtn=document.querySelector('#prev');
const nextbtn=document.querySelector('#next');

//counter
let counter = 1;
const size = slideimages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listener
nextbtn.addEventListener ('click',() =>{
	if (couter >= slideimages.length - 1)return;
slide.style.transition = 'transform 0.4s ease-in-out';	
counter++;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

prevbtn.addEventListener ('click',() =>{
	if (couter <=0)return;
slide.style.transition = 'transform 0.4s ease-in-out';	
counter--;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

slide.addEventListener('transitionend', ()=>{
	if (slideimages[counter].id ==='last-img'){
		slide.style.transition = 'none';
		counter=slideimages.length -2;
		slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (slideimages[counter].id ==='first-img'){
		slide.style.transition = 'none';
		counter = slideimages.length - counter;
		slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	});
