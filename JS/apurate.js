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
    "¡Tenés para nombrar 3 cervezas!",
    "¡Nombra 5 actores famosos!",
    "¡Choca la mano a todos los jugadores!",
    "¡Encontrá una cuchara lo más rápido posible!",
    "¡Canta el estribillo de tu canción favorita!",
    "¡Imita a un animal durante!",
    "¡Di el alfabeto al revés!",
    "¡Haz 10 flexiones de brazos!",
    "¡Nombra 5 capitales del mundo!",
    "¡Haz un baile divertido durante!",
    "¡En nombra 4 películas románticas!",
    "¡Imita la risa más contagiosa que conoces!",
    "¡Di tu comida favorita al revés!",
    "¡Sostén un libro en la cabeza y da 3 pasos sin que se caiga!",
    "¡Haz 5 sentadillas!",
    "¡Baila salsa durante!",
    "¡Habla con acento extranjero!",
    "¡Encuentra un bolígrafo y dibújate!",
    "¡Nombra 10 colores!",
    "¡Construye una torre con vasos de plástico!",
    "¡Mantén cara de sorpresa durante!",
    "¡Cuenta una broma y ríete al final!",
    "¡Imita el sonido de un coche!",
    "¡Nombra 3 canciones que empiecen con la letra 'S'!",
    "¡Haz el saludo militar!",
    "¡Canta tu jingle publicitario favorito!",
    "¡Balbucea palabras sin sentido!",
    "¡En, menciona 3 emojis!",
    "¡Imita a tu personaje de serie favorito!",
    "¡Salta en un pie 8 veces!",
    "¡Cuenta hasta 20 de tres en tres!",
    "¡Haz el sonido de un animal y que el grupo lo adivine!",
    "¡Encuentra una llave en tu bolsillo!",
    "¡Nombra 5 países que empiecen con 'A'!",
    "¡Mantén cara de enfado durante!",
    "¡Camina de puntillas!",
    "¡Nombra 4 frutas y baila con cada inicial!",
    "¡Imita la voz de Mickey Mouse!",
    "¡Haz un mini monólogo de sobre café!",
    "¡Cuenta un recuerdo de infancia!",
    "¡Imita un rap!",
    "¡Di 'supercalifragilisticoespialidoso' tres veces rápido!",
    "¡Haz 3 toques de cabeza con la barbilla!",
    "¡Nombra 5 estilos de baile!",
    "¡Haz la ola con las manos desde tu asiento!",
    "¡Baila hula-hoop imaginario!",
    "¡Salta y da una vuelta completa!",
    "¡Imita un robot oxidado!",
    "¡Sostén la respiración!",
    "¡Di tu nombre completo al revés!",
    "¡Haz el sonido de una trompeta!",
    "¡Dibuja tu plato favorito en el aire con el dedo!",
    "¡Canta Feliz Cumpleaños!",
    "¡Nombra 3 monumentos famosos!",
    "¡Haz 10 saltos de tijera!",
    "¡Encuentra un objeto rojo!",
    "¡Di el abecedario al revés sin equivocarte!",
    "¡Haz un corazón con las manos y sosténlo!",
    "¡Cuenta una verdad embarazosa!",
    "¡Imita el canto de un pájaro!",
    "¡Ponte de cuclillas y suéltate un grito de victoria!",
    "¡Nombra 6 animales!",
    "¡Imita un televisor apagándose!",
    "¡Haz 5 toques de dedo en el suelo y vuelve!",
    "¡Di tu apodo!",
    "¡Canta las primeras 5 notas de tu canción favorita!",
    "¡Nombra 4 elementos de la tabla periódica!",
    "¡Haz una pose de superhéroe y manténla!",
    "¡Encuentra un sticker o etiqueta y muéstralo rápido!",
    "¡Imita a un presentador de noticias!",
    "¡Di yo nunca y añade algo loco que hayas hecho!",
    "¡Haz 5 palmadas por encima de la cabeza rápidamente!",
    "¡Imita el sonido de una campana y hazla sonar con la voz!",
    "¡Nombra 3 tipos de nubes!",
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
    document.getElementById('new-phrase-btn')?.addEventListener('click', () => {
        nextprompt();
    });
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


    // DOM Elements
    const timerElement = document.getElementById('timer');
    const playerTurnElement = document.getElementById('playerTurn');
    const playerScoreElement = document.getElementById('playerScore');
    const currentRoundElement = document.getElementById('currentRound');
    const promptTextElement = document.getElementById('promptText');
    const playersListElement = document.getElementById('playersList');
    const progressCircle = document.querySelector('.progress-ring__circle');
    const rulesCard = document.getElementById('rulesCard');
    const challengCard = document.getElementById('challengCard');
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
        gameState.prompts = promptnuevo;
        if (gameState.players.length < 2) {
            alert('¡Necesitas al menos 2 jugadores para empezar!');
            return;
        }

        if (rulesCard) {
            rulesCard.classList.add('fade-out');
        } else {
            console.warn('Elemento #rulesCard no encontrado');
        }


        setTimeout(() => {
            rulesCard.classList.add('hidden');
            challengeCard.classList.remove('hidden');
            challengeCard.classList.add('fade-in');

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
        if (!gameState.isPromptActive) return;

        clearInterval(gameState.timer);

        const swipeClass = direction === 'left' ? 'swipe-left' : 'swipe-right';
        const success = direction === 'right';

        gameCard.classList.add(swipeClass);
        setTimeout(() => {
            handlepromptResult(success);
            gameCard.classList.remove(swipeClass);
        }, 300);
    }

    // Next prompt
    function nextprompt() {
        const challengeText = document.getElementById('challengeText');
        const display = document.getElementById('current-phrase');
        const timerMessage = document.getElementById('timerMessage');

        if (!challengeText || !display) {
            console.warn('❌ Elementos de texto no encontrados');
            return;
        }

        // Si ya no quedan prompts, recargamos el pool
        if (prompt.length === 0) {
            agregarSinRepetir(promptnuevo, prompt);
            console.log('✅ Pool recargado');
        }
        const btnGanar = document.getElementById('btnGanar');
        btnGanar.disabled = false;
        btnGanar.classList.remove('opacity-50', 'cursor-not-allowed');
        // Sacamos uno al azar y lo eliminamos del acumulador
        const idx = Math.floor(Math.random() * prompt.length);
        const texto = prompt.splice(idx, 1)[0];

        // Mostrar en pantalla
        display.textContent = texto;
        challengeText.textContent = '¡Desafío!';
        timerMessage.textContent = '';
        console.log('Prompt mostrado:', texto, '| Restan:', prompt.length);

        // Actualizar ronda
        gameState.totalRounds++;
        currentRoundElement.textContent = gameState.totalRounds;

        // Activar timer
        startTimer();
    }
    function startTimer() {
        clearInterval(gameState.timer);
        gameState.timeLeft = 8;
        gameState.isPromptActive = true;

        const timerFill = document.getElementById('timerFill');
        const timerMessage = document.getElementById('timerMessage');

        timerMessage.textContent = '';
        timerFill.style.width = '100%';

        let elapsed = 0;
        const total = 8;

        gameState.timer = setInterval(() => {
            elapsed++;
            gameState.timeLeft = total - elapsed;
            const percent = Math.max(0, ((total - elapsed) / total) * 100);
            timerFill.style.width = `${percent}%`;
            if (percent <= 25) {
                timerFill.classList.add('bg-red-600');
            } else {
                timerFill.classList.remove('bg-red-600');
            }
            if (gameState.timeLeft <= 0) {
                clearInterval(gameState.timer);
                gameState.isPromptActive = false;

                const timerMessage = document.getElementById('timerMessage');
                const btnGanar = document.getElementById('btnGanar');

                timerMessage.textContent = '⏱ Tiempo acabado, perdiste';
                timerMessage.classList.add('text-red-500');

                btnGanar.disabled = true;
                btnGanar.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }, 1000);
    }
    function mostrarBotonContinuar() {
        const continuarBtn = document.createElement('button');
        continuarBtn.textContent = '➡️ Continuar';
        continuarBtn.className = 'mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold neon-border hover:scale-105 transition-transform';
        continuarBtn.id = 'continuarBtn';

        continuarBtn.addEventListener('click', () => {
            handlepromptResult(false); // ahora sí avanza
            continuarBtn.remove();
        });

        document.getElementById('challengeCard').appendChild(continuarBtn);
        if (!document.getElementById('continuarBtn')) {
            document.getElementById('challengeCard').appendChild(continuarBtn);
        }
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
    // Activar botón y Enter para agregar jugador
    const input = document.getElementById('newPlayer');
    const button = document.getElementById('addPlayerBtn');

    input?.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            addPlayer();
        }
    });

    button?.addEventListener('click', () => {
        addPlayer();
    });

    window.addPlayer = addPlayer;
    Object.assign(window, {
        addPlayer,
        handleSwipeAction,
        startGameFromRules
    });
});
