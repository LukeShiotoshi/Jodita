let players = [];
let currentInterrogado = null;
let currentQuestionIndex = 0;
let timerInterval = null;
let timeLeft = 60;
let isSpinning = false;

let prompt = [];
const promptnuevo = [
    "¿Te comerías a alguien de esta mesa?",
    "¿Mentiste hoy? ¿Sobre qué?",
    "¿Alguna vez te has enamorado de tu mejor amig@?",
    "¿Qué es lo más vergonzoso que has hecho por amor?",
    "¿Has tenido sexo en un lugar público?",
    "¿Cuál es tu fantasía sexual más oscura?",
    "¿Alguna vez has hecho trampa en una relación?",
    "¿Qué es lo más raro que te excita?",
    "¿Has enviado nudes a alguien que no deberías?",
    "¿Cuál es tu mayor arrepentimiento sexual?",
    "¿Te has masturbado pensando en alguien de este grupo?",
    "¿Qué mentira le contaste a tu pareja actual?",
    "¿Has tenido relaciones con alguien comprometido?",
    "¿Cuál es el lugar más inusual donde has tenido sexo?",
    "¿Alguna vez has fingido un orgasmo?",
    "¿Qué es lo más pervertido que has hecho?",
    "¿Has tenido un trío? ¿Con quiénes?", "¿Cuál es tu placer culpable más absurdo?",
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
    "¿Cuál es tu fetiche más raro?",
    "¿Alguna vez te han pillado masturbándote?",
    "¿Qué es lo más sucio que has hecho por dinero?"
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
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    function addPlayer() {
        const nameInput = document.getElementById('playerName');
        const name = nameInput.value.trim();

        if (name && !players.includes(name)) {
            players.push(name);
            nameInput.value = '';
            updatePlayersList();

            // Efecto de sonido o visual
            nameInput.focus();
        }
    }

    function updatePlayersList() {
        const playersList = document.getElementById('playersList');
        playersList.innerHTML = '';

        players.forEach(player => {
            const playerTag = document.createElement('div');
            playerTag.className = 'player-tag';
            playerTag.innerHTML = `
                    <i class="fas fa-user"></i>
                    ${player}
                    <button onclick="removePlayer('${player}')" class="ml-2 text-red-300 hover:text-red-100">
                        <i class="fas fa-times"></i>
                    </button>
                `;
            playersList.appendChild(playerTag);
        });
    }

    function removePlayer(player) {
        players = players.filter(p => p !== player);
        updatePlayersList();
    }

    function startGame() {
        if (players.length < 2) {
            alert('¡Necesitas al menos 2 jugadores para empezar!');
            return;
        }

        showSection('game');
        setupRuleta();
    }
    // Monta la ruleta según el array players[]// 1) Llama a esto al cargar la página
    window.addEventListener("load", setupRuleta);

    // 2) Crea los segmentos y etiquetas
    function setupRuleta() {
        const ruleta = document.getElementById("ruleta");
        ruleta.innerHTML = "";
        ruleta.style.transform = "rotate(0deg)";

        const N = players.length;
        if (!N) return;
        const angle = 360 / N;

        players.forEach((name, i) => {
            const rotation = i * angle;

            // Crear porción
            const item = document.createElement("div");
            item.className = "ruleta-item";
            item.style.transform = `rotate(${rotation}deg)`;
            item.style.backgroundColor = `hsl(${rotation}, 80%, 60%)`;

            // Crear etiqueta
            const label = document.createElement("div");
            label.textContent = name;

            // Posicionar el texto en el centro del wedge
            label.style.position = "absolute";
            label.style.top = "50%";
            label.style.left = "50%";
            label.style.transformOrigin = "0 0";
            label.style.transform = `
      rotate(${rotation + angle / 2}deg)
      translate(0, -90%)
      rotate(-${rotation + angle / 2}deg)
    `;
            label.style.color = "#fff";
            label.style.fontWeight = "600";
            label.style.fontSize = "0.875rem";
            label.style.textShadow = "0 0 4px rgba(0,0,0,0.8)";
            label.style.whiteSpace = "nowrap";

            item.appendChild(label);
            ruleta.appendChild(item);
        });
    }

    // 3) Gira la ruleta y muestra el seleccionado
    function spinRuleta() {
        if (isSpinning) return;
        if (players.length < 2) return alert("¡Agrega más jugadores primero!");

        isSpinning = true;
        const ruleta = document.getElementById("ruleta");
        const randomRotation = 1800 + Math.floor(Math.random() * 720);
        ruleta.style.transform = `rotate(${randomRotation}deg)`;
        document.getElementById("selectedPlayer").classList.add("hidden");

        setTimeout(() => {
            // 1) Determinar quién salió
            const deg = randomRotation % 360;
            const angle = 360 / players.length;
            const normalized = (360 - deg + angle / 2) % 360;
            const idx = Math.floor(normalized / angle);
            const elegido = players[idx];
            currentInterrogado = elegido;                // ← guardar dato global

            // 2) Mostrar seleccionado
            const selDiv = document.getElementById("selectedPlayer");
            selDiv.textContent = `¡${elegido} es el interrogado!`;
            selDiv.classList.remove("hidden");

            isSpinning = false;

            // 3) Montar carrusel y reiniciar temporizador
            showQuestions();
            startTimer();
        }, 4000);
    }



    function startTimer() {
        clearInterval(timerInterval);
        timeLeft = 60;
        updateTimer();

        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert('¡Tiempo terminado! El interrogador pierde su turno.');
            }
        }, 1000);
    }

    function updateTimer() {
        const timer = document.getElementById('timer');
        const span = timer.querySelector('span');
        span.textContent = timeLeft;

        const progress = ((60 - timeLeft) / 60) * 360; // grados en lugar de porcentaje

        const color = timeLeft <= 10 ? '#ff0000' : '#ff00ff';
        timer.style.background = `conic-gradient(${color} ${progress}deg, #16213e ${progress}deg)`;
        if (timeLeft <= 0) {
            nextQuestion();       // avanza una tarjeta
        }

    }


    function showQuestions() {
        const carousel = document.getElementById('questionsCarousel');
        carousel.innerHTML = '';

        const shuffled = [...prompt].sort(() => Math.random() - 0.5);
        shuffled.forEach((q, i) => {
            const card = document.createElement('div');
            card.className = 'pregunta-card';
            card.innerHTML = `
      <h3 class="text-lg font-bold mb-2 text-cyan-300">Pregunta ${i + 1}</h3>
      <p>${q}</p>
    `;
            carousel.appendChild(card);
        });

        currentQuestionIndex = 0;
        updateCarousel();
    }

    function updateCarousel() {
        const carousel = document.getElementById('questionsCarousel');
        carousel.style.transform = `translateX(-${currentQuestionIndex * 100}%)`;
    }

    function nextQuestion() {
        currentQuestionIndex = (currentQuestionIndex + 1) % prompt.length;
        updateCarousel();
    }

    function prevQuestion() {
        currentQuestionIndex = (currentQuestionIndex - 1 + prompt.length) % prompt.length;
        updateCarousel();
    }
    function penalize(type) {
        if (!currentInterrogado) {
            alert('Primero gira la ruleta para seleccionar un interrogado');
            return;
        }

        const penalty = type === 'noAnswer' ? 1 : 3;
        alert(`${currentInterrogado} debe tomar ${penalty} trago(s) por ${type === 'noAnswer' ? 'no contestar' : 'mentir'}`);

        // Reset for next question
        nextQuestion();
    }

    function toggleRules() {
        const modal = document.getElementById('rulesModal');
        modal.classList.toggle('hidden');
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', function () {
        updatePlayersList();

        // Efecto de carga inicial
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
    });
});