const image = document.querySelector("#menu");
const menuActive = document.querySelector("#menu-active");
const menuContainer = document.querySelector("#menu-container");
const closeButton = document.querySelector("#close");
const home = document.querySelector('#home-caption');
const homeIcon = document.querySelector('#home-icon');

image.addEventListener('click', ()=>{
    menuActive.style.display = "block";
    menuContainer.style.display = "block";
});

closeButton.addEventListener('click', ()=>{
    menuActive.style.display = "none";
    menuContainer.style.display = "none";
});

home.addEventListener('click', ()=>{
    menuActive.style.display = "none";
    menuContainer.style.display = "none";
});

homeIcon.addEventListener('click', ()=>{
    menuActive.style.display = "none";
    menuContainer.style.display = "none";
})