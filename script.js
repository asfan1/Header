let body = document.querySelector("body");
let nav = document.querySelector("nav");
let modeToggle = document.querySelector(".dark-light");
let searchToggle = document.querySelector(".searchToggle");
let sidebarOpen = document.querySelector(".siderbarOpen");
let siderbarClose = document.querySelector(".siderbarClose");


 modeToggle.addEventListener("click" , ()=>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    nav.classList.toggle("dark")
});

searchToggle.addEventListener("click" , ()=>{
    searchToggle.classList.toggle("active");
});


sidebarOpen.addEventListener("click" , ()=>{
    nav.classList.add("active");
});

document.querySelector(".bx-menu").addEventListener("click" , () =>{
    document.querySelector(".nav-links").classList.toggle("active")
});






