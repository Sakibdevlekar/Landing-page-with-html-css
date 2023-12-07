const menuBtn = document.querySelector(".ri-menu-line");
const closeBtn = document.querySelector(".ri-close-line");
const nav = document.querySelector(".resp-nav");

menuBtn.addEventListener("click",()=>{
    console.log('cliked');
    nav.style.right = "0%";
});

closeBtn.addEventListener("click",()=>{
    nav.style.right = "-100%";
});