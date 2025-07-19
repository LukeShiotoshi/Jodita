// 🎮 Estado global del juego
const gameState = {
  players: [],
  currentPlayerIndex: 0,
  round: 1,
  maxRounds: 3,
  points: {},
  currentCategory: '',
  anecdotes: []
};

// 🎯 Prompts por categoría
const prompts = {
  intimo: [
    "Una vez me perdí en un lugar desconocido y terminé en una fiesta extraña.",
    "Una vez lloré en público por una película que vi solo.",
    "Una vez me puse a hablar solo en voz alta sin darme cuenta que había gente escuchando.",
    "Una vez dormí con una prenda de alguien que me gustaba solo para sentir que estaba cerca.",
    "Una vez escribí una carta de amor que nunca entregué y todavía la tengo guardada.",
    "Una vez me enamoré de alguien con quien solo hablé una vez en toda mi vida.",
    "Una vez me pasé una semana entera escuchando la misma canción porque me hacía sentir acompañado.",
    "Una vez soñé con alguien desconocido y al día siguiente creí haberlo visto en la calle.",
    "Una vez me quedé despierto toda la noche solo para hablar con alguien que me gustaba.",
    "Una vez fingí estar bien solo para no preocupar a nadie.",
    "Una vez le inventé un nombre a una persona imaginaria solo para sentir que tenía a alguien.",
    "Una vez me saqué una selfie llorando para acordarme cómo se sentía ese momento.",
    "Una vez me senté en la vereda a mirar la luna pensando que alguien más hacía lo mismo.",
    "Una vez guardé una conversación de chat que me hizo sentir querido, y la leo cada tanto.",
    "Una vez me quedé en silencio todo un día porque sentía que si hablaba iba a largarme a llorar.",
    "Una vez me inventé una excusa para abrazar a alguien sin que se notara cuánto lo necesitaba.",
    "Una vez escribí un mensaje muy largo y lo borré antes de enviarlo porque me dio miedo parecer débil.",
    "Una vez me puse perfume solo para sentirme abrazado.",
    "Una vez abracé una almohada pensando que era alguien que ya no estaba.",
    "Una vez fui a un lugar donde sabía que no iba a encontrar a nadie, pero igual esperé.",
    "Una vez me hice el dormido para que alguien me acaricie el pelo sin que se dé cuenta que lo necesitaba.",
    "Una vez deseé con todo que alguien me pregunte si estaba bien, pero nadie lo hizo.",
    "Una vez mentí diciendo que tenía planes solo para poder quedarme solo conmigo mismo.",
    "Una vez me acordé de algo que me dolió y terminé llorando sin saber por qué.",
    "Una vez guardé un objeto sin valor solo porque me recordaba a una persona que extraño.",
    "Una vez me puse triste en una juntada y me fui sin que nadie lo note.",
    "Una vez escuché una canción y sentí que describía exactamente cómo me sentía por dentro.",
    "Una vez fingí reírme solo para no mostrar que estaba al borde de quebrarme.",
    "Una vez me hice una playlist entera con canciones que me hacían sentir entendido.",
    "Una vez me prometí no volver a confiar en alguien y rompí mi promesa sin querer.",
    "Una vez tuve un sueño tan lindo que me desperté triste porque no era real.",
    "Una vez vi una pareja en la calle y me puse a pensar si algún día me iba a pasar a mí.",
    "Una vez abrí el chat de alguien con quien ya no hablo solo para leer lo último que me dijo.",
    "Una vez borré todas mis fotos porque no me gustaba cómo me veía en ninguna.",
    "Una vez sentí que nadie me conocía de verdad, ni siquiera yo mismo.",
    "Una vez pensé en contar algo muy personal y no lo hice porque creí que no iban a entenderme.",
    "Una vez me inventé una historia en la cabeza solo para sentir que mi vida tenía algo de magia.",
    "Una vez me enamoré de alguien que no existía más que en mi imaginación.",
    "Una vez escribí algo muy profundo y lo escondí para que nadie lo lea nunca.",
    "Una vez pensé que estaba bien, hasta que alguien me abrazó y se me cayó todo."
  ],
  vergonzoso: [
    "Una vez me caí en frente de toda la clase durante una presentación.",
    "Una vez envié un mensaje a la persona equivocada y fue muy embarazoso.",
    "Una vez saludé a alguien que no me estaba saludando a mí.",
    "Una vez dije 'te amo' por accidente en una llamada con mi jefe.",
    "Una vez me reí tan fuerte que me salió un sonido raro y todos se dieron vuelta.",
    "Una vez creí que alguien me hablaba a mí y le respondí re emocionado, pero era para otro.",
    "Una vez se me rompió el pantalón justo cuando me agaché enfrente de todo el curso.",
    "Una vez confundí a una persona con otra y le hablé como si la conociera.",
    "Una vez se me escapó un pedo en plena clase silenciosa.",
    "Una vez le conté un chisme a alguien y resultó que era sobre su mejor amigo.",
    "Una vez mostré una foto pensando que era graciosa y tenía algo que no debía verse.",
    "Una vez me reí de un meme y me di cuenta después que lo había subido la persona que me caía mal.",
    "Una vez me olvidé el micrófono abierto en una videollamada y dije algo que no debía.",
    "Una vez me confundí de baño y entré al de mujeres sin darme cuenta.",
    "Una vez se me cayó el celular en el inodoro en la casa de otra persona.",
    "Una vez abrí un mensaje hot en voz alta sin querer, en el colectivo.",
    "Una vez me puse una prenda al revés y nadie me avisó en todo el día.",
    "Una vez hice una historia hablando mal de alguien y me olvidé que lo tenía entre mis mejores amigos.",
    "Una vez canté con los auriculares puestos sin darme cuenta que me escuchaban todos.",
    "Una vez me fui antes de tiempo de una reunión y después me dijeron que había ganado algo.",
    "Una vez me creí una mentira re obvia y la defendí como si fuera un experto.",
    "Una vez se me trabó la voz justo cuando estaba contando algo importante.",
    "Una vez dije un chiste que nadie entendió y se hizo un silencio eterno.",
    "Una vez levanté la mano para responder algo y dije cualquier fruta.",
    "Una vez me sacaron una foto durmiendo en clase con la boca abierta.",
    "Una vez me reí solo por algo que pensé y todos me miraron como si estuviera loco.",
    "Una vez abracé a alguien por atrás creyendo que era un amigo y era un desconocido.",
    "Una vez conté algo íntimo pensando que era gracioso y después me arrepentí mal.",
    "Una vez me confundí de fecha y llegué disfrazado a una fiesta que no era temática.",
    "Una vez usé una frase en inglés sin saber bien qué significaba y todos se rieron."
  ],

  curioso: [
    "Una vez conocí a alguien que tenía el mismo cumpleaños que yo.",
    "Una vez encontré un objeto extraño en la calle y lo guardé.",
    "Una vez soñé algo que después pasó exactamente igual en la vida real.",
    "Una vez un animal me siguió todo el camino a casa sin razón aparente.",
    "Una vez encontré una carta vieja adentro de un libro de la biblioteca.",
    "Una vez alguien me saludó como si me conociera de toda la vida, pero no tenía idea quién era.",
    "Una vez vi una estrella fugaz justo después de pedir un deseo en silencio.",
    "Una vez vi a una persona igual a mí caminando por la calle.",
    "Una vez encontré una llave tirada con una etiqueta que decía 'no abrir jamás'.",
    "Una vez me llamó un número desconocido y me dijo algo que solo yo sabía.",
    "Una vez una app me recomendó una canción que describía exactamente cómo me sentía.",
    "Una vez abrí un cajón viejo y encontré una foto de alguien que nadie en mi casa conocía.",
    "Una vez vi pasar una nube con forma de la misma cosa que estaba pensando.",
    "Una vez entré a una tienda y la música que sonaba era la misma que estaba tarareando.",
    "Una vez me crucé con la misma persona en tres lugares diferentes el mismo día.",
    "Una vez agarré una revista vieja y mi nombre estaba escrito en una hoja, sin explicación.",
    "Una vez soñé con un nombre y al día siguiente lo escuché en una conversación ajena.",
    "Una vez un desconocido me dijo algo que me hizo cambiar de opinión sobre algo importante.",
    "Una vez encontré una lista de cosas por hacer pegada en un banco de plaza.",
    "Una vez me desperté con una melodía en la cabeza y después la escuché en la radio.",
    "Una vez escuché a alguien decir una frase que había leído el día anterior en un libro.",
    "Una vez abrí una caja en la casa de un amigo y tenía adentro cosas que también tenía yo.",
    "Una vez escribí una palabra al azar y resultó tener un significado importante.",
    "Una vez alguien me contó un sueño que yo también había tenido esa misma noche.",
    "Una vez abrí una página al azar de un libro y me respondió una duda existencial.",
    "Una vez un algoritmo me recomendó seguir a una persona que después conocí en la vida real.",
    "Una vez me llegó un mensaje por error y terminé hablando con esa persona durante meses.",
    "Una vez un objeto desapareció de mi mochila y apareció una semana después en otro lugar.",
    "Una vez sentí que algo iba a pasar y a los minutos recibí una noticia inesperada.",
    "Una vez una frase escrita en una pared me hizo cambiar el rumbo ese día."
  ],

  picante: [
    "Una vez tuve una cita que terminó en un lugar inesperado.",
    "Una vez hice algo atrevido que nunca conté a nadie.",
    "Una vez me quedé a dormir en la casa de alguien sin haberlo planeado.",
    "Una vez conocí a alguien por app y a las dos horas ya estábamos en su habitación.",
    "Una vez me saqué una foto que ni yo sabía que me animaría a sacarme.",
    "Una vez estuve a punto de hacerlo en un lugar público y no me importó nada.",
    "Una vez tuve una conversación subida de tono con alguien que recién conocía.",
    "Una vez me animé a mandar una foto sin mostrar la cara… y gustó más de lo que esperaba.",
    "Una vez dije que iba a casa de un amigo, pero era una cita secreta con alguien.",
    "Una vez me escribí con alguien durante semanas solo por tensión sexual y nunca nos vimos.",
    "Una vez me metí a una fiesta donde no conocía a nadie y terminé chapando con un desconocido.",
    "Una vez mandé un mensaje hot por error al grupo equivocado.",
    "Una vez fui a una cita pensando que era tranqui y terminé sin ropa a los 30 minutos.",
    "Una vez me grabé haciendo algo y lo guardé solo para mí.",
    "Una vez me crucé a un ex en un boliche y terminamos reviviendo todo en el baño.",
    "Una vez estuve con dos personas la misma semana sin que ninguna lo supiera.",
    "Una vez me animé a proponer algo raro en la cama y terminó gustando más de lo que esperaba.",
    "Una vez jugué verdad o reto y terminé haciendo algo que pensé que nunca haría.",
    "Una vez conocí a alguien en el transporte público y terminamos teniendo una cita esa misma noche.",
    "Una vez tuve una aventura de una noche y no recuerdo ni su nombre.",
    "Una vez me fui de una juntada solo para pasar la noche con alguien que me escribió 'vení'.",
    "Una vez alguien me dijo algo al oído y me puso tan nervioso que no supe qué contestar.",
    "Una vez me escapé de casa en la madrugada solo para ver a alguien por media hora.",
    "Una vez hice algo con alguien solo por la adrenalina de que casi nos descubran.",
    "Una vez inventé que estaba en pareja solo para ponerle más misterio al encuentro."
  ]
};

// 🎭 ACTO 1 — Agregar jugadores
function addPlayer() {
  const playerNameInput = document.getElementById('player-name');
  const playerName = playerNameInput.value.trim();

  if (playerName && !gameState.players.includes(playerName)) {
    gameState.players.push(playerName);
    gameState.points[playerName] = 0;

    const playerList = document.getElementById('players');
    const li = document.createElement('li');
    li.textContent = playerName;
    playerList.appendChild(li);

    playerNameInput.value = '';

    if (gameState.players.length >= 2) {
      document.getElementById('start-game-btn').disabled = false;
    }
  } else if (!playerName) {
    alert('Por favor ingresa un nombre válido');
  } else {
    alert('Este jugador ya está en la lista');
  }
}

// 🎬 ACTO 2 — Comenzar juego

function startGame() {
  const roundSelect = document.getElementById('round-count');
  const selectedRounds = parseInt(roundSelect.value);

  gameState.maxRounds = selectedRounds * gameState.players.length;

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
  updateGameInfo();
}

// 🔄 ACTO 3 — Actualizar puntajes y ronda
function updateGameInfo() {
  document.getElementById('current-round').textContent = gameState.round;

  const currentPlayerName = gameState.players[gameState.currentPlayerIndex];
  document.getElementById('current-player').textContent = `Turno de: ${currentPlayerName}`;

  updatePointsBoard();
}
function updatePointsBoard() {
  const list = document.getElementById('points-list');
  list.innerHTML = '';
  for (const player of gameState.players) {
    const li = document.createElement('li');
    li.textContent = `${player}: ${gameState.points[player]} puntos`;
    list.appendChild(li);
  }
}

// 🧩 Renderizar fichas visuales
function renderPlayers() {
  const container = document.getElementById('players');
  container.innerHTML = '';
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  gameState.players.forEach(player => {
    const card = document.createElement('div');
    card.className =
      'p-3 rounded-xl border text-white shadow-lg bg-black/40 flex flex-col items-center justify-center transition-all cursor-pointer';
    card.dataset.playerName = player;

    if (player === currentPlayer) {
      card.classList.add('border-fuchsia-400', 'shadow-pinkAura');
    } else {
      card.classList.add('border-neutral-700');
    }

    const name = document.createElement('div');
    name.textContent = player;
    name.className = 'font-bold text-lg mb-1';

    const score = document.createElement('div');
    score.textContent = `${gameState.points[player]} pts`;
    score.className = 'text-teal-300 text-sm';

    // 🥚 Easter Eggs
    card.addEventListener('click', () => {
      const nameLower = player.toLowerCase();
      if (nameLower.includes('truco')) {
        showToast('¿Truco en tu nombre? Sos de los míos 🧉');
        rainEmojis('🧉', 40, 4000, 'animate-emoji-drop');
      }
      if (nameLower.includes('bug')) {
        showToast('¿Bugueado pero feliz? 🐞');
        rainEmojis('🐞', 40, 4000, 'animate-emoji-drop');
      }
      if (nameLower.includes('trueno')) {
        showToast('¡El trueno llegó! ⚡');
        rainEmojis('⚡', 40, 4000, 'animate-thunder-drop');
      }
    });

    card.appendChild(name);
    card.appendChild(score);
    container.appendChild(card);
  });
}

// 🎯 ACTO 4 — Selección de categoría
function selectCategory(category) {
  gameState.currentCategory = category;
  document.getElementById('selected-category').textContent = `Categoría: ${category}`;
  mostrarAnecdotas();
  renderGuessersCheckboxes();

  document.getElementById('category-selection').classList.add('hidden');
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('anecdote-screen').classList.remove('hidden');
}

// 📖 ACTO 5 — Mostrar anécdotas
function mostrarAnecdotas() {
  const container = document.getElementById('anecdote-boxes');
  container.innerHTML = '';

  const falsas = [
    'Me tatué el nombre de un ex y lo oculté con tinta negra.',
    'Mandé un mensaje hot sin querer al grupo familiar.',
  ];

  const posiciones = [0, 1, 2].sort(() => Math.random() - 0.5);

  posiciones.forEach((pos, i) => {
    const box = document.createElement('div');
    box.className =
      'bg-black/30 p-4 rounded-xl border border-fuchsia-400 text-white shadow-pinkAura min-h-[120px] flex items-center justify-center text-center hover:scale-105 transition-transform';

    if (i < 2) {
      box.textContent = falsas.pop();
    } else {
      box.innerHTML = '<span class="italic text-pink-300 animate-pulse">Contá la tuya</span>';
    }

    container.appendChild(box);
  });
}

// 🔍 ACTO 6 — Checkboxes para adivinadores
function renderGuessersCheckboxes() {
  const form = document.getElementById('guessers-form');
  form.innerHTML = '';
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  gameState.players.forEach(player => {
    const label = document.createElement('label');
    label.className =
      'flex items-center gap-2 bg-black/40 p-2 rounded-lg border border-teal-400 shadow-sm hover:bg-black/60 transition-all';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = player;
    checkbox.className = 'form-checkbox accent-teal-400 w-4 h-4';

    if (player === currentPlayer) {
      checkbox.disabled = true;
      label.classList.add('opacity-50', 'cursor-not-allowed');
    }

    const span = document.createElement('span');
    span.textContent = player;

    label.appendChild(checkbox);
    label.appendChild(span);
    form.appendChild(label);
  });
}

// 📬 ACTO 7 — Enviar resultado
function submitGuesses() {
  const checkedBoxes = document.querySelectorAll('#guessers-form input[type="checkbox"]:checked');
  const guessers = Array.from(checkedBoxes).map(cb => cb.value);

  if (guessers.length === 0) {
    const impostor = gameState.players[gameState.currentPlayerIndex];
    gameState.points[impostor] += 1;
  } else {
    guessers.forEach(guesser => {
      if (gameState.players.includes(guesser)) {
        gameState.points[guesser] += 1;
      }
    });
  }

  updatePointsBoard();

  if (gameState.round < gameState.maxRounds) {
    gameState.round++;
    gameState.currentPlayerIndex =
      (gameState.currentPlayerIndex + 1) % gameState.players.length;
    updateGameInfo();
    document.getElementById('anecdote-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('category-selection').classList.remove('hidden');
  } else {
    showResults();
  }
}

// 🏁 ACTO 8 — Mostrar resultados
function showResults() {
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('anecdote-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');

  const resultsDiv = document.getElementById('final-results');
  resultsDiv.innerHTML = '';
  for (const player in gameState.points) {
    const li = document.createElement('li');
    li.textContent = `${player}: ${gameState.points[player]} puntos`;
    resultsDiv.appendChild(li);
  }
}

// 🔄 ACTO 9 — Reiniciar partida
function resetGame() {
  gameState.players = [];
  gameState.currentPlayerIndex = 0;
  gameState.round = 1;
  gameState.points = {};
  gameState.currentCategory = '';
  gameState.anecdotes = [];

  document.getElementById('players').innerHTML = '';
  document.getElementById('player-name').value = '';
  document.getElementById('start-game-btn').disabled = true;

  const form = document.getElementById('guessers-form');
  if (form) form.innerHTML = '';

  document.getElementById('results-screen').classList.add('hidden');
  document.getElementById('anecdote-screen').classList.add('hidden'); // 🧼 También ocultamos anécdotas
  document.getElementById('game-screen').classList.add('hidden');     // 🧼 Por si estaba abierto
  document.getElementById('start-screen').classList.remove('hidden');

  updateGameInfo(); // 🧠 Reinicia estado visual
}

// 🎬 ACTO FINAL — Cargar info al inicio
document.addEventListener('DOMContentLoaded', () => {
  updateGameInfo();
});