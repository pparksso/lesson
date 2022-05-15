new Swiper(".swiper", {
  effect: "fade", //slide, fade, cube, coverflow, card
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: "#mainVisual .next",
    prevEl: "#mainVisual .prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: true,
  },
});

new Swiper("#swiper", {
  effect: "fade", //slide, fade, cube, coverflow, card
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: "#news .next",
    prevEl: "#newx .prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const medicine = document.querySelector("#medicine");
const trading = document.querySelector("#trading");
const tradeTitle = document.querySelector("#business .tradeTitle");
const medicineTitle = document.querySelector("#business .medicineTitle");

tradeTitle.addEventListener("click", function () {
  medicine.classList.add("off");
  medicine.classList.remove("on"), trading.classList.add("on"), trading.classList.remove("off");
});
medicineTitle.addEventListener("click", function () {
  medicine.classList.add("on"), medicine.classList.remove("off"), trading.classList.add("off"), trading.classList.remove("on");
});

const listOpen = document.querySelector(".selectList");
const bar = document.querySelector("selectBar");

bar.addEventListener("click", function () {
  listOpen.classList.add("open"), bar.classList.add("open");
});

const richwood = document.querySelector(".richwood");
const info = document.querySelector(".info");

richwood.addEventListener("click", function () {
  info.classList.add("infoOpen");
});
