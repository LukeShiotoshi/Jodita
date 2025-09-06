let prompt = []
const promptnuevo = [
    { name: "Leonardo DiCaprio" },
    { name: "Jennifer Lopez" },
    { name: "Brad Pitt" },
    { name: "Shakira" },
    { name: "Cristiano Ronaldo" },
    { name: "Beyoncé" },
    { name: "Tom Cruise" },
    { name: "Rihanna" },
    { name: "Johnny Depp" },
    { name: "Taylor Swift" },
    { name: "Will Smith" },
    { name: "Ariana Grande" },
    { name: "Angelina Jolie" },
    { name: "Robert Downey Jr." },
    { name: "Kanye West" },
    { name: "Selena Gomez" },
    { name: "Messi" },
    { name: "Serena Williams" },
    { name: "Banksy" },
    { name: "Pablo Picasso" },
    { name: "Leonardo da Vinci" },
    { name: "David Beckham" },
    { name: "Chris Hemsworth" },
    { name: "Eminem" },
    { name: "Lady Gaga" },
    { name: "Usain Bolt" },
    { name: "Billie Eilish" },
    { name: "Dwayne Johnson" },
    { name: "Kylie Jenner" },
    { name: "Adele" },
    { name: "Vincent van Gogh" },
    { name: "Maluma" },
    { name: "Zendaya" },
    { name: "Keanu Reeves" },
    { name: "Gal Gadot" },
    { name: "Drake" },
    { name: "Harry Styles" },
    { name: "Selena Quintanilla" },
    { name: "Lionel Messi" },
    { name: "Roger Federer" },
    { name: "Neymar Jr." },
    { name: "Frida Kahlo" },
    { name: "Claude Monet" },
    { name: "Maradona" },
    { name: "Michael Jordan" },
    { name: "Tom Hanks" },
    { name: "Jennifer Aniston" },
    { name: "Katy Perry" },
    { name: "Chris Evans" },
    { name: "Morgan Freeman" },
    { name: "Snoop Dogg" },
    { name: "David Bowie" },
    { name: "Elon Musk" },
    { name: "Mick Jagger" },
    { name: "Emma Watson" },
    { name: "Vin Diesel" },
    { name: "Nicki Minaj" },
    { name: "Bill Gates" },
    { name: "Oprah Winfrey" },
    { name: "Madonna" },
    { name: "Eddie Murphy" },
    { name: "Joaquin Phoenix" },
    { name: "Galileo Galilei" },
    { name: "Adele Laurie Blue" },
    { name: "Stephen Curry" },
    { name: "Simone Biles" },
    { name: "Travis Scott" },
    { name: "Kendall Jenner" },
    { name: "Bruno Mars" },
    { name: "Salvador Dalí" },
    { name: "Mark Zuckerberg" },
    { name: "Chris Pratt" },
    { name: "Natalie Portman" },
    { name: "Cillian Murphy" },
    { name: "Florence Welch" },
    { name: "George Clooney" },
    { name: "Anya Taylor-Joy" },
    { name: "Tyler, The Creator" },
    { name: "Keira Knightley" },
    { name: "Sergei Rachmaninoff" },
    { name: "Usher Raymond" },
    { name: "Robert Pattinson" },
    { name: "Simone de Beauvoir" },
    { name: "David Tennant" },
    { name: "Zlatan Ibrahimović" },
    { name: "Camila Cabello" },
    { name: "Hugh Jackman" },
    { name: "Gigi Hadid" },
    { name: "Trent Reznor" },
    { name: "Shawn Mendes" },
    { name: "Eva Green" },
    { name: "Tini Stoessel" },
    { name: "Lali Espósito" },
    { name: "Ricky Martin" },
    { name: "Paulo Londra" },
    { name: "Cande Tinelli" },
    { name: "Pampita Ardohain" },
    { name: "Mauro Icardi" },
    { name: "Sofía Reyes" },
    { name: "Mariano Martínez" },
    { name: "Juana Viale" },
    { name: "Diego Boneta" },
    { name: "Chano Moreno Charpentier" },
    { name: "Flor Vigna" },
    { name: "Benjamín Vicuña" },
    { name: "Nathy Peluso" },
    { name: "Cami" },
    { name: "Celeste Cid" },
    { name: "Mía Khalifa" },
    { name: "Ángel de Brito" },
    { name: "Karina La Princesita" },
    { name: "Paulo Dybala" },
    { name: "Jimena Barón" },
    { name: "Lourdes Sánchez" },
    { name: "Fede Bal" },
    { name: "Martín Bossi" },
    { name: "Luciano Castro" },
    { name: "Mariana Genesio" },
    { name: "Soledad Pastorutti" },
    { name: "Federico Bal" },
    { name: "Rusherking" },
    { name: "Khea" },
    { name: "Cande Ruggeri" },
    { name: "Belu Lucius" },
    { name: "Eugenia “La China” Suárez" },
    { name: "Toto Ferro" },
    { name: "Paula Chaves" },
    { name: "Gastón Soffritti" },
    { name: "Jimena Barón" },
    { name: "Juana Repetto" },
    { name: "María Becerra" },
    { name: "Duki" },
    { name: "Bizarrap" },
    { name: "Nicki Nicole" },
    { name: "Cazzu" },
    { name: "Lautaro Martínez" },
    { name: "Ángela Torres" },
    { name: "Rocío Igarzábal" },
    { name: "Fede Bal" },
    { name: "Lucía Galán" },
    { name: "Diego Torres" },
    { name: "Valentin Elizalde" },
    { name: "Mónica Antonópulos" },
    { name: "Sol Pérez" },
    { name: "Federico Molinari" },
    { name: "Gianinna Maradona" },
    { name: "Benjamín Rojas" },
    { name: "Mariano Martínez" },
    { name: "Florencia Peña" },
    { name: "Karina Jelinek" },
    { name: "Luisana Lopilato" },
    { name: "Celeste Cid" },
    { name: "María Becerra" },
    { name: "Duki" },
    { name: "Bizarrap" },
    { name: "Nicki Nicole" },
    { name: "Cazzu" },
    { name: "Lautaro Martínez" },
    { name: "Ángela Torres" },
    { name: "Rocío Igarzábal" },
    { name: "Lucía Galán" },
    { name: "Diego Torres" },
    { name: "Valentín Elizalde" },
    { name: "Mónica Antonópulos" },
    { name: "Sol Pérez" },
    { name: "Federico Molinari" },
    { name: "Gianinna Maradona" },
    { name: "Benjamín Rojas" },
    { name: "Florencia Peña" },
    { name: "Karina Jelinek" },
    { name: "Luisana Lopilato" },
    { name: "Martin Garrix" },
    { name: "El Rubius" },
    { name: "Vegetta777" },
    { name: "Luzu" },
    { name: "Willyrex" },
    { name: "Alexby11" },
    { name: "AuronPlay" },
    { name: "Ibai Llanos" },
    { name: "Rubén Doblas" },
    { name: "Folagor" },
    { name: "Bytar" },
    { name: "Yao Cabrera" },
    { name: "Coscu" },
    { name: "Momo" },
    { name: "JulioProfe" },
    { name: "Caeli" },
    { name: "DrossRotzank" },
    { name: "Luisito Comunica" },
    { name: "Juanpa Zurita" },
    { name: "Fernanfloo" },
    { name: "Kurt Cobain" },
    { name: "Miley Cyrus" },
    { name: "Selena Gomez" },
    { name: "Billie Eilish" },
    { name: "Shawn Mendes" },
    { name: "Camila Cabello" },
    { name: "Halsey" },
    { name: "Demi Lovato" },
    { name: "Ariana Grande" },
    { name: "Ed Sheeran" },
    { name: "Justin Bieber" },
    { name: "Olivia Rodrigo" },
    { name: "Sofía Carson" },
    { name: "Liam Payne" },
    { name: "Niall Horan" },
    { name: "Harry Styles" },
    { name: "Zayn Malik" },
    { name: "Louis Tomlinson" },
    { name: "Maluma" },
    { name: "J Balvin" },
    { name: "Karol G" },
    { name: "Camilo" },
    { name: "Rosalía" },
    { name: "Bad Bunny" },
    { name: "Rauw Alejandro" },
    { name: "Anuel AA" },
    { name: "Ozuna" },
    { name: "Myke Towers" },
    { name: "Farruko" },
    { name: "Tini" },
    { name: "Lali" },
    { name: "Paulo Londra" },
    { name: "Ricky Martin" },
    { name: "Carlos Vives" },
    { name: "Chayanne" },
    { name: "Ricardo Montaner" },
    { name: "Thalía" },
    { name: "Selena Quintanilla" },
    { name: "Anitta" },
    { name: "Pabllo Vittar" },
    { name: "Iggy Azalea" },
    { name: "Cardi B" },
    { name: "Nicki Minaj" },
    { name: "Doja Cat" },
    { name: "Megan Thee Stallion" },
    { name: "Saweetie" },
    { name: "Travis Scott" },
    { name: "Post Malone" },
    { name: "Kendrick Lamar" },
    { name: "Drake" },
    { name: "The Weeknd" },
    { name: "Lil Nas X" },
    { name: "Tyler, The Creator" },
    { name: "Kanye West" },
    { name: "Jay-Z" },
    { name: "Beyoncé" },
    { name: "Rihanna" },
    { name: "Nick Jonas" },
    { name: "Joe Jonas" },
    { name: "Kevin Jonas" },
    { name: "Camila Morrone" },
    { name: "Sofía Reyes" },
    { name: "Cazzu" },
    { name: "Nathy Peluso" },
    { name: "Bizarrap" },
    { name: "Duki" },
    { name: "María Becerra" },
    { name: "Rusherking" },
    { name: "Khea" }
];
function agregarSinRepetir(nuevos, acumulador) {
    nuevos.forEach(p => {
        if (!acumulador.some(a => a.name === p.name)) {
            acumulador.push(p);
        }
    });
}

// Llamada al cargar
agregarSinRepetir(promptnuevo, prompt);
let currentCelebrities = [];
let usedButtonsCount = 0;
let currentRound = 1;

// Iniciar juego
function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    resetRound();
}

// Obtener 3 celebridades aleatorias
function getRandomCelebrities() {
    const shuffled = [...prompt].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

// 1) Estado global: guarda qué acción tiene cada tarjeta
let currentActions = [null, null, null];

// 2) En resetRound() vuelve a inicializarlo
function resetRound() {
  usedButtonsCount = 0;
  currentActions = [null, null, null];
  document.querySelectorAll('.action-btn').forEach(b => b.classList.remove('used'));
  currentCelebrities = getRandomCelebrities();
  renderCelebrities();
  document.getElementById('nextRoundBtn').style.display = 'none';
  document.getElementById('resultText').textContent = 'Arrastra un botón a una celebridad...';
}



// Renderizar celebridades
function renderCelebrities() {
  const container = document.getElementById('celebritiesContainer');
  container.innerHTML = '';

  currentCelebrities.forEach((celebrity, i) => {
    const card = document.createElement('div');
    card.className = 'celebrity-card';
    card.dataset.index = i;

    const nameDiv = document.createElement('div');
    nameDiv.className = 'celebrity-name';
    nameDiv.textContent = celebrity.name;

    const actionDiv = document.createElement('div');
    actionDiv.id = `action-${i}`;
    actionDiv.className = 'celebrity-action';

    card.append(nameDiv, actionDiv);
    container.appendChild(card);
  });

  setupInteractions();  // <-- sólo esta llamada
}

function setupInteractions() {
  const actionButtons = document.querySelectorAll('.action-btn');
  const cards         = document.querySelectorAll('.celebrity-card');
  let dragging        = { action: null, btn: null };

  // ── DESKTOP: HTML5 drag & drop SOLO CON RATÓN ──
  actionButtons.forEach(btn => {
    btn.setAttribute('draggable', 'true');

    btn.addEventListener('dragstart', e => {
      // sólo arrancar drag si viene de mouse
      if (e.pointerType && e.pointerType !== 'mouse') return;
      dragging.action = btn.dataset.action;
      dragging.btn    = btn;
      btn.classList.add('dragging');
    });

    btn.addEventListener('dragend', () => {
      // limpiar estado visual y lógico
      dragging = { action: null, btn: null };
      actionButtons.forEach(b => b.classList.remove('dragging'));
      cards.forEach(c => c.classList.remove('drag-over'));
    });
  });

  cards.forEach(card => {
    card.addEventListener('dragover', e => {
      if (!dragging.action) return;
      e.preventDefault();
      cards.forEach(c => c.classList.remove('drag-over'));
      card.classList.add('drag-over');
    });

    card.addEventListener('drop', e => {
      e.preventDefault();
      const idx = card.dataset.index;
      applyAction(dragging.action, idx, currentCelebrities[idx].name);

      // limpiar hover
      cards.forEach(c => c.classList.remove('drag-over'));
    });
  });


  // ── MÓVIL: pointer events SOLO touch (sin cambios) ──
  actionButtons.forEach(btn => {
    btn.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'touch') return;
      dragging.action = btn.dataset.action;
      dragging.btn    = btn;
      btn.classList.add('dragging');
      btn.setPointerCapture(e.pointerId);
    });
  });

  document.addEventListener('pointermove', e => {
    if (e.pointerType !== 'touch' || !dragging.action) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    cards.forEach(c => c.classList.remove('drag-over'));
    if (el?.classList.contains('celebrity-card')) {
      el.classList.add('drag-over');
    }
  }, { passive: false });

  document.addEventListener('pointerup', e => {
    if (e.pointerType !== 'touch' || !dragging.action) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (el?.classList.contains('celebrity-card')) {
      const idx = el.dataset.index;
      applyAction(dragging.action, idx, currentCelebrities[idx].name);
    }
    actionButtons.forEach(b => b.classList.remove('dragging'));
    cards.forEach(c => c.classList.remove('drag-over'));
    dragging = { action: null, btn: null };
  });

  // ── Fallback click/tap (idéntico al tuyo) ──
  // (mantén aquí tu código de click-to-assign)
}
const gameState = {
  players: [],
  currentPlayerIndex: 0,
  isGameStarted: false
};

function addPlayer() {
  const input = document.getElementById('newPlayer');
  const name = input.value.trim();
  if (!name) return;

  // Si no existe gameState, crealo
  if (!window.gameState) {
    window.gameState = {
      players: [],
      currentPlayerIndex: 0,
      isGameStarted: false
    };
  }

  const exists = gameState.players.some(p => p.name.toLowerCase() === name.toLowerCase());
  if (exists) {
    alert('¡Ese jugador ya está agregado!');
    return;
  }

  gameState.players.push({
    name,
    score: 0,
    completed: 0,
    failed: 0
  });

  input.value = '';
  updatePlayersList?.();
  updatePlayerTurn?.();
}

window.addPlayer = addPlayer;
function updatePlayersList() {
  const container = document.getElementById('playersList');
  container.innerHTML = '';

  gameState.players.forEach((player, index) => {
    const el = document.createElement('div');
    el.className = 'player-card p-3 rounded-lg neon-border';
    el.innerHTML = `
      <div class="font-bold text-center">${player.name}</div>
      <div class="text-sm text-center">Puntos: ${player.score}</div>
      <div class="text-xs text-center">✅ ${player.completed} ❌ ${player.failed}</div>
    `;
    container.appendChild(el);
  });
}

function updatePlayerTurn() {
  const el = document.getElementById('playerTurn');
  const scoreEl = document.getElementById('playerScore');

  if (gameState.players.length > 0 && gameState.isGameStarted) {
    const current = gameState.players[gameState.currentPlayerIndex];
    el.textContent = `Turno de: ${current.name}`;
    scoreEl.textContent = current.score;
  } else {
    el.textContent = 'Esperando jugadores...';
    scoreEl.textContent = '0';
  }
}
  // --- 2) Click/tap para desktop y móviles ---
  actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('used')) return;        // no seleccionar si ya fue usado
      // marcar selección visual
      actionButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedAction = btn.dataset.action;
    });
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (!selectedAction) return;                       // sin acción seleccionada no pasa nada
      const idx = card.dataset.index;
      const name = currentCelebrities[idx].name;
      applyAction(selectedAction, idx, name);
      // limpiar selección
      actionButtons.forEach(b => b.classList.remove('selected'));
      selectedAction = null;
    });
  });



// Aplicar acción a celebridad
function applyAction(action, index, celebrityName) {
  const actionEl = document.getElementById(`action-${index}`);
  const newBtn   = document.querySelector(`[data-action="${action}"]`);
  const prevAct  = currentActions[index];

  // si vuelves a soltar la misma acción en la misma tarjeta → nada que hacer
  if (prevAct === action) return;

  // 3.1) Si esa acción ya estaba en otra tarjeta, la liberamos
  const otherIdx = currentActions.indexOf(action);
  if (otherIdx !== -1) {
    // limpiar UI de la tarjeta previa
    document.getElementById(`action-${otherIdx}`).textContent = '';
    currentActions[otherIdx] = null;
    usedButtonsCount--;
  }

  // 3.2) Si esta tarjeta tenía otra acción, la liberamos
  if (prevAct) {
    const oldBtn = document.querySelector(`[data-action="${prevAct}"]`);
    oldBtn.classList.remove('used');
    usedButtonsCount--;
  }

  // 3.3) Asignamos la nueva acción aquí
  newBtn.classList.add('used');
  currentActions[index] = action;
  usedButtonsCount++;

  // 3.4) Pintamos el icono/texto
  const icons = {
    'besar': '👄 BES*DO/A',
    'coger': '🔥 COG*DO/A',
    'matar': '💀 ASES*NADO/A'
  };
  actionEl.textContent = icons[action];
  actionEl.style.color = 
       action === 'besar' ? '#ff6b6b'
     : action === 'coger' ? '#4834d4'
     : '#3c4d52ff';

  // 3.5) Chequeo de ronda completa
  if (usedButtonsCount === 3) {
    document.getElementById('nextRoundBtn').style.display = 'block';
    document.getElementById('resultText').textContent =
      '¡Ronda completada! Prepárate para la siguiente...';
  } else {
    document.getElementById('resultText').textContent =
      `¡${celebrityName} ha sido ${icons[action].toLowerCase()}!`;
  }
}

// Siguiente ronda
function nextRound() {
    currentRound++;
    resetRound();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    console.log('Juego cargado. Presiona "JUGAR AHORA" para comenzar.');
});