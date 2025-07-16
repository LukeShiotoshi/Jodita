document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const originalItems = document.querySelectorAll('.carousel-item');
    const itemCount = originalItems.length;

    // Clonamos el último y lo ponemos al principio
    const firstClone = originalItems[0].cloneNode(true);
    const lastClone = originalItems[itemCount - 1].cloneNode(true);

    carousel.insertBefore(lastClone, carousel.firstChild);
    carousel.appendChild(firstClone);

    const items = carousel.querySelectorAll('.carousel-item');

    let currentIndex = 1; // Arranca en 1 porque el primer clon está en 0

    // Estilos básicos
    carousel.style.display = 'flex';
    carousel.style.transition = 'transform 0.5s';
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    items.forEach(item => {
        item.style.minWidth = '100%';
        item.style.boxSizing = 'border-box';
    });

    // Función para actualizar la posición del carrusel con animación
    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s';
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Mover al siguiente ítem
    function nextItem() {
        if (currentIndex >= itemCount + 1) return;
        currentIndex++;
        updateCarousel();
    }

    // Mover al ítem anterior
    function prevItem() {
        if (currentIndex <= 0) return;
        currentIndex--;
        updateCarousel();
    }

    // Botones
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);

    // Resetear posición cuando se llega a un clon (loop infinito)
    carousel.addEventListener('transitionend', () => {
        if (currentIndex === itemCount + 1) {
            carousel.style.transition = 'none';
            currentIndex = 1;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        if (currentIndex === 0) {
            carousel.style.transition = 'none';
            currentIndex = itemCount;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    // Swipe táctil para mobile
    let startX = 0;
    let endX = 0;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', () => {
        const diffX = startX - endX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextItem();
            } else {
                prevItem();
            }
        }
    });

    // Auto avance cada 25 segundos (opcional)
    let interval = setInterval(nextItem, 25000);
    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', () => {
        interval = setInterval(nextItem, 25000);
    });

    // Efectos hover dinámicos para tarjetas (si los usás)
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-10px)';
        });
    });
});
