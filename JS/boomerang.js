let players = [];
let currentPlayerIndex = 0;
let currentQuestion = '';
let gameStarted = false;
let questionDrawn = false;
let boomerangActive = false;

let prompt = [];
const promptnuevo = [

    "¿Cuál es tu mayor secreto que nunca has contado?",
    "¿Quién fue tu primer amor y qué pasó?",
    "¿Cuál es la cosa más vergonzosa que te ha pasado en público?",
    "¿Qué es lo más loco que has hecho por amor?",
    "¿Cuál es tu mayor arrepentimiento hasta ahora?",
    "¿A cuántas personas has besado en una noche?",
    "¿Cuál es tu fantasía más extraña?",
    "¿Qué es lo más ilegal que has hecho?",
    "¿Quién es la persona más famosa que has conocido?",
    "¿Cuál es tu mayor miedo?",
    "¿Qué hábito tuyo te da vergüenza?",
    "¿Cuál fue la mentira más grande que dijiste?",
    "¿Qué cosa hiciste que casi te descubren?",
    "¿A quién envidias secretamente?",
    "¿Qué compraste y luego escondiste?",
    "¿Cuál es tu mayor secreto familiar?",
    "¿Qué es lo más arriesgado que has hecho en una cita?",
    "¿Con cuántas personas te has despertado en la misma cama?",
    "¿Has mentido en tu currículum para conseguir un trabajo?",
    "¿Qué es lo peor que has dicho de un amigo a sus espaldas?",
    "¿Alguna vez te has sentido atraído por dos personas al mismo tiempo?",
    "¿Qué es lo más ilegal que te gustaría probar sin que te atrapen?",
    "¿Cuál es tu fantasía sexual más intensa que nunca has confesado?",
    "¿Has enviado mensajes subidos de tono a la persona equivocada?",
    "¿Qué es lo más vergonzoso que has buscado en tu historial de navegador?",
    "¿Te has enamorado de alguien mucho mayor o mucho menor que tú?",
    "¿Alguna vez restaste atención a tu pareja por mirar a otra persona?",
    "¿Cuál es tu truco infalible para que te perdonen rápido?",
    "¿Has soñado con alguien que está presente ahora mismo?",
    "¿Cuál fue tu peor excusa para no pagar la cuenta en un bar?",
    "¿Qué parte de tu cuerpo te da más inseguridad y por qué?",
    "¿Has fingido un orgasmo con alguien cercano a ti?",
    "¿Cuál es tu vicio más inconfesable?",
    "¿Alguna vez leíste el diario o los mensajes de alguien sin permiso?",
    "¿Cuál es tu mayor trauma de infancia que nunca has compartido?",
    "¿Te arrepientes de alguna confesión que hiciste borracho?",
    "¿Qué palabra o frase evitas usar frente a ciertas personas?",
    "¿Has guardado un regalo solo por pena y sin querer usarlo?",
    "¿Cuál es tu peor historia de noche loca con amigos?",
    "¿Has retocado alguna foto para parecer otra persona en redes?",
    "¿Cuál es tu peor error al enviar un mensaje de voz por accidente?",
    "¿Has fingido estar ocupado para no hablar con alguien?",
    "¿Cuál es la mentira que más te molesta que te cuenten?",
    "¿Has comprado algo y lo devolviste al día siguiente sin que te notaran?",
    "¿Cuál es tu mayor arrepentimiento amoroso hasta hoy?",
    "¿Qué te da más miedo confesar en una videollamada familiar?",
    "¿Cuál fue la pelea más absurda que tuviste por un malentendido?",
    "¿Has stalkeado a tu ex para enterarte de su vida actual?",
    "¿Cuál es el mejor consejo íntimo que nunca seguiste?",
    "¿Qué secreto de tu pasado cambiarías si pudieras?",
    "¿Con quién te irías de viaje ahora mismo sin pensarlo?",
    "¿Cuál es la peor mentira que le dijiste a tus padres?",
    "¿Cuál es tu placer culpable más absurdo?",
    "¿Qué rasgo de personalidad detestas en ti mismo?",
    "¿Alguna vez has fingido estar enamorado para no herir a alguien?",
    "¿Cuál es tu fantasía más inalcanzable?",
    "¿Qué es lo más peligroso que has hecho por adrenalina?",
    "¿Cuál fue tu peor decisión económica en la vida?",
    "¿Qué secreto conocen de ti, pero nunca dirías en público?",
    "¿Te has colado alguna vez a un lugar sin pagar?",
    "¿Qué parte de tu cuerpo cambiarías si pudieras y por qué?",
    "¿A quién admiras en secreto y no lo has confesado?",
    "¿Alguna vez leíste los mensajes de alguien sin permiso?",
    "¿Cuál es tu mayor trauma de infancia que nunca compartiste?",
    "¿Qué te avergüenza de tu familia?",
    "¿Has espiado conversaciones comprometedoras de otros?",
    "¿Cuál es tu mayor inseguridad sexual?",
    "¿Qué relación prohibida te atrae más?",
    "¿Con quién te arrepientes de haber dormido?",
    "¿Alguna vez le robaste algo a un amigo sin que lo notara?",
    "¿Qué rumor falso has propagado sobre alguien?",
    "¿Qué harías con un día de anonimato total?",
    "¿A quién le declararías tu amor si no existieran consecuencias?",
    "¿Cuál es tu arrepentimiento académico más grande?",
    "¿Qué harías por un millón de dólares que normalmente no harías?",
    "¿Has traicionado a alguien para beneficiarte laboralmente?",
    "¿Cuál es tu peor hábito nocturno?",
    "¿Has practicado sexting con alguien cercano?",
    "¿A quién has stalkeado más en redes sociales?",
    "¿Qué te impidió cumplir tu sueño más importante?",
    "¿Alguna vez falsificaste tu firma?",
    "¿Qué secreto de un amigo guardaste y te costó la amistad?",
    "¿Cuál fue tu peor error médico o de salud por negligencia?",
    "¿Has inventado excusas para salir con alguien que te gustaba?",
    "¿A quién odias en silencio pero no lo admites?",
    "¿Mentiste sobre tu edad para conseguir algo?",
    "¿Qué fetiche extraño aún no has confesado?",
    "¿Te han rechazado románticamente y lloraste por ello?",
    "¿Cuál fue tu desastre más grande en una presentación pública?",
    "¿Qué sueño raro persiste en tu memoria?",
    "¿Has ocultado mensajes de tu pareja a propósito?",
    "¿Qué harías si supieras que nadie se enteraría de tu acción?",
    "¿Cuál es tu mayor temor profesional?",
    "¿Plagiaste un trabajo y no te descubrieron?",
    "¿Qué cambiarías de tu adolescencia si pudieras?",
    "¿Cuál es tu secreto más profundo que nunca dijiste?",
    "¿Qué opinión polémica sostienes pero no compartes en público?",
    "¿Has fingido un accidente para evitar algo?",
    "¿Qué confidencia te pidieron que guardaras y rompiste?",
    "¿Cuál es tu impulso irracional más reciente?",
    "¿Has sentido celos tan fuertes que te avergüenzarían?",
    "¿Qué mentira crees que nunca perdonarías?",
    "¿Cuál es tu peor historia de borrachera?",
    "¿Qué mensaje borraste rápido del celular?",
    "¿Con qué famoso te gustaría salir?",
    "¿Qué skill oculto tenés que nadie sabe?",
    "¿Cuál fue tu peor cita?",
    "¿Qué app usás que nadie sabe?",
    "¿A quién stalkeas en redes?",
    "¿Qué mentira le dijiste a tus padres?",
    "¿Cuál fue tu peor error en el trabajo?", "¡En 5 segundos nombra 4 películas románticas!",
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

    "¿Qué cosa robaste alguna vez?"
];
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

    // Initialize
    document.addEventListener('DOMContentLoaded', function () {
        createStars();

        // Permitir agregar jugadores con Enter
        document.getElementById('player-name').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addPlayer();
            }
        });
    });
});