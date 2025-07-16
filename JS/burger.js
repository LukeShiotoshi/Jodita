document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }
});