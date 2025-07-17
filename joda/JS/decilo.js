document.addEventListener('DOMContentLoaded', function () {
    const startGameBtn = document.getElementById('start-game');
    const playerNamesInput = document.getElementById('player-names');
    const playerCount = document.getElementById('player-count');
    const decreaseBtn = document.getElementById('decrease-players');
    const increaseBtn = document.getElementById('increase-players');
    const setupForm = document.getElementById('setup-form');
    const challengeContainer = document.getElementById('challenge-container');
    const restartGameBtn = document.getElementById('restart-game');
    const input = document.getElementById('player-names');
    const msg = document.getElementById('tilin-msg');
    const audio = document.getElementById('tilin-audio');

    let tilinActivado = false;

    input.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();

        if ((value.includes('tilín') || value.includes('tilin')) && !tilinActivado) {
            tilinActivado = true;

            // Mostrar mensaje
            msg.classList.remove('hidden');

            // Reproducir audio
            audio.play();
            audio.loop = false;
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0; // Reinicia el audio para que esté listo si se vuelve a activar
            }, 8000);


            // Vibración
            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200]);
            }

            // Confeti 🎊
            import('https://cdn.skypack.dev/canvas-confetti').then((confetti) => {
                confetti.default({
                    particleCount: 1000,
                    spread: 700,
                    origin: { y: 0.4 },
                    colors: ['#ff00cc', '#00ffff', '#ffff00'],
                });
            });

            // Ocultar mensaje después de 4 segundos
            setTimeout(() => {
                msg.classList.add('hidden');
            }, 4000);
        }

        // Resetear si se borra "tilín"
        if (!value.includes('tilín') && !value.includes('tilin')) {
            tilinActivado = false;
        }
    });


    // Local challenges for each category
    const challenges = {
        'hot-dares': [
            "Lame el cuello de la persona que elijas.",
            "Mandá un mensaje hot a alguien del grupo (ellos eligen a quién).",
            "Sacate una prenda (menos ropa interior).",
            "Simulá un orgasmo frente al grupo.",
            "Contá tu experiencia sexual más rara.",
            "Elegí a alguien y tocá su abdomen por 10 segundos.",
            "Decí en voz alta tu historial de búsquedas más hot.",
            "Mandá un audio sexy diciendo lo primero que se te venga a la cabeza.",
            "Describí tu posición sexual favorita sin decir su nombre.",
            "Mandá un mensaje con doble sentido al último contacto que tengas en WhatsApp.",
            "Tocá la pierna de alguien por debajo de la mesa por un minuto.",
            "Decí en voz alta algo que te caliente mucho.",
            "Chupá un dedo ajeno durante 5 segundos.",
            "Bailá reggaetón lento con alguien del grupo.",
            "Decí con quién tendrías una noche sin compromiso, acá y ahora.",
            "Recreá una escena hot de una serie o película."
        ],

        'drinking-dares': [
            "Tomá un trago con los ojos cerrados y sin manos.",
            "Elegí a dos personas para hacer fondo blanco con vos.",
            "Hacete un trago improvisado con lo que haya en la mesa.",
            "Jugá piedra papel o tijera: el que pierde, toma tres.",
            "Tirá un dado: si sacás número par, tomás doble.",
            "Elegí a alguien para que tome en tu lugar y respondé una pregunta por ellos.",
            "Imitá a alguien del grupo mientras tomás.",
            "Decí algo ridículo y brindá por eso.",
            "Tomá mientras hacés una declaración dramática.",
            "Hacé fondo blanco sin fruncir la cara.",
            "Hacé un brindis mencionando tres cosas random y tomá.",
            "Intercambiá vaso con alguien y tomá sin chistar.",
            "Elegí un objeto y brindá por él como si fuera tu ídolo.",
            "Tomá con el codo apoyado en la frente.",
            "Jugá piedra papel o tijera con alguien: el que pierde, toma el doble.",
            "Poné una canción y tomá cada vez que digan una palabra específica."],

        'uncomfortable-truths': [
            "¿Quién te cae peor del grupo?",
            "¿Qué pensaste la primera vez que viste a tu crush?",
            "¿Alguna vez hablaste mal de alguien de acá?",
            "¿Preferís gustarle a todos o a nadie?",
            "¿Qué parte de tu cuerpo te da vergüenza?",
            "¿A quién nunca invitarías de nuevo a una joda?",
            "¿Qué mentira dijiste últimamente y aún no confesaste?",
            "¿Quién es el más falso del grupo?",
            "¿A quién te chaparías solo por curiosidad?",
            "¿Qué parte de vos te cuesta aceptar?",
            "¿Alguna vez saboteaste a un amigo sin que se entere?",
            "¿Qué secreto sabés de alguien acá y nunca contaste?",
            "¿Alguna vez fuiste infiel o estuviste con alguien que lo fue?",
            "¿Qué fue lo más raro que stalkaste en redes?",
            "¿A quién del grupo bloquearías por una semana y por qué?",
            "¿Preferís quedar mal con todos o traicionar a un amigo cercano?"
        ],

        'intimate-truths': [
            "¿Te enamoraste alguna vez de alguien que no te dio bola?",
            "¿Qué tipo de mensajes te calientan más?",
            "¿Con cuántas personas chapaste?",
            "¿Tenés una playlist para momentos íntimos?",
            "¿Alguna vez lloraste por amor sin que nadie se entere?",
            "¿Qué parte del cuerpo te gusta que te toquen más?",
            "¿Preferís sexo con amor o sin compromiso?",
            "¿Cuál fue tu primera fantasía sexual?",
            "¿Tenés una fantasía que nunca contaste a nadie?",
            "¿Con quién tuviste el mejor beso de tu vida?",
            "¿Qué detalle te vuelve loco/a cuando alguien te gusta?",
            "¿Alguna vez te enganchaste con alguien que sabías que no te convenía?",
            "¿Te quedaste con ganas de algo después de una relación?",
            "¿Preferís mil caricias o una sola mirada que diga todo?",
            "¿Te gusta que te dominen o dominar?",
            "¿Cuál fue el momento más íntimo que tuviste sin que haya contacto físico?"
        ]

    };

    function updateStartButtonState() {
        const hasPlayers = playerNamesInput.value.trim() !== '' || parseInt(playerCount.value) >= 2;
        const hasCategories = document.querySelectorAll('.category-btn.active').length > 0;
        startGameBtn.disabled = !(hasPlayers && hasCategories);
    }

    playerNamesInput.addEventListener('input', updateStartButtonState);

    decreaseBtn.addEventListener('click', function () {
        if (playerCount.value > 2) {
            playerCount.value = parseInt(playerCount.value) - 1;
            updateStartButtonState();
        }
    });

    increaseBtn.addEventListener('click', function () {
        if (playerCount.value < 20) {
            playerCount.value = parseInt(playerCount.value) + 1;
            updateStartButtonState();
        }
    });

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            updateStartButtonState();
        });
    });

    updateStartButtonState();

    const buttonsContainer = document.getElementById('buttons-container');
    const loadingText = document.getElementById('loading-text');
    const challengeCompletedBtn = document.getElementById('challenge-completed');
    const challengeFailedBtn = document.getElementById('challenge-failed');
    challengeCompletedBtn.addEventListener('click', () => {
        challengeCompletedBtn.disabled = true;
        challengeFailedBtn.disabled = true;
        nextTurn(1);
    });

    challengeFailedBtn.addEventListener('click', () => {
        challengeCompletedBtn.disabled = true;
        challengeFailedBtn.disabled = true;
        nextTurn(-1);
    });

    const turnInfo = document.getElementById('turn-info');
    const challengeCategory = document.getElementById('challenge-category');
    const challengeText = document.getElementById('challenge-text');

    let players = ['Ana', 'Juan', 'Pedro'];
    let currentPlayerIndex = 0;
    let selectedCategories = ['hot-dares', 'drinking-dares']; // ejemplo
    let playerScores = [];
    let globalScore = 0;

    function initializeScores() {
        playerScores = new Array(players.length).fill(0);
        globalScore = 0;
        renderScores();
    }

    function renderScores() {
        const scoresDiv = document.getElementById('players-scores');
        scoresDiv.innerHTML = players.map((player, i) =>
            `<div>${player}: ${playerScores[i]}</div>`
        ).join('');
        document.getElementById('global-score').textContent = `Puntaje total: ${globalScore}`;
    }


    function addPointToPlayer(playerIndex) {
        playerScores[playerIndex]++;
        globalScore++;
        renderScores();
    }

    function removePointFromPlayer(playerIndex) {
        playerScores[playerIndex]--;
        globalScore--;
        renderScores();
    }

    function getNextChallenge() {
        turnInfo.textContent = `Turno de: ${players[currentPlayerIndex]}`;

        const cat = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
        const challenge = challenges[cat][Math.floor(Math.random() * challenges[cat].length)];

        let categoryLabel = '', categoryClass = '';
        switch (cat) {
            case "hot-dares":
                categoryLabel = 'Reto Picante';
                categoryClass = 'hot-dare';
                break;
            case "drinking-dares":
                categoryLabel = 'Reto para Beber';
                categoryClass = 'drink-dare';
                break;
            case "uncomfortable-truths":
                categoryLabel = 'Verdad Incómoda';
                categoryClass = 'uncomfortable-truth';
                break;
            case "intimate-truths":
                categoryLabel = 'Verdad Íntima';
                categoryClass = 'intimate-truth';
                break;
        }

        // Primero ocultás los botones y mostrás "Pensando..."
        buttonsContainer.classList.add('hidden');
        loadingText.classList.remove('hidden');

        setTimeout(() => {
            challengeCategory.textContent = categoryLabel;
            challengeCategory.className = 'category-label text-white ' + categoryClass;
            challengeText.textContent = challenge;

            // Mostrás botones y ocultás el texto
            buttonsContainer.classList.remove('hidden');
            loadingText.classList.add('hidden');

            // Asegurarte que los botones están habilitados
            challengeCompletedBtn.disabled = false;
            challengeFailedBtn.disabled = false;
        }, 500);
    }

    function nextTurn(pointsToAdd) {
        // Sumás o restás puntos según si cumplió o no  
        if (pointsToAdd > 0) addPointToPlayer(currentPlayerIndex);
        else removePointFromPlayer(currentPlayerIndex);

        // Cambiás de jugador
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

        getNextChallenge();
    }

    startGameBtn.addEventListener('click', () => {
        // Leer nombres o cantidad de jugadores
        if (playerNamesInput.value.trim() !== '') {
            players = playerNamesInput.value.split(',').map(name => name.trim()).filter(name => name !== '');
        } else {
            players = Array.from({ length: parseInt(playerCount.value) }, (_, i) => `Jugador ${i + 1}`);
        }

        // Leer categorías activas
        selectedCategories = [];
        document.querySelectorAll('.category-btn.active').forEach(btn => {
            selectedCategories.push(btn.dataset.category);
        });

        if (players.length < 2 || selectedCategories.length === 0) {
            alert('Tenés que poner al menos 2 jugadores y seleccionar alguna categoría');
            return;
        }

        // Ocultás setup, mostrás juego
        setupForm.classList.add('hidden');
        challengeContainer.classList.remove('hidden');

        currentPlayerIndex = 0;
        initializeScores();
        getNextChallenge();
    });

});