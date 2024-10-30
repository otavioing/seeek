function a() {
   if (coracao0.src.includes("img/heart.svg")) {
       coracao0.src = "img/heartpre.svg";
   } else if (coracao0.src.includes("img/heartpre.svg")) {
       coracao0.src = "img/heart.svg";
   }
}
function b() {
   if (coracao1.src.includes("img/heart.svg")) {
       coracao1.src = "img/heartpre.svg";
   } else if (coracao1.src.includes("img/heartpre.svg")) {
       coracao1.src = "img/heart.svg";
   }
}
function c() {
   if (coracao2.src.includes("img/heart.svg")) {
       coracao2.src = "img/heartpre.svg";
   } else if (coracao2.src.includes("img/heartpre.svg")) {
       coracao2.src = "img/heart.svg";
   }
}
function d() {
   if (coracao3.src.includes("img/heart.svg")) {
       coracao3.src = "img/heartpre.svg";
   } else if (coracao3.src.includes("img/heartpre.svg")) {
       coracao3.src = "img/heart.svg";
   }
}
function e() {
   if (coracao4.src.includes("img/heart.svg")) {
       coracao4.src = "img/heartpre.svg";
   } else if (coracao4.src.includes("img/heartpre.svg")) {
       coracao4.src = "img/heart.svg";
   }
}
function f() {
   if (coracao5.src.includes("img/heart.svg")) {
       coracao5.src = "img/heartpre.svg";
   } else if (coracao5.src.includes("img/heartpre.svg")) {
       coracao5.src = "img/heart.svg";
   }
}

const btnScrollTop = document.querySelector(".btn-scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnScrollTop.classList.add("show-btn-scroll-top");
  } else {
    btnScrollTop.classList.remove("show-btn-scroll-top");
  }
});

btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

