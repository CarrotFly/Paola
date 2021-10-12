let menu = document.getElementById("main-menu")
let button = document.getElementById("main-menu-btn")
button.addEventListener("click",()=>{
    menu.classList.toggle("active");
    if(menu.className.includes("active"))
    {
        button.src = "img/simbolo-x.png";
    }
    else{
        button.src = "img/lista.png";
    }
});