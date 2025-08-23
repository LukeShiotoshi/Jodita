// Game state
const gameState = {
    players: [],
    currentPlayerIndex: 0,
    currentpromptIndex: -1,
    isGameStarted: false,
    isRulesCardActive: true,
    timer: null,
    timeLeft: 15,
    totalRounds: 0,
};
let prompt = [];
const promptnuevo = [
    "¡Tenés 7 segundos para nombrar 3 cervezas!",
    "¡Nombra 5 actores famosos!",
    "¡Choca la mano a todos los jugadores!",
    "¡Encontrá una cuchara lo más rápido posible!",
    "¡Canta el estribillo de tu canción favorita!",
    "¡Imita a un animal durante 5 segundos!",
    "¡Di el alfabeto al revés!",
    "¡Haz 10 flexiones de brazos!",
    "¡Nombra 5 capitales del mundo!",
    "¡Haz un baile divertido durante 10 segundos!",
    "¡En 5 segundos nombra 4 películas románticas!",
    "¡Imita la risa más contagiosa que conoces!",
    "¡Di tu comida favorita al revés en 3 segundos!",
    "¡Sostén un libro en la cabeza y da 3 pasos sin que se caiga!",
    "¡Haz 5 sentadillas en 5 segundos!",
    "¡Baila salsa durante 7 segundos!",
    "¡Habla con acento extranjero por 10 segundos!",
    "¡Encuentra un bolígrafo y dibújate en 10 segundos!",
    "¡Nombra 10 colores en 10 segundos!",
    "¡Construye una torre con vasos de plástico en 15 segundos!",
    "¡Mantén cara de sorpresa durante 10 segundos!",
    "¡Cuenta una broma y ríete al final!",
    "¡Imita el sonido de un coche por 5 segundos!",
    "¡Nombra 3 canciones que empiecen con la letra 'S'!",
    "¡Haz el saludo militar en 3 segundos!",
    "¡Canta tu jingle publicitario favorito!",
    "¡Balbucea palabras sin sentido por 10 segundos!",
    "¡En 7 segundos, menciona 3 emojis!",
    "¡Imita a tu personaje de serie favorito!",
    "¡Salta en un pie 8 veces!",
    "¡Cuenta hasta 20 de tres en tres!",
    "¡Haz el sonido de un animal y que el grupo lo adivine!",
    "¡Encuentra una llave en tu bolsillo en 5 segundos!",
    "¡Nombra 5 países que empiecen con 'A'!",
    "¡Mantén cara de enfado durante 5 segundos!",
    "¡Camina de puntillas por 5 segundos!",
    "¡Nombra 4 frutas y baila con cada inicial!",
    "¡Imita la voz de Mickey Mouse!",
    "¡Haz un mini monólogo de 15 segundos sobre café!",
    "¡Cuenta un recuerdo de infancia en 10 segundos!",
    "¡Imita un rap en 7 segundos!",
    "¡Di 'supercalifragilisticoespialidoso' tres veces rápido!",
    "¡Haz 3 toques de cabeza con la barbilla!",
    "¡Nombra 5 estilos de baile en 10 segundos!",
    "¡Haz la ola con las manos desde tu asiento!",
    "¡Baila hula-hoop imaginario por 10 segundos!",
    "¡Salta y da una vuelta completa!",
    "¡Imita un robot oxidado por 7 segundos!",
    "¡Sostén la respiración 10 segundos!",
    "¡Di tu nombre completo al revés!",
    "¡Haz el sonido de una trompeta!",
    "¡Dibuja tu plato favorito en el aire con el dedo!",
    "¡Canta Feliz Cumpleaños en 5 segundos!",
    "¡Nombra 3 monumentos famosos en 7 segundos!",
    "¡Haz 10 saltos de tijera en 5 segundos!",
    "¡Encuentra un objeto rojo en 5 segundos!",
    "¡Di el abecedario al revés sin equivocarte!",
    "¡Haz un corazón con las manos y sosténlo 5 segundos!",
    "¡Cuenta una verdad embarazosa en 10 segundos!",
    "¡Imita el canto de un pájaro por 5 segundos!",
    "¡Ponte de cuclillas y suéltate un grito de victoria!",
    "¡Nombra 6 animales en 6 segundos!",
    "¡Imita un televisor apagándose por 5 segundos!",
    "¡Haz 5 toques de dedo en el suelo y vuelve!",
    "¡Di tu apodo en 3 segundos!",
    "¡Canta las primeras 5 notas de tu canción favorita!",
    "¡Nombra 4 elementos de la tabla periódica en 10 segundos!",
    "¡Haz una pose de superhéroe y manténla 7 segundos!",
    "¡Encuentra un sticker o etiqueta y muéstralo rápido!",
    "¡Imita a un presentador de noticias por 10 segundos!",
    "¡Di yo nunca y añade algo loco que hayas hecho!",
    "¡Haz 5 palmadas por encima de la cabeza rápidamente!",
    "¡Imita el sonido de una campana y hazla sonar con la voz!",
    "¡Nombra 3 tipos de nubes en 7 segundos!",
];
document.addEventListener('DOMContentLoaded', () => {
// 2. Función para agregar ítems sin duplicar
function agregarSinRepetir(nuevos, acumulador) {
    nuevos.forEach(p => {
        if (!acumulador.includes(p)) {
            acumulador.push(p);
        }
    });
}

// 3. Al iniciar el juego, cargamos todos los prompts  

    // Llenar prompt por primera vez
    agregarSinRepetir(promptnuevo, prompt);

    // Ejemplo: botón que saca un prompt del pool y lo muestra
    const btn = document.getElementById('new-phrase-btn');
    const display = document.getElementById('current-phrase');

    btn.addEventListener('click', () => {
        // Si ya no quedan prompts, recargamos el pool
        if (prompt.length === 0) {
            agregarSinRepetir(promptnuevo, prompt);
            console.log('✅ Pool recargado');
        }

        // Sacamos uno al azar y lo eliminamos del acumulador
        const idx = Math.floor(Math.random() * prompt.length);
        const texto = prompt.splice(idx, 1)[0];

        // Mostrar en pantalla
        display.textContent = texto;
        console.log('Prompt mostrado:', texto, '| Restan:', prompt.length);
    });
});

// DOM Elements
const timerElement = document.getElementById('timer');
const playerTurnElement = document.getElementById('playerTurn');
const playerScoreElement = document.getElementById('playerScore');
const currentRoundElement = document.getElementById('currentRound');
const promptTextElement = document.getElementById('promptText');
const playersListElement = document.getElementById('playersList');
const progressCircle = document.querySelector('.progress-ring__circle');
const rulesCard = document.getElementById('rulesCard');
const promptCard = document.getElementById('promptCard');
const gameCard = document.getElementById('gameCard');

// Initialize game
function initGame() {
    updatePlayersList();
    updatePlayerTurn();
}

// Show players section
function showPlayers() {
    const section = document.getElementById('playersSection');
    section.scrollIntoView({ behavior: 'smooth' });
}

// Add new player
function addPlayer() {
    const input = document.getElementById('newPlayer');
    const name = input.value.trim();

    if (name && !gameState.players.some(player => player.name.toLowerCase() === name.toLowerCase())) {
        gameState.players.push({
            name: name,
            score: 0,
            completed: 0,
            failed: 0
        });

        input.value = '';
        updatePlayersList();
        updatePlayerTurn();
    } else if (name) {
        alert('¡Ya existe un jugador con ese nombre!');
    }
}

// Update players list
function updatePlayersList() {
    playersListElement.innerHTML = '';

    if (gameState.players.length === 0) {
        playersListElement.innerHTML = `
                    <div class="col-span-2 text-center py-8 text-gray-400">
                        <i class="fas fa-users text-4xl mb-2"></i>
                        <p>Agrega jugadores para comenzar</p>
                    </div>
                `;
        return;
    }

    gameState.players.forEach((player, index) => {
        const playerEl = document.createElement('div');
        playerEl.className = `player-card p-3 rounded-lg neon-border ${index === gameState.currentPlayerIndex && gameState.isGameStarted ? 'active' : 'bg-black/50'}`;
        playerEl.style.color = index === gameState.currentPlayerIndex && gameState.isGameStarted ? 'var(--neon-blue)' : 'white';
        playerEl.innerHTML = `
                    <div class="font-bold text-center">${player.name}</div>
                    <div class="text-sm text-center">Puntos: ${player.score}</div>
                    <div class="text-xs text-center">✅ ${player.completed} ❌ ${player.failed}</div>
                `;
        playersListElement.appendChild(playerEl);
    });
}

// Start game from rules card
function startGameFromRules() {
    if (gameState.players.length < 2) {
        alert('¡Necesitas al menos 2 jugadores para empezar!');
        return;
    }

    // Animate rules card out
    rulesCard.classList.add('fade-out');

    setTimeout(() => {
        rulesCard.classList.add('hidden');
        promptCard.classList.remove('hidden');
        promptCard.classList.add('fade-in');

        gameState.isGameStarted = true;
        gameState.isRulesCardActive = false;
        gameState.currentPlayerIndex = 0;
        gameState.currentpromptIndex = -1;
        gameState.totalRounds = 0;

        // Reset all player scores
        gameState.players.forEach(player => {
            player.score = 0;
            player.completed = 0;
            player.failed = 0;
        });

        nextprompt();
        updatePlayerTurn();
        updatePlayersList();
    }, 500);
}

// Handle swipe action (left or right)
function handleSwipeAction(direction) {
    if (gameState.isRulesCardActive) {
        // If rules card is active, start the game regardless of swipe direction
        startGameFromRules();
        return;
    }

    if (!gameState.isGameStarted) {
        alert('¡El juego no ha comenzado! Agrega jugadores y presiona "Comenzar Juego"');
        return;
    }

    clearInterval(gameState.timer);

    if (direction === 'left') {
        gameCard.classList.add('swipe-left');
        setTimeout(() => {
            handlepromptResult(false);
            gameCard.classList.remove('swipe-left');
        }, 300);
    } else {
        gameCard.classList.add('swipe-right');
        setTimeout(() => {
            handlepromptResult(true);
            gameCard.classList.remove('swipe-right');
        }, 300);
    }
}

// Next prompt
function nextprompt() {
    if (!gameState.isGameStarted) return;

    gameState.currentpromptIndex = (gameState.currentpromptIndex + 1) % gameState.prompts.length;
    gameState.totalRounds++;
    promptTextElement.textContent = gameState.prompts[gameState.currentpromptIndex];
    currentRoundElement.textContent = gameState.totalRounds;

    startTimer();
}

// Start timer
function startTimer() {
    clearInterval(gameState.timer);
    gameState.timeLeft = 15;
    timerElement.textContent = gameState.timeLeft;
    timerElement.classList.remove('timer-critical');

    // Update progress ring
    const circumference = 283;
    progressCircle.style.strokeDashoffset = circumference;

    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        timerElement.textContent = gameState.timeLeft;

        // Update progress ring
        const offset = circumference - (gameState.timeLeft / 15) * circumference;
        progressCircle.style.strokeDashoffset = offset;

        if (gameState.timeLeft <= 5) {
            timerElement.classList.add('timer-critical');
        }

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            // Time's up - auto fail
            gameCard.classList.add('swipe-left');

            setTimeout(() => {
                handlepromptResult(false);
                gameCard.classList.remove('swipe-left');
            }, 300);
        }
    }, 1000);
}

// Handle prompt result
function handlepromptResult(success) {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];

    if (success) {
        currentPlayer.score += 1;
        currentPlayer.completed += 1;
    } else {
        currentPlayer.score = Math.max(0, currentPlayer.score - 1);
        currentPlayer.failed += 1;
    }

    // Next player
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    updatePlayerTurn();
    updatePlayersList();

    // Small delay before next prompt
    setTimeout(nextprompt, 1000);
}

// Update player turn display
function updatePlayerTurn() {
    if (gameState.players.length > 0 && gameState.isGameStarted) {
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        playerTurnElement.textContent = `Turno de: ${currentPlayer.name}`;
        playerScoreElement.textContent = currentPlayer.score;
    } else if (gameState.players.length > 0) {
        playerTurnElement.textContent = `Listo para jugar - ${gameState.players.length} jugadores`;
    } else {
        playerTurnElement.textContent = 'Agrega jugadores para comenzar';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initGame);

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

gameCard.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

gameCard.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleTouchSwipe();
});

function handleTouchSwipe() {
    if (gameState.isRulesCardActive) {
        // If rules card is active, start game on any swipe
        startGameFromRules();
        return;
    }

    if (!gameState.isGameStarted) return;

    if (touchEndX < touchStartX - 50) {
        handleSwipeAction('left');
    } else if (touchEndX > touchStartX + 50) {
        handleSwipeAction('right');
    }
}
