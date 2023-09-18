function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth",
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (
        entry.target.classList.contains("Unibar") ||
        entry.target.classList.contains("Corusebar")
      )
        entry.target.classList.add("show-to-right");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              entry.target.classList.contains("Unibar") ||
              entry.target.classList.contains("Corusebar")
            )
              entry.target.classList.add("show-to-right");
          }
        });
      });

      if (
        entry.target.classList.contains("fabLabBar") ||
        entry.target.classList.contains("gamingLabBar")
      ) {
        entry.target.classList.add("slide-from-left");
      }
      if (entry.target.classList.contains("text")) {
        const paragraphs = entry.target.querySelectorAll("p");
        paragraphs.forEach((p) => p.classList.add("fadeText"));
      }
    } else {
      entry.target.classList.remove("slide-from-left");
      entry.target.classList.remove("show-to-right");
      if (entry.target.classList.contains("text")) {
        const paragraphs = entry.target.querySelectorAll("p");
        paragraphs.forEach((p) => p.classList.remove("fadeText"));
      }
    }
  });
});

const HiddenElements = document.querySelectorAll(".barEle");
HiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".cir").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 450;
    var y = (e.clientY * moving_value) / 450;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
const paragraphs = document.querySelectorAll(".Hover_effect");

paragraphs.forEach((paragraph) => {
  const text = paragraph.textContent;
  const letters = text.split("");
  paragraph.innerHTML = letters
    .map((letter) => {
      if (letter === " ") {
        return `<span>&nbsp;</span>`;
      } else {
        return `<span>${letter}</span>`;
      }
    })
    .join("");
});

const darkModeToggler = document.querySelector(".darkModeToggler");

darkModeToggler.addEventListener("change", () => {
  if (darkModeToggler.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.documentElement.style.setProperty(
    "--primary-Light-color",
    "#1c1c1c"
  );
  document.documentElement.style.setProperty("--second-light-color", "#2f2f2f");
  document.documentElement.style.setProperty("--third-light-color", "#464646");
  document.documentElement.style.setProperty("--forth-light-color", "#656565");
  document.documentElement.style.setProperty("--primary-dark-color", "#ffffff");
  document.documentElement.style.setProperty("--second-dark-color", "#d8d8d8");
  document.documentElement.style.setProperty("--third-dark-color", "#cecece");
  document.documentElement.style.setProperty("--forth-dark-color", "#b4b4b4");
  document.documentElement.style.setProperty("--fifth-dark-color", "#b5b5b5");
  document.documentElement.style.setProperty("--sixth-dark-color", "#cdcdcd");
  const logo = document.querySelector(".logoImg");
  logo.style.filter = "invert(100%)";
}

function disableDarkMode() {
  document.documentElement.style.setProperty("--primary-Light-color", "#FFF");
  document.documentElement.style.setProperty("--second-light-color", "#e4e4e4");
  document.documentElement.style.setProperty("--third-light-color", "#c9c9c9");
  document.documentElement.style.setProperty("--forth-light-color", "#bfbfbf");
  document.documentElement.style.setProperty("--primary-dark-color", "#000");
  document.documentElement.style.setProperty("--second-dark-color", "#808080");
  document.documentElement.style.setProperty("--third-dark-color", "#5f5e5e");
  document.documentElement.style.setProperty("--forth-dark-color", "#4b4a4a");
  document.documentElement.style.setProperty("--fifth-dark-color", "#343333");
  document.documentElement.style.setProperty("--sixth-dark-color", "#211f1f");
  const logo = document.querySelector(".logoImg");
  logo.style.filter = "invert(0%)";
}
