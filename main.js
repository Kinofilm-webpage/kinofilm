console.log("JavaScript was succesfully enabled");

const overlay_menu = document.querySelector(".overlay_menu");
const nav_mobile = document.querySelector(".nav_mobile");
const nav = document.querySelector(".nav");

const menu_button = document.querySelector(".menu");

overlay_menu.addEventListener("click", ()=>{
    nav_mobile.classList.remove("appear");
    overlay_menu.classList.remove("appear");
});

menu_button.addEventListener("click", ()=>{
    nav_mobile.classList.add("appear");
    overlay_menu.classList.add("appear");
});

// const cursorLight = document.getElementById("cursor_effect");
// let mouseX = 0, mouseY = 0;

// document.addEventListener("mousemove", (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// function animateLight() {
//     cursorLight.style.left = `${mouseX}px`;
//     cursorLight.style.top = `${mouseY}px`;
//     requestAnimationFrame(animateLight);
// }

// animateLight();

const arrowUp = document.querySelector('.arrow_up');

window.addEventListener('scroll', () => { 
    if (window.scrollY > 200) {
        arrowUp.classList.add('show');
    } else {
        arrowUp.classList.remove('show');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 25){
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".movie_scroll");

    items.forEach((item) => {
        item.addEventListener("mouseover", () => {
        item.classList.add("active");
        items.forEach((el) => {
            el.style.animationPlayState = "paused";
        });
        });

        item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
        items.forEach((el) => {
            el.style.animationPlayState = "running";
        });
        });
    });
});

// Link for the movies

document.querySelectorAll(".movie").forEach((item) => {
  item.addEventListener("click", () => {
    const link = item.dataset.link;
    if (link) {
      window.location.href = link;
    }
  });
});

document.querySelectorAll(".movie_scroll").forEach((item) => {
  item.addEventListener("click", () => {
    const link = item.dataset.link;
    if (link) {
      window.location.href = link;
    }
  });
});
