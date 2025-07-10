// script.js

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const carouselContainer = document.querySelector('.carousel-container');

  // Create navigation dots
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    if (idx === 0) dot.classList.add('active');
    dot.dataset.index = idx;
    nav.appendChild(dot);
  });
  carouselContainer.appendChild(nav);

  const dots = Array.from(nav.children);

  // Clone first and last slides for infinite loop
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);
  
  let index = 1;           // start at real first slide
  let isMoving = false;
  let autoplayInterval;

  const slideWidth = () => track.querySelector('.carousel-slide').getBoundingClientRect().width;
  const setPosition = () => {
    track.style.transform = `translateX(-${slideWidth() * index}px)`;
  };

  // Initialize position
  setPosition();

  // Move to target index
  function moveTo(newIndex) {
    if (isMoving) return;
    isMoving = true;
    index = newIndex;
    track.style.transition = 'transform 0.5s ease';
    setPosition();
  }

  // After transition, handle clones
  track.addEventListener('transitionend', () => {
    isMoving = false;
    track.style.transition = 'none';
    if (index === 0) {
      // jumped to clone of last
      index = slides.length;
      setPosition();
    }
    if (index === slides.length + 1) {
      // jumped to clone of first
      index = 1;
      setPosition();
    }
    updateDots();
  });

  // Update active dot
  function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    const activeDot = dots[(index - 1) % slides.length];
    if (activeDot) activeDot.classList.add('active');
  }

  // Prev/Next handlers
  prevButton.addEventListener('click', () => moveTo(index - 1));
  nextButton.addEventListener('click', () => moveTo(index + 1));

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = Number(dot.dataset.index) + 1;
      moveTo(target);
    });
  });

  // Autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(() => moveTo(index + 1), 4000);
  }
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  carouselContainer.addEventListener('mouseenter', stopAutoplay);
  carouselContainer.addEventListener('mouseleave', startAutoplay);

  // Responsive: recalc on resize
  window.addEventListener('resize', () => {
    track.style.transition = 'none';
    setPosition();
  });

  // Kick off autoplay
  startAutoplay();
});
