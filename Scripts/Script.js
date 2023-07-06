const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('Unibar') || entry.target.classList.contains('Corusebar')) {
       entry.target.classList.add('show-to-right');
        }

      if (entry.target.classList.contains('fabLabBar') || entry.target.classList.contains('gamingLabBar')) {
        entry.target.classList.add('slide-from-left');
        }
        if (entry.target.classList.contains('text')) {
        const paragraphs = entry.target.querySelectorAll('p');
        paragraphs.forEach((p) => p.classList.add('fadeText'));
      }
    }
    else
    {
      entry.target.classList.remove('slide-from-left');
      entry.target.classList.remove('show-to-right');
      if (entry.target.classList.contains('text')) {
        const paragraphs = entry.target.querySelectorAll('p');
        paragraphs.forEach((p) => p.classList.remove('fadeText'));
      }
    }
  });
});


const HiddenElements = document.querySelectorAll('.barEle');
HiddenElements.forEach((el) => observer.observe(el));

  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    document.querySelectorAll(".cir").forEach(function (move) {

      var moving_value = move.getAttribute("data-value");
      var x = e.clientX * moving_value / 450;
      var y = e.clientY * moving_value / 450;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }
  const paragraphs = document.querySelectorAll('.Hover_effect');

  paragraphs.forEach(paragraph => {
    const text = paragraph.textContent;
    const letters = text.split('');
    paragraph.innerHTML = letters.map(letter => {
      if (letter === " ") {
        return `<span>&nbsp;</span>`;
      } else {
        return `<span>${letter}</span>`;
      }
    }).join('');
  });
