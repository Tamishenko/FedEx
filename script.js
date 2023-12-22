"use strict";

const inputEl = document.getElementById("hero-input");
const spanEl = document.getElementById("hero-span");
const header = document.querySelector("header");

inputEl.addEventListener("focusin", () => {
  spanEl.style.top = "13px";
  spanEl.style.color = "#4d148c";
  spanEl.style.fontSize = "9px";
});

inputEl.addEventListener("focusout", () => {
  spanEl.style.top = "22px";
  spanEl.style.color = "#333";
  spanEl.style.fontSize = "14px";
});

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 30);
});
