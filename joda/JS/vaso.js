
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
    { text: "Simulá que te estás despidiendo de una película dramática" }

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
