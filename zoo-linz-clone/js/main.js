const CAROUSELSLIDE = document.querySelector(".carousel-slide");
const CAROUSELIMAGE = document.querySelectorAll(".carousel-slide img");

//Buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//Counter
let counter = 1;
const SIZE = CAROUSELIMAGE[0].clientWidth;

CAROUSELSLIDE.style.transform = "translateX(" + (-SIZE * counter) + "px)";

//Button Listener
nextBtn.addEventListener("click", () => {
    console.log("clicked");
    if (counter >= CAROUSELIMAGE.length - 1) return;
    CAROUSELSLIDE.style.transition = "transform 0.4s ease-in-out";
    counter++;
    CAROUSELSLIDE.style.transform = "translateX(" + (-SIZE * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
    console.log("clicked");
    if (counter <= 0) return;
    CAROUSELSLIDE.style.transition = "transform 0.4s ease-in-out";
    counter--;
    CAROUSELSLIDE.style.transform = "translateX(" + (-SIZE * counter) + "px)";
});

CAROUSELSLIDE.addEventListener("transitionend", () => {
    if (CAROUSELIMAGE[counter].id === "lastClone") {
        CAROUSELSLIDE.style.transition = "none";
        counter = CAROUSELIMAGE.length - 2;
        CAROUSELSLIDE.style.transform =
            "translateX(" + (-SIZE * counter) + "px)";
    }
    if (CAROUSELIMAGE[counter].id === "firstClone") {
        CAROUSELSLIDE.style.transition = "none";
        counter = CAROUSELIMAGE.length - counter;
        CAROUSELSLIDE.style.transform =
            "translateX(" + (-SIZE * counter) + "px)";
    }
});