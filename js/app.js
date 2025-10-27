// Tema claro/oscuro con persistencia
(function () {
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  if (stored === "dark") document.body.classList.add("theme-dark");

  function updateIcon() {
    if (!toggle) return;
    const icon = toggle.querySelector("i");
    if (!icon) return;
    if (document.body.classList.contains("theme-dark")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }

  updateIcon();
  toggle &&
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("theme-dark");
      const mode = document.body.classList.contains("theme-dark")
        ? "dark"
        : "light";
      localStorage.setItem("theme", mode);
      updateIcon();
    });
})();

// Desplazamiento suave para anclas internas (solo en index)
(function () {
  const links = document.querySelectorAll(
    'a[href^="index.html#"], a[href^="#"]'
  );
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href) return;
      if (href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
})();

// Filtros de adopción
(function () {
  const contenedor = document.querySelector(".container_cards");
  if (!contenedor) return; // no estamos en adopcion
  const cards = Array.from(contenedor.querySelectorAll(".card"));
  const selMascota = document.getElementById("filtro-mascota");
  const selEdad = document.getElementById("filtro-edad");
  const selTamano = document.getElementById("filtro-tamano");

  function normalizar(v) {
    return (v || "").toLowerCase();
  }

  function aplicaFiltros() {
    const especie = normalizar(selMascota && selMascota.value);
    const edad = normalizar(selEdad && selEdad.value);
    const tam = normalizar(selTamano && selTamano.value);

    cards.forEach((card) => {
      const cEspecie = normalizar(card.dataset.especie);
      const cEdad = normalizar(card.dataset.edad);
      const cTam = normalizar(card.dataset.tamano);

      const pasaEspecie =
        !especie || especie === "ambos" || cEspecie === especie;
      const pasaEdad = !edad || edad === "todosaños" || cEdad === edad;
      const pasaTam = !tam || tam === "todostamaños" || cTam === tam;

      card.style.display = pasaEspecie && pasaEdad && pasaTam ? "" : "none";
    });
  }

  [selMascota, selEdad, selTamano].forEach((sel) => {
    sel && sel.addEventListener("change", aplicaFiltros);
  });
})();

// Validación básica de formularios
(function () {
  const form = document.querySelector("form");
  if (!form) return;
  const isRegister = !!document.getElementById("confirmPassword");

  form.setAttribute("novalidate", "true");
  form.addEventListener("submit", (e) => {
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]#password');
    const confirm = form.querySelector("#confirmPassword");
    let ok = true;

    if (email) {
      const re = /[^@\s]+@[^@\s]+\.[^@\s]+/;
      if (!re.test(email.value)) {
        email.setCustomValidity("Ingresa un email válido.");
        ok = false;
      } else {
        email.setCustomValidity("");
      }
    }

    if (password && password.value.length < 6) {
      password.setCustomValidity(
        "La contraseña debe tener al menos 6 caracteres."
      );
      ok = false;
    } else if (password) {
      password.setCustomValidity("");
    }

    if (isRegister && confirm) {
      if (confirm.value !== password.value) {
        confirm.setCustomValidity("Las contraseñas no coinciden.");
        ok = false;
      } else {
        confirm.setCustomValidity("");
      }
    }

    if (!ok) {
      e.preventDefault();
      form.reportValidity();
    }
  });
})();
