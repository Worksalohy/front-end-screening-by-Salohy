const image = document.querySelector("#menu");
const menuActive = document.querySelector("#menu-active");
const menuContainer = document.querySelector("#menu-container");
const closeButton = document.querySelector("#close");
const home = document.querySelector('#home-caption');
const homeIcon = document.querySelector('#home-icon');
const fram559 = document.querySelector('#fram-559');
const heading  = document.querySelector('#heading');

image.addEventListener('click', ()=>{
    menuActive.style.display = "block";
    menuContainer.style.display = "block";
    heading.style.height = '38px';
});

closeButton.addEventListener('click', ()=>{
    menuActive.style.display = "none";
    menuContainer.style.display = "none";
    heading.style.height = '54.62px';
});

home.addEventListener('click', ()=>{
    menuActive.style.display = "none";
    menuContainer.style.display = "none";
});

homeIcon.addEventListener('click', ()=>{
    menuActive.style.display = "none";
    menuContainer.style.display = "none";
})