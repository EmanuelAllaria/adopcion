const historias = document.querySelectorAll(".noticia");
let currentIndex = 0;

function showIndex(idx) {
  historias.forEach((el, i) => {
    if (i === idx) {
      el.classList.add("noticia_visible");
    } else {
      el.classList.remove("noticia_visible");
    }
  });
}

function slideNoticia() {
  if (!historias || historias.length === 0) return;
  currentIndex = (currentIndex + 1) % historias.length;
  showIndex(currentIndex);
}

// Inicializa mostrando la primera
if (historias && historias.length) {
  showIndex(0);
  setInterval(slideNoticia, 3500);
}
