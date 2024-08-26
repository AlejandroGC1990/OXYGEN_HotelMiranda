const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const nav = document.querySelector(".nav");

open.addEventListener("click", () => {
    nav.classList.add("open");
});

close.addEventListener("click", () => {
    nav.classList.remove("open");
});
// open.addEventListener("click", () => {
//     menu.classList.add("open");
//     open.classList.add("close");
//     close.classList.remove("close");
// });

// close.addEventListener("click", () => {
//     menu.classList.remove("open");
//     open.classList.remove("close");
//     close.classList.add("close");
// });