"use strict";

let faqAnswers = document.querySelector(".faq__answers");
if (faqAnswers) {
let faqDesc = document.querySelectorAll(".faq__item-desc");
  faqAnswers.addEventListener("click", getAccordeon);
  function getAccordeon(event) {
    let itemAttr = event.target.dataset.head;
    for (let desc of faqDesc) {
      let descAttr = desc.dataset.desc;
      if (itemAttr === descAttr) {
        desc.classList.toggle("active");
      }
    }
  }
}
