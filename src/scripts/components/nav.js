const subnav = document.getElementById("subnav");
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    open.classList.add("close");
    close.classList.add("open");
    subnav.classList.add("open");
});

close.addEventListener("click", () => {
    subnav.classList.remove("open");
    close.classList.remove("open");
    open.classList.remove("close");
});