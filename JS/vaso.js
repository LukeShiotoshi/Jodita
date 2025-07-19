
// Opciones posibles
const shots = [
    "Un shot de vodka",
    "Un shot de fernet con coca",
    "Un shot de whisky"
];

const ridiculousOptions = [
    { text: "Canta 'Tu melodía favorita de Ricardo Arjona' como si fuera una ópera" },
    { text: "Baila como si estuvieras en una tabla de surf en medio de la sala" },
    { text: "Imita a tu personaje de tv favorito durante 30 segundos" },
    { text: "Habla con acento francés exagerado durante los próximos 3 turnos" },
    { text: "Publica en tu estado '¡Amo los selfis sin camiseta!' y mantenlo 24h" },
    { text: "Deja que el grupo elija un tatuaje temporal para ponerte" },
    { text: "Dile un piropo cursi a cada persona del grupo" },
    { text: "Narrá todo lo que hacés como si fueras un comentarista deportivo" },
    { text: "Hablá como si fueras un robot defectuoso hasta tu próximo turno" },
    { text: "Inventá un nuevo saludo y hacelo con todos cada vez que hables" },
    { text: "Caminá en cámara lenta durante 1 ronda entera" },
    { text: "Simulá estar en una película de acción durante 30 segundos" },
    { text: "Escribí un mensaje ridículo a tu ex (sin enviarlo) y leelo" },
    { text: "Ponete una servilleta en la cabeza y decí que sos de la realeza" },
    { text: "Actuá una escena dramática de despedida con alguien del grupo" },
    { text: "Inventá y cantá un jingle sobre uno de tus amigos" },
    { text: "Hablá usando solo preguntas por una ronda" },
    { text: "Sentate en el piso y actuá como si fueras un perro por 1 minuto" },
    { text: "Imitá a alguien del grupo sin decir quién es" },
    { text: "Mandale un audio a alguien diciendo 'Me siento observado por los gnomos'" },
    { text: "Hablá con eco fingido cada vez que digas algo" },
    { text: "Actuá como si estuvieras en un musical por los próximos 2 minutos" },
    { text: "Hacé un discurso político sobre por qué deberías ser el líder del grupo" },
    { text: "Dibujá un autorretrato con los ojos cerrados y mostráselo a todos" },
    { text: "Actuá como si estuvieras poseído por un espíritu fiestero" },
    { text: "Decí el clima como si fueras un noticiero dramático" },
    { text: "Simulá que todo te da miedo durante 1 minuto" },
    { text: "Usá una media en la mano como títere y hablá con ella" },
    { text: "Cantá una canción triste como si estuvieras ultra feliz" },
    { text: "Actuá como si estuvieras atrapado en una caja invisible" },
    { text: "Movete como si fueras un alien que recién aprende a caminar" },
    { text: "Contá un chiste malísimo como si fuera brillante" },
    { text: "Hacete pasar por un crítico de arte y describí un dibujo ridículo" },
    { text: "Hablá como si fueras un personaje de videojuego" },
    { text: "Contá una historia inventada sobre cómo conociste a alguien del grupo" },
    { text: "Hacete el dormido y despertate cada vez que alguien te mire" },
    { text: "Actuá como si fueras un gato por 1 ronda" },
    { text: "Dibujá algo con los pies y mostráselo al grupo" },
    { text: "Hacete pasar por un famoso y fingí que estás en una entrevista" },
    { text: "Mirá fijo a alguien y decí 'te reconozco de mis sueños'" },
    { text: "Hacete pasar por influencer de viajes y vendé tu casa como destino turístico" },
    { text: "Decí todo como si estuvieras leyendo un hechizo mágico" },
    { text: "Usá palabras inventadas en lugar de las reales por una ronda" },
    { text: "Decí un trabalenguas mientras hacés sentadillas" },
    { text: "Describí tu outfit como si fuera de la MET Gala" },
    { text: "Gritá 'soy libre' y corré por la habitación" },
    { text: "Explicá cómo hacer un sándwich como si fuera física cuántica" },
    { text: "Dibujá un animal inventado y contá su historia" },
    { text: "Actuá como si fueras un chef italiano preparando pizza" },
    { text: "Mostrá cómo harías un tutorial de maquillaje sin maquillaje" },
    { text: "Imitá a alguien que no sabés imitar" },
    { text: "Dale voz a un objeto cercano y hacelo hablar con vos" },
    { text: "Promocioná una piedra como si fuera el mejor producto del mundo" },
    { text: "Movete en cámara rápida por 30 segundos" },
    { text: "Dibujá una bandera para una nación inventada y explicala" },
    { text: "Reaccioná a algo invisible como si fuera increíble" },
    { text: "Simulá que te estás despidiendo de una película dramática" },
    { text: "Hacete pasar por un guía de turismo y mostrale al grupo los 'puntos turísticos' de la habitación" },
    { text: "Imitá una pelea de telenovela con una silla como si fuera tu ex" },
    { text: "Actuá como si fueras un influencer de maquillaje sin usar nada de maquillaje" },
    { text: "Narrá tu vida como si fuera el tráiler de una película de acción" },
    { text: "Convertite en un chef exagerado y explicá cómo se hace un mate como si fuera alta receta gourmet" },
    { text: "Discutí con una planta como si fuera tu ex y hacelo con drama extremo" },
    { text: "Vendé una empanada como si fuera el producto más sexy del planeta" },
    { text: "Caminá como modelo de pasarela mientras describís tu outfit como si fuera de diseñador internacional" },
    { text: "Actuá como si estuvieras atrapado en una telenovela venezolana" },
    { text: "Simulá que estás en un reality show y fuiste nominado. Defendete al borde del llanto" },
    { text: "Hablá como si fueras un youtuber de teorías conspirativas y contá algo que pasó hoy" },
    { text: "Imitá a alguien vendiendo un producto invisible con total seriedad" },
    { text: "Contá cómo sobreviviste a una invasión alien con detalles inventados y mucho suspenso" },
    { text: "Actuá como si fueras un objeto olvidado que quiere venganza" },
    { text: "Hablá como si fueras un traductor automático con delay" },
    { text: "Fingí que estás en una entrega de premios y agradecé exageradamente por haber nacido" },
    { text: "Elegí un objeto y tratá de convencer al grupo de que está embrujado" },
    { text: "Actuá como un vendedor de televisión que promociona una escoba como si fuera tecnología de punta" },
    { text: "Ponete algo en la cabeza y hablá como si fueras un rey medieval en una crisis existencial" },
    { text: "Simulá que sos un artista moderno explicando una obra que no tiene sentido" },
    { text: "Gritá '¡Que comience el show!' y hacé una entrada dramática como si fueras estrella de Broadway" },
    { text: "Actuá como si fueras un robot que se reinicia cada vez que alguien dice tu nombre" },
    { text: "Contá cómo te entrenaste para ser ninja en tu adolescencia, aunque sea completamente inventado" },
    { text: "Simulá que tenés un canal de cocina y explicá cómo hacer un café como si fuera alta ciencia" },
    { text: "Hablá con tono de villano de película y explicá tu plan para dominar el mundo" },
    { text: "Imitá a un perro influencer presentando su día en un vlog" },
    { text: "Movete como si fueras una gelatina con vida durante 30 segundos" },
    { text: "Cantá el himno nacional como si estuvieras en un karaoke pasado de copas" },
    { text: "Explicá cómo se usa el inodoro como si fuera tecnología alienígena" },
    { text: "Fingí que sos un jurado de reality y criticá el outfit de todos (de forma divertida)" },
    { text: "Repetí todo lo que decís como si estuvieras en una cueva con eco" },
    { text: "Fingí que estás perdido en el desierto y pedí ayuda dramáticamente" },
    { text: "Actuá como un famoso que niega un escándalo ridículo en una conferencia de prensa" },
    { text: "Simulá que sos un mimo encerrado en una caja de vidrio mientras alguien te habla" },
    { text: "Fingí que todo lo que tocás se convierte en oro y exagerá las consecuencias" },
    { text: "Imitá una escena de celos absurda con un objeto inanimado" },
    { text: "Hablá con voz de narrador de documental sobre tu propio comportamiento" },
    { text: "Fingí que estás haciendo una audición para ser el próximo James Bond (o su villano)" },
    { text: "Imitá una cabra durante 20 segundos sin romper personaje" },
    { text: "Caminá como si fueras un bebé aprendiendo a dar sus primeros pasos" },
    { text: "Hablá como si tuvieras que traducir simultáneamente lo que dice un objeto cercano" },
    { text: "Actuá como si estuvieras en el final de una novela épica y tenés que declarar tu amor" },
    { text: "Imitá a una persona que acaba de descubrir que tiene superpoderes inútiles" },
    { text: "Vendé un par de medias como si fuera un objeto histórico invaluable" },
    { text: "Fingí que estás en una competencia de talentos y mostrale al grupo tu habilidad más absurda" },
    { text: "Hablá como si estuvieras haciendo ASMR sin tener idea de cómo se hace" },
    { text: "Actuá como si fueras un astronauta que vuelve a la Tierra y se sorprende por todo" },
    { text: "Contá cómo descubriste que sos el heredero de una fábrica de patitos de goma" },
    { text: "Dibujá un plato de comida y hacé una reseña como si fueras crítico gourmet" },
    { text: "Simulá una videollamada fallida donde nada funciona bien (imagen, audio, delay)" },
    { text: "Promocioná una cuchara como si fuera un avance revolucionario en diseño" },
    { text: "Cantá una canción como si estuvieras en una película de terror" },
    { text: "Actuá como si fueras un genio recién salido de la lámpara y no entendés el siglo XXI" },
    { text: "Hablá como si fueras un entrenador Pokémon explicando una batalla super seria" },
    { text: "Fingí que sos el presentador de un programa de chimentos contando el último escándalo del grupo" },
    { text: "Hablá con tono de trailer de película de suspenso cada vez que contás algo durante una ronda" },
    { text: "Imitá a un cantante famoso olvidándose la letra de su hit más conocido" },
    { text: "Simulá estar atrapado en una videollamada donde solo podés comunicarte por gestos" },
    { text: "Fingí que sos una alarma con fallas técnicas cada vez que alguien se mueve" },
    { text: "Actuá como si estuvieras escapando de una película de zombis y pedí ayuda" },
    { text: "Vendé tu almohada como si fuera un dispositivo de última tecnología para dormir mejor" },
    { text: "Fingí que te estás enamorando de una planta del lugar y hacé la confesión" },
    { text: "Imitá a alguien llorando desconsoladamente porque se le cayó una galletita al piso" },
    { text: "Hablá como si estuvieras narrando una carrera de caracoles en vivo" },
    { text: "Fingí que estás en un programa de cocina sin ingredientes y tenés que improvisar todo" },
    { text: "Simulá que estás haciendo una clase de yoga donde todo te sale mal" },
    { text: "Hablá como un extraterrestre que acaba de aterrizar y no entiende el lenguaje humano" },
    { text: "Contá tu día como si fuera un noticiero trágico y exagerado" },
    { text: "Fingí que sos el creador de una app absurda y hacé su presentación oficial" },
    { text: "Hablá como si fueras una estatua histórica contando anécdotas de siglos pasados" },

];


// Variables del juego
let timer;
let timeLeft = 10;
let currentPlayer = 1;

function startGame() {
    document.getElementById('initialState').classList.add('hidden');
    document.getElementById('gameState').classList.remove('hidden');
    document.getElementById('currentPlayerDisplay').textContent = currentPlayer;

    // Seleccionar opciones aleatorias
    const randomShotIndex = Math.floor(Math.random() * shots.length);
    const randomOptionIndex = Math.floor(Math.random() * ridiculousOptions.length);

    document.getElementById('optionAText').textContent = shots[randomShotIndex];
    document.getElementById('optionBText').textContent = ridiculousOptions[randomOptionIndex].text;

    // Iniciar cuenta regresiva
    startCountdown();
}

function startCountdown() {
    timeLeft = 5; // antes estaba 10
    document.getElementById('countdown').textContent = timeLeft;
    document.getElementById('timerBar').style.width = '100%';

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('countdown').textContent = timeLeft;
        document.getElementById('timerBar').style.width = `${timeLeft * 20}%`; // cambio 10% a 20% porque ahora son 5 seg

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeOut();
        }
    }, 1000);
}

function chooseOption(option) {
    clearInterval(timer);

    const resultState = document.getElementById('resultState');
    const resultText = document.getElementById('resultText');
    const resultTitle = document.getElementById('resultTitle');
    const confirmButton = document.getElementById('confirmButton');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const resultTimerBar = document.getElementById('resultTimerBar');

    document.getElementById('gameState').classList.add('hidden');
    resultState.classList.remove('hidden');
    confirmButton.classList.remove('hidden');
    confirmationMessage.classList.add('hidden');
    resultTimerBar.style.width = '0%';

    // Guardar la opción elegida
    resultState.dataset.choice = option;

    if (option === 'A') {
        const shotText = document.getElementById('optionAText').textContent;
        resultTitle.textContent = "¡VALIENTE!";
        resultText.textContent = `Has elegido la opción A: ${shotText}. ¡Salud! 🍾`;
    } else {
        const ridiculousText = document.getElementById('optionBText').textContent;
        resultTitle.textContent = "¡HUMILLACIÓN!";
        resultText.innerHTML = `Has elegido la opción B:<br><span class="text-blue-300">"${ridiculousText}"</span><br><br>¡Todos a reír! 😆`;
    }
}


function timeOut() {
    const shotText = document.getElementById('optionAText').textContent;

    document.getElementById('gameState').classList.add('hidden');

    const resultState = document.getElementById('resultState');
    const resultText = document.getElementById('resultText');
    const resultTitle = document.getElementById('resultTitle');

    resultState.classList.remove('hidden');
    resultTitle.textContent = "¡DEMASIADO TARDE!";
    resultText.textContent = `¡Te demoraste demasiado! Toma DOBLE de ${shotText}. ¡Castigo! 🥃🥃`;
}

function nextPlayer() {
    currentPlayer++;
    document.getElementById('resultState').classList.add('hidden');
    startGame();
}
function confirmChallenge() {
    const confirmButton = document.getElementById('confirmButton');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const resultTimerBar = document.getElementById('resultTimerBar');
    const choice = document.getElementById('resultState').dataset.choice;

    let message = '';
    if (choice === 'A') {
        message = "🥴 Esperemos que ese trago no te haya matado 10 neuronas...";
    } else {
        message = "😂 ¡La dignidad no se recupera, pero al menos zafaste del shot!";
    }

    confirmationMessage.textContent = message;
    confirmationMessage.classList.remove('hidden');
    confirmButton.classList.add('hidden');

    // Barra de 3 segundos
    let width = 100;
    const interval = 30;
    const step = 100 / (3000 / interval);

    const animation = setInterval(() => {
        width -= step;
        if (width <= 0) {
            width = 0;
            clearInterval(animation);
        }
        resultTimerBar.style.width = width + '%';
    }, interval);

    setTimeout(() => {
        clearInterval(animation);
        nextPlayer();
    }, 3000);
}
