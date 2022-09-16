//*Tarih
let datetime = document.getElementById('datetime')

let time = new Date();
let day = time.getDate();
let month = time.getMonth() + 1;
let year = time.getFullYear();

let dateresult = `${month}.${day}.${year}`;

datetime.innerText = dateresult;

// Animation 3d
VanillaTilt.init(document.querySelector(".progif"), {
    max: 10,
    speed: 100,
});

VanillaTilt.init(document.querySelectorAll(".pjcard"), {
    max: 3,
    speed: 100,
});


//* Services gif animation
let uxui = document.getElementById('uxui');
let react = document.getElementById('react');
let js = document.getElementById('js');
let css = document.getElementById('css');
let html = document.getElementById('html');

let service_body = document.getElementById('service_body');
service_body.style.backgroundSize = 'contain';

uxui.addEventListener('mouseover',()=>{
    service_body.style.backgroundImage = 'url("assets/gif2.gif")';
});

uxui.addEventListener('mouseleave',()=>{
    service_body.style.backgroundImage = 'none';
});

react.addEventListener('mouseover',()=>{
    service_body.style.backgroundImage = 'url("assets/gif3.gif")';
    
});

react.addEventListener('mouseleave',()=>{
    service_body.style.backgroundImage = 'none';
});


js.addEventListener('mouseover',()=>{
    service_body.style.backgroundImage = 'url("assets/gif4.gif")';
    
});

js.addEventListener('mouseleave',()=>{
    service_body.style.backgroundImage = 'none';
});


css.addEventListener('mouseover',()=>{
    service_body.style.backgroundImage = 'url("assets/gif5.gif")';
    
});

css.addEventListener('mouseleave',()=>{
    service_body.style.backgroundImage = 'none';
});

html.addEventListener('mouseover',()=>{
    service_body.style.backgroundImage = 'url("assets/gif6.gif")';
    
});

html.addEventListener('mouseleave',()=>{
    service_body.style.backgroundImage = 'none';
});


//* card hover gif
let cardtop = document.getElementById('cardtop');
let cardtop2 = document.getElementById('cardtop2');


cardtop.addEventListener('mouseover',()=>{
    cardtop.style.backgroundImage = 'url("assets/FERRARI.gif")';
    
});

cardtop.addEventListener('mouseleave',()=>{
    cardtop.style.backgroundImage = "";
});

cardtop2.addEventListener('mouseover',()=>{
    cardtop2.style.backgroundImage = 'url("assets/Whatsapp.gif")';
    
});

cardtop2.addEventListener('mouseleave',()=>{
    cardtop2.style.backgroundImage = "";
});









