document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    // Toggle del menú al hacer clic en el botón
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que el clic se propague al documento
      menu.classList.toggle("hidden");
    });

    // Cierra el menú al hacer clic en cualquier enlace dentro de él
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });

    // Detecta clics fuera del menú y del botón para cerrarlo
    document.addEventListener("click", (e) => {
      const isClickInsideMenu = menu.contains(e.target);
      const isClickOnToggle = toggle.contains(e.target);

      if (!isClickInsideMenu && !isClickOnToggle) {
        menu.classList.add("hidden");
      }
    });
  }
});