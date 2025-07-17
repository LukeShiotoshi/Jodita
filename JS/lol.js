document.addEventListener('DOMContentLoaded', () => {
  // 🧃 Toast flotante
  function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#000';
    toast.style.color = '#fff';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    toast.style.zIndex = '9999';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '500';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  // 💥 Lluvia de emojis con delay aleatorio
  function rainEmojis(emoji = '💥', count = 30, duration = 3000, animationClass = 'animate-emoji-drop') {
    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 2000;
      setTimeout(() => {
        const drop = document.createElement('div');
        drop.textContent = emoji;
        drop.className = `fixed text-3xl pointer-events-none z-50 ${animationClass}`;
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.top = `-50px`;
        document.body.appendChild(drop);
        setTimeout(() => drop.remove(), duration);
      }, delay);
    }
  }

  // 🏃‍♂️ Botón que se escapa
  const runawayBtn = document.querySelector('#runaway-button');
  if (runawayBtn) {
    let escaped = false;
    runawayBtn.addEventListener('mouseenter', () => {
      if (!escaped) {
        runawayBtn.style.transform = `translateX(${Math.random() > 0.5 ? '-40px' : '40px'})`;
        runawayBtn.style.transition = 'transform 0.3s ease';
        escaped = true;
      }
    });
  }

  // 🧘‍♂️ Pensamiento por inactividad
  let idleTimer;
  function resetIdle() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      showToast('¿Estás pensando o simplemente disfrutando el silencio?');
    }, 15000);
  }
  document.addEventListener('mousemove', resetIdle);
  document.addEventListener('keydown', resetIdle);
  resetIdle();

  // 🕺 Emoji que se multiplica
  const dancer = document.querySelector('#emoji-dancer');
  if (dancer) {
    dancer.addEventListener('click', () => {
      for (let i = 0; i < 5; i++) {
        const clone = document.createElement('div');
        clone.textContent = '🕺';
        clone.className = 'fixed text-3xl animate-bounce z-50 pointer-events-none';
        clone.style.left = `${Math.random() * 100}%`;
        clone.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(clone);
        setTimeout(() => clone.remove(), 3000);
      }
    });
  }

  // 😬 Botón que se arrepiente
  const btnHastaAgua = document.querySelector('#regret-button');
  if (btnHastaAgua) {
    btnHastaAgua.addEventListener('click', () => {
      showToast('¿Seguro? Yo no lo haría... pero bueno.');
    });
  }

  // 🐞 / ❌ / 🧉 Inputs con easter eggs
  document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', (e) => {
      const value = e.target.value.toLowerCase();
      if (value.includes('bug')) {
        showToast('El verdadero bug es no divertirse.');
        rainEmojis('🐞', 90, 5000, 'animate-emoji-drop');
      }
      if (value.includes('error')) {
        showToast('Error detectado. Pero tranqui, no es grave. ❌');
        rainEmojis('❌', 90, 5000, 'animate-emoji-drop');
      }
      if (value.includes('truco')) {
        showToast('¿Truco? Esto no es un asado, pero igual te banco.');
        rainEmojis('🧉', 90, 5000, 'animate-emoji-drop');
      }
      if (value.includes('trueno')) {
        showToast('¡Cuidado! Se viene la tormenta. ⚡');
        rainEmojis('⚡', 90, 5000, 'animate-thunder-drop');
      }
    });
  });
});