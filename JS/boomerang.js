let players = [];
let currentPlayerIndex = 0;
let currentQuestion = '';
let gameStarted = false;
let questionDrawn = false;
let boomerangActive = false;

let prompt = [];
const promptnuevo = [
"¿Alguna vez estuviste con alguien que no deberías?",
"¿Qué es lo más turbio que buscaste en internet?",
"¿Quién fue la última persona por la que lloraste?",
"¿Cuál es el peor insulto que dijiste en una pelea?",
"¿Qué cosa harías si supieras que no habría consecuencias?",
"¿Cuál es tu recuerdo más doloroso?",
"¿Alguna vez mentiste sobre a quién amabas?",
"¿Qué secreto familiar nunca contaste?",
"¿Quién fue la última persona que te rechazó?",
"¿Qué es lo que más te acompleja físicamente?",
"¿Alguna vez fuiste infiel aunque sea emocionalmente?",
"¿Qué es lo más feo que pensaste de un amigo en secreto?",
"¿Cuál es tu mayor miedo en las relaciones?",
"¿Qué es lo más raro que soñaste eróticamente?",
"¿Con quién tuviste la peor química en la cama?",
"¿Qué es lo que más te cuesta admitir de vos mismo?",
"¿Cuál es tu recuerdo más vergonzoso del colegio?",
"¿Alguna vez tuviste envidia de un amigo cercano?",
"¿Qué mentira repetís seguido para zafar?",
"¿Qué es lo más tóxico que hiciste en una relación?",
"¿Quién es la persona que menos querés ver hoy?",
"¿Qué secreto tuyo se sabría si revisaran tu celular?",
"¿Cuál fue tu mayor cagada en la universidad?",
"¿Qué es lo que nunca dirías delante de tus viejos?",
"¿Qué pensaste la última vez que viste a tu ex?",
"¿Cuál es el deseo más oscuro que nunca dijiste?",
"¿Qué es lo más patético que hiciste por alguien?",
"¿Alguna vez hablaste mal de alguien solo para quedar bien?",
"¿Qué es lo que más te cuesta olvidar de tu pasado?",
"¿Alguna vez fantaseaste con alguien que no deberías?",
"¿Qué es lo más vergonzoso que guardás en tu celular?",
"¿Quién es la persona con la que tuviste peor sexo?",
"¿Qué secreto creés que si se supiera arruinaría tu reputación?",
"¿Qué es lo más cruel que le dijiste a alguien?",
"¿Alguna vez estuviste con alguien solo por no estar solo?",
"¿Qué es lo más raro que te excita?",
"¿Cuál fue la última mentira que le dijiste a tu mejor amigo?",
"¿Qué cosa hiciste borracho que te da vergüenza recordar?",
"¿Alguna vez le sacaste algo a alguien de confianza sin decirle?",
"¿Qué cosa íntima te da miedo que se sepa?",
"¿Quién es la última persona que stalkeaste?",
"¿Qué es lo que más odiás de vos mismo?",
"¿Qué mensaje eliminaste antes de que alguien lo viera?",
"¿Quién fue la persona que más daño te hizo?",
"¿Qué es lo más bajo que hiciste por celos?",
"¿Cuál fue tu peor decisión en el amor?",
"¿Qué secreto te confesaron que nunca revelaste?",
"¿Qué es lo que más te duele de tu infancia?",
"¿Alguna vez deseaste que le pase algo malo a alguien?",
"¿Qué foto tenés guardada que nunca mostrarías?",
"¿Cuál es tu mayor inseguridad cuando estás desnudo?",
"¿Quién fue tu peor beso?",
"¿Qué es lo más feo que pensás de tu familia?",
"¿Qué mentira usaste para terminar una relación?",
"¿Alguna vez hablaste con alguien solo para sacarle información?",
"¿Qué es lo más sucio que te escribieron por mensaje?",
"¿Qué secreto tuyo sabría tu ex y nadie más?",
"¿Cuál es tu recuerdo más oscuro?",
"¿Qué es lo que más te arrepentís de no haber dicho?",
"¿Quién fue tu amor más prohibido?",
"¿Alguna vez te arrepentiste de haber perdonado a alguien?",
"¿Qué es lo más raro que te imaginaste en la cama?",
"¿Cuál fue tu peor cita en la vida?",
"¿Qué mentira dijiste en redes sociales para aparentar?",
"¿Qué es lo más íntimo que subiste y después borraste?",
"¿Quién fue la persona que más te obsesionó?",
"¿Qué es lo que nunca querés que tus viejos sepan?",
"¿Alguna vez te gustó alguien de un amigo tuyo?",
"¿Qué fue lo más tóxico que hiciste en celos?",
"¿Cuál fue la peor pelea que tuviste con tu pareja?",
"¿Qué cosa íntima te gustaría hacer y nunca te animaste?",
"¿Quién fue la persona que más lastimaste a propósito?",
"¿Qué es lo más humillante que alguien te hizo?",
"¿Qué mensaje guardás aunque deberías borrar?",
"¿Qué es lo que más te da asco pero lo probaste igual?",
"¿Quién es la persona que más te decepcionó?",
"¿Qué es lo más raro que buscaste en Google a escondidas?",
"¿Cuál es tu recuerdo más morboso?",
"¿Qué cosa nunca dirías en voz alta de vos?",
"¿Alguna vez fuiste la tercera persona en una relación?",
"¿Qué es lo más feo que pensaste de tu mejor amigo?",
"¿Quién es la persona a la que nunca le dirías lo que sentís?",
"¿Qué es lo más feo que alguien te confesó y no supiste qué responder?",
"¿Qué cosa íntima te da miedo que salga a la luz?",
"¿Cuál fue el momento más incómodo en la cama?",
"¿Qué mentira usaste para zafar de un examen?",
"¿Qué es lo más peligroso que hiciste solo por encajar?",
"¿Quién es la persona a la que más celos tuviste sin razón?",
"¿Qué secreto guardás que ni borracho confesarías?",
"¿Qué es lo que más te cuesta superar de un ex?",
"¿Alguna vez inventaste algo para dar lástima?",
"¿Cuál fue el momento más incómodo en tu familia?",
"¿Qué es lo más turbio que viste y nunca contaste?",
"¿Qué cosa íntima compartirías solo con una persona?",
"¿Quién es el último contacto que revisarías si perdieras tu celular?",
"¿Qué es lo más raro que sentiste en un sueño?",
"¿Alguna vez traicionaste la confianza de tu mejor amigo?",
"¿Qué es lo que nunca olvidarías aunque quieras?",
"¿Cuál es tu mayor miedo de estar en pareja?",
"¿Qué mentira dijiste tantas veces que ya te la creíste?",
"¿Quién fue la persona que más te humilló?",
"¿Qué cosa íntima nunca admitirías en público?",
"¿Alguna vez desearías volver con un ex solo por sexo?",
"¿Qué es lo que más te dolió confesar?",
"¿Cuál fue el momento más incómodo que viviste en la escuela?",
"¿Qué cosa hacés en secreto para sentirte mejor?",
"¿Quién fue la persona que más te manipuló?",
"¿Qué secreto tenés guardado hace más de 10 años?",
"¿Qué es lo más feo que hiciste y nadie se enteró?",
"¿Cuál es tu mayor miedo si alguien leyera tus chats?",
"¿Qué cosa íntima quisieras borrar de tu pasado?",
"¿Quién fue la persona que más te cambió la vida para mal?",
"¿Qué es lo más morboso que viste en redes?",
"¿Qué parte de vos odiás más cuando te mirás al espejo?",
"¿Cuál fue la peor excusa que inventaste para no ver a alguien?",
"¿Qué secreto tuyo solo saben dos personas?",
"¿Alguna vez tuviste fantasías con alguien del grupo?",
"¿Qué cosa te excita y nunca confesaste?",
"¿Quién fue la última persona con la que soñaste raro?",
"¿Qué es lo más turbio que escuchaste en una fiesta?",
"¿Qué es lo más cruel que dijiste en una discusión?",
"¿Cuál es tu mayor arrepentimiento con tu primer pareja?",
"¿Qué mentira usaste para no ir a trabajar o estudiar?",
"¿Quién fue la última persona que bloqueaste y por qué?",
"¿Qué secreto tuyo se enteraron y te dolió?",
"¿Qué es lo más íntimo que tenés guardado en notas del celular?"
]
document.addEventListener("DOMContentLoaded", () => {
    function agregarSinRepetir(nuevos, acumulador) {
        nuevos.forEach(p => {
            if (!acumulador.includes(p)) {
                acumulador.push(p);
            }
        });
    }

    // Llamada al cargar
    agregarSinRepetir(promptnuevo, prompt);
    // Create stars background
    function createStars() {
        const stars = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            star.style.animationDelay = Math.random() * 5 + 's';
            stars.appendChild(star);
        }
    }

    function addPlayer() {
        const nameInput = document.getElementById('player-name');
        const name = nameInput.value.trim();

        if (name && !players.includes(name)) {
            players.push(name);
            nameInput.value = '';
            updatePlayersList();
            updateStartButton();
        }
    }

    function updatePlayersList() {
        const playersList = document.getElementById('players-list');
        playersList.innerHTML = '';

        players.forEach((player, index) => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'bg-gray-800 p-3 rounded-lg flex justify-between items-center border border-cyan-500 border-opacity-20';
            playerDiv.innerHTML = `
                    <span class="font-medium text-cyan-200">${player}</span>
                    <button onclick="removePlayer(${index})" class="text-red-400 hover:text-red-200 transition-colors">
                        ✕
                    </button>
                `;
            playersList.appendChild(playerDiv);
        });
    }

    function removePlayer(index) {
        players.splice(index, 1);
        updatePlayersList();
        updateStartButton();
    }

    function updateStartButton() {
        const startBtn = document.getElementById('start-btn');
        startBtn.disabled = players.length < 2;
        startBtn.classList.toggle('opacity-50', players.length < 2);
        startBtn.classList.toggle('cursor-not-allowed', players.length < 2);
    }

    function startGame() {
        if (players.length < 2) return;

        gameStarted = true;
        document.getElementById('setup-section').classList.add('hidden');
        document.getElementById('game-section').classList.remove('hidden');

        updateGamePlayers();
        updateCurrentPlayer();
    }

    function drawQuestion() {
        if (!gameStarted) return;

        const randomIndex = Math.floor(Math.random() * prompt.length);
        currentQuestion = prompt[randomIndex];

        const questionElement = document.getElementById('current-question');
        questionElement.textContent = currentQuestion;
        questionElement.classList.add('question-change');

        setTimeout(() => {
            questionElement.classList.remove('question-change');
        }, 500);

        document.getElementById('boomerang-btn').disabled = false;
        document.getElementById('boomerang-btn').classList.remove('opacity-50', 'cursor-not-allowed');
        document.getElementById('next-btn').disabled = false;
        document.getElementById('next-btn').classList.remove('opacity-50', 'cursor-not-allowed');

        questionDrawn = true;
        boomerangActive = false;
    }

    function boomerangHit() {
        if (!questionDrawn) return;

        // Mostrar animación de boomerang
        document.getElementById('boomerang-target').textContent = "¡La misma pregunta continúa para el siguiente!";
        document.getElementById('boomerang-animation').classList.remove('hidden');

        // Marcar que el boomerang está activo (la pregunta se mantiene)
        boomerangActive = true;

        // Deshabilitar botones hasta que se oculte la animación
        document.getElementById('boomerang-btn').disabled = true;
        document.getElementById('boomerang-btn').classList.add('opacity-50', 'cursor-not-allowed');
        document.getElementById('next-btn').disabled = true;
        document.getElementById('next-btn').classList.add('opacity-50', 'cursor-not-allowed');
    }

    function hideBoomerangAnimation() {
        document.getElementById('boomerang-animation').classList.add('hidden');

        if (boomerangActive) {
            // Si el boomerang está activo, pasar al siguiente jugador PERO mantener la misma pregunta
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            updateCurrentPlayer();
            updateGamePlayers();

            // Reactivar botones para la misma pregunta
            document.getElementById('boomerang-btn').disabled = false;
            document.getElementById('boomerang-btn').classList.remove('opacity-50', 'cursor-not-allowed');
            document.getElementById('next-btn').disabled = false;
            document.getElementById('next-btn').classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    function nextTurn() {
        if (!questionDrawn) return;

        // Pasar al siguiente jugador
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

        // Sacar nueva pregunta automáticamente
        const randomIndex = Math.floor(Math.random() * prompt.length);
        currentQuestion = prompt[randomIndex];

        // Actualizar la pregunta con animación
        const questionElement = document.getElementById('current-question');
        questionElement.textContent = currentQuestion;
        questionElement.classList.add('question-change');

        setTimeout(() => {
            questionElement.classList.remove('question-change');
        }, 500);

        // Mantener botones habilitados para la nueva pregunta
        document.getElementById('boomerang-btn').disabled = false;
        document.getElementById('boomerang-btn').classList.remove('opacity-50', 'cursor-not-allowed');
        document.getElementById('next-btn').disabled = false;
        document.getElementById('next-btn').classList.remove('opacity-50', 'cursor-not-allowed');

        // Actualizar la interfaz
        updateCurrentPlayer();
        updateGamePlayers();

        // Mantener el estado de pregunta activa
        questionDrawn = true;
        boomerangActive = false;
    }

    function updateCurrentPlayer() {
        document.getElementById('current-player').textContent = players[currentPlayerIndex];
    }

    function updateGamePlayers() {
        const gamePlayers = document.getElementById('game-players');
        gamePlayers.innerHTML = '';

        players.forEach((player, index) => {
            const isCurrent = index === currentPlayerIndex;
            const playerDiv = document.createElement('div');
            playerDiv.className = `p-3 rounded-lg flex items-center gap-3 ${isCurrent ? 'player-turn bg-gradient-to-r from-cyan-900 to-purple-900' : 'bg-gray-800'
                } border ${isCurrent ? 'border-cyan-500' : 'border-gray-700'}`;
            playerDiv.innerHTML = `
                    <div class="w-3 h-3 rounded-full ${isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'}"></div>
                    <span class="font-medium ${isCurrent ? 'text-cyan-200' : 'text-gray-300'}">${player}</span>
                    ${isCurrent ? '<span class="ml-auto text-sm text-cyan-400 font-semibold">(TURNO)</span>' : ''}
                `;
            gamePlayers.appendChild(playerDiv);
        });
    }
        createStars();

        // Permitir agregar jugadores con Enter
        document.getElementById('player-name').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addPlayer();
            }
        });
    window.startGame = startGame;
    window.removePlayer = removePlayer;
    window.drawQuestion = drawQuestion;
    window.boomerangHit = boomerangHit;
    window.hideBoomerangAnimation = hideBoomerangAnimation;
    window.nextTurn = nextTurn;
    window.addPlayer = addPlayer;
});