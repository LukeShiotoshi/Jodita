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
            "Elegí a alguien y tocá su abdomen.",
            "Decí en voz alta tu historial de búsquedas más hot.",
            "Mandá un audio sexy diciendo lo primero que se te venga a la cabeza.",
            "Describí tu posición sexual favorita sin decir su nombre.",
            "Mandá un mensaje con doble sentido al último contacto que tengas en WhatsApp.",
            "Tocá la pierna de alguien por debajo de la mesa por un minuto.",
            "Decí en voz alta algo que te caliente mucho.",
            "Chupá un dedo ajeno durante 5 segundos.",
            "Besá a alguien en la mejilla pero hacelo durar incómodamente mucho.",
            "Mirá fijo a alguien y decile algo que te imaginás haciendo con esa persona.",
            "Mandá un emoji caliente a un contacto reciente y no podés dar contexto si pregunta.",
            "Simulá cómo besarías apasionadamente, usando solo el aire.",
            "Susurrale algo hot al oído a la persona de tu derecha.",
            "Elegí a alguien y hacé un masaje en la espalda.",
            "Mostrá tu mejor cara de placer sin decir una palabra.",
            "Narrá cómo sería una cita sexual perfecta sin decir ninguna mala palabra.",
            "Chupá un cubo de hielo lentamente y mirá a alguien a los ojos mientras lo hacés.",
            "Decí tu zona erógena favorita y por qué.",
            "Mandá un voice actuando como si estuvieras teniendo sexo (sin decir palabras explícitas).",
            "Tocá lentamente el brazo de alguien mientras le decís algo sugerente.",
            "Simulá que estás por seducir a alguien del grupo e improvisá el momento.",
            "Mostrá la última foto que recibiste por chat (sin contexto).",
            "Decí con quién del grupo harías un trío y por qué.",
            "Elegí a alguien para que te dé una orden hot que tenés que cumplir o tomar 3.",
            "Bailá reggaetón lento con alguien del grupo.",
            "Decí con quién tendrías una noche sin compromiso, acá y ahora.",
            "Recreá una escena hot de una serie o película.",
            "Hacé contacto visual con alguien y decile, sin reírte, lo que le harías en una noche de pasión.",
            "Describí en detalle cómo sería tu primera vez con alguien del grupo (sin decir quién).",
            "Simulá que estás teniendo sexo telefónico con alguien.",
            "Dejá que alguien del grupo elija una parte de tu cuerpo para que la besen (con consentimiento).",
            "Contá un sueño sexual que hayas tenido (real o inventado, pero creíble).",
            "Elegí a alguien y describí cómo lo/a besarías, paso a paso.",
            "Tocá suavemente el cuello de alguien mientras decís algo caliente al oído.",
            "Imitá un gemido real tuyo durante 10 segundos sin parar.",
            "Mostrá tu outfit interior solo con gestos, sin sacarte nada.",
            "Jugá al piedra, papel o tijera con alguien. El que pierde deja que el otro le dé una mordida suave donde quiera (con consentimiento).",
            "Mandá un mensaje diciendo 'No paro de pensar en lo que pasó anoche' al contacto que el grupo elija.",
            "Decí cuál fue el lugar más raro donde tuviste algo hot y cómo fue.",
            "Tocá lentamente los labios (los tuyos) mientras le hablás sucio al aire.",
            "Actuá cómo si estuvieras a punto de tener sexo pero te interrumpen y tenés que disimular.",
            "Dejá que alguien elija una parte de tu cuerpo para escribir con el dedo una palabra hot.",
            "Hacé un mini striptease con una prenda que no sea ropa interior.",
            "Decí una fantasía que nunca cumpliste pero que te encantaría.",
            "Sentate en las piernas de alguien durante toda la siguiente ronda.",
            "Mandá un mensaje privado con un deseo hot a alguien del grupo (no podés decir a quién).",
            "Imitá cómo te mojarías si alguien te tocara justo donde más te gusta (sin decir dónde).",
            "Describí qué parte del cuerpo de cada uno del grupo te parece más sexy.",
            "Tocá con los labios (sin besar) el cuello de alguien.",
            "Simulá cómo reaccionás cuando te muerden el cuello.",
            "Contá cómo fue tu primer beso y cuánto te calentó (o inventalo bien).",
            "Dejá que el grupo elija a alguien para que te dé un beso donde quiera (con consentimiento).",
            "Leé en voz alta el primer mensaje hot que recuerdes haber mandado o inventalo si no tenés.",
            "Elegí a alguien para hacer una pose sexual improvisada juntos durante 5 segundos.",
            "Simulá cómo te desvestís cuando estás solo/a y tenés ganas.",
            "Recreá el audio más hot que hayas recibido (o inventalo con estilo).",
            "Contá a quién del grupo le harías un masaje íntimo y por qué.",
            "Actuá como si estuvieras teniendo un encuentro hot con un desconocido en un baño público."
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
            "Tomá mientras decís algo completamente absurdo y convencido.",
            "Elegí a alguien para que te dé el trago directamente (con consentimiento).",
            "Ponete un sombrero o algo en la cabeza y no podés tomar hasta que no se caiga.",
            "Tomá mirando fijamente a alguien como si le estuvieras confesando tu amor.",
            "Contá una anécdota graciosa o embarazosa y después tomá.",
            "Dejá que el grupo te invente un apodo nuevo y brindá por eso.",
            "Tomá desde un recipiente raro (taza, frasco, botella de otra cosa, etc).",
            "Elegí a alguien para que mezclete un trago sorpresa y tenés que tomarlo sí o sí.",
            "Jugá a que estás en una cita incómoda mientras tomás.",
            "Hacé fondo blanco mientras hacés una pose ridícula.",
            "Nombrá tres cosas que te dan cringe y después hacete un trago por cada una.",
            "Inventá un brindis como si estuvieras en un casamiento y tomá como si fuera champán.",
            "Pasá tu vaso de mano en mano hasta volver a vos, y el que lo tiene al final también toma.",
            "Tomá mientras tenés que responder preguntas rápidas del grupo sin trabarte.",
            "Hacé un brindis por una serie o peli que odies y defendela como si fuera tu favorita.",
            "Tomá cada vez que alguien dice 'dale', 'ya fue' o 'posta' durante la próxima ronda.",
            "Simulá que estás en un programa de cocina y enseñá a preparar tu trago mientras lo hacés.",
            "Tomá mientras hacés un mini monólogo sobre lo injusto que es algo random.",
            "Agarrá el vaso con una parte del cuerpo que no sea la mano y tratá de tomar así.",
            "Elegí a alguien y tenés que imitar cómo tomaría él/ella si fuera un famoso o influencer.",
            "Mostrá cómo sería tomar con resaca y después tomá posta.",
            "Brindá como si acabaras de ganar un Oscar y agradecé a alguien del grupo.",
            "Tomá mientras actuás que estás en una fiesta cheta y hablás con acento snob.",
            "Hacete el borracho exagerado mientras tomás (aunque no lo estés).",
            "Poné una canción triste y tomá como si te hubieran dejado ayer.",
            "Simulá estar en un brindis de Año Nuevo, gritá el conteo regresivo y tomá.",
            "Tomá pero solo si lográs hacer equilibrio con una moneda en la frente.",
            "Elegí a alguien y hacé fondo blanco con él/ella pero mirando para otro lado todo el tiempo.",
            "Tenés que tomar solo si alguien del grupo puede nombrar 3 tragos.",
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
            "¿A quién le mentiste últimamente aunque no parezca?",
            "¿Qué hiciste que si alguien del grupo se entera, se enoja seguro?",
            "¿Alguna vez tuviste celos de alguien de acá? ¿Por qué?",
            "¿Con quién te gustaría tener algo aunque nunca lo admitirías en serio?",
            "¿A quién ignorás en el grupo sin que se note?",
            "¿Qué cosa que hiciste te da culpa y nunca lo contaste?",
            "¿Te gusta alguien del grupo y no lo dijiste jamás?",
            "¿Qué parte de tu personalidad escondés para caer bien?",
            "¿De quién del grupo pensaste algo heavy que no te animaste a decirle en la cara?",
            "¿Qué mensaje borraste porque sabías que si lo veían te quemabas mal?",
            "¿A quién te gustaría que echen de este juego y por qué?",
            "¿Cuál fue la peor traición que hiciste a alguien cercano?",
            "¿Qué pensás que el grupo no se anima a decirte en la cara?",
            "¿Cuál fue el comentario más mala leche que hiciste de alguien presente?",
            "¿Alguna vez mentiste sobre algo heavy para zafar de una situación con alguien de acá?",
            "¿Qué pensamiento oscuro tenés seguido pero nunca contás?",
            "¿Con quién tuviste una tensión rara y nunca lo hablaron?",
            "¿A quién le harías ghosting si pudieras sin culpa?",
            "¿Qué hiciste que no fue ilegal pero sabés que estuvo muy mal?",
            "¿Qué cosa de vos te da vergüenza pero sabés que no vas a cambiar igual?",
            "¿Qué cosa que hiciste con alguien te arrepentís pero seguís actuando como si nada?",
            "¿Alguna vez deseaste que alguien del grupo fracase o no le salga algo?",
            "¿A quién le sacás el cuerpo o evitás cada vez que podés?",
            "¿Cuál es el pensamiento más tóxico que tuviste esta semana y a quién involucraba?",
            "¿Con quién serías re intenso si supieras que nadie se va a enterar?",
            "¿Qué persona de tu pasado todavía te afecta aunque lo negás?",
            "¿Qué es lo más manipulador que hiciste y te funcionó?",
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
            "¿Alguna vez te enamoraste de alguien mientras estabas con otra persona?",
            "¿Qué olor te enciende sin darte cuenta?",
            "¿Te gusta hablar sucio o preferís el silencio total?",
            "¿Alguna vez pensaste en alguien más mientras estabas con tu pareja?",
            "¿Cuál fue el lugar más raro donde tuviste un momento íntimo?",
            "¿Qué gesto o actitud te derrite más que cualquier palabra?",
            "¿Guardás mensajes o audios hot aunque ya no hables con esa persona?",
            "¿Te excita más lo que te dicen o lo que hacen?",
            "¿Alguna vez fingiste sentir algo que no sentías para no herir a alguien?",
            "¿Qué parte de vos creés que es la más atractiva en la intimidad?",
            "¿Preferís algo intenso y corto o largo y tranqui?",
            "¿Qué te hace sentir realmente deseado/a?",
            "¿Alguna vez estuviste con alguien por pura calentura aunque sabías que no iba a pasar nada más?",
            "¿Sos más de tomar la iniciativa o esperás que el otro avance?",
            "¿Te pasó que alguien te miró de una forma que te hizo flashear mal?",
            "¿Cuál fue el beso que más te dejó pensando después?",
            "¿Qué fantasía tuviste que te sorprendió a vos mismo/a?",
            "¿Qué canción te transporta directo a una situación íntima?",
            "¿Preferís que te digan lo que quieren o descubrirlo con el cuerpo?",
            "¿Alguna vez lloraste después de tener sexo y no supiste por qué?",
            "¿Qué te da más morbo: lo prohibido o lo inesperado?",
            "¿Hay algo que siempre quisiste probar pero todavía no te animaste?",
            "¿Quién fue la última persona con la que soñaste algo íntimo?",
            "¿Te pasó que un simple roce te cambió todo el día?",
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