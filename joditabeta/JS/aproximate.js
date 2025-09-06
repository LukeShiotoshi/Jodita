let players = [];
let currentRound = 1;
let currentScores = {};
let currentReaderIndex = 0;
let roundPoints = {};

let questions = [
    "¿Cuál es la distancia promedio entre la Tierra y la Luna en kilómetros?",
    "¿En qué año se fundó la ciudad de Roma?",
    "¿Cuántos elementos hay en la tabla periódica actualmente?",
    "¿Qué temperatura alcanza la superficie del Sol en grados Celsius?",
    "¿Cuál es la profundidad máxima del Océano Pacífico en metros?",
    "¿En qué año murió Leonardo da Vinci?",
    "¿Cuántos huesos tiene el cuerpo humano adulto?",
    "¿Qué velocidad alcanza la luz en el vacío en km/s?",
    "¿Cuál es la altura del Monte Everest en metros?",
    "¿En qué año se escribió Don Quijote de la Mancha?",
    "¿Cuál es el río más largo del mundo?",
    "¿En qué país se encuentra la Gran Muralla China?",
    "¿Cuántos planetas hay en el sistema solar?",
    "¿Qué gas respiramos principalmente?",
    "¿Cuál es la capital de Francia?",
    "¿Quién pintó la Mona Lisa?",
    "¿Qué continente tiene más países?",
    "¿Cuál es el animal terrestre más rápido?",
    "¿En qué año llegó el hombre a la Luna?",
    "¿Cuál es la capital de Japón?",
    "¿Cuál es el metal más abundante en la corteza terrestre?",
    "¿Qué instrumento mide la presión atmosférica?",
    "¿Cuál es el océano más grande del mundo?",
    "¿Quién escribió Hamlet?",
    "¿Cuál es el planeta más grande del sistema solar?",
    "¿Qué vitamina se produce con la luz solar?",
    "¿Cuál es el desierto más grande del mundo?",
    "¿Qué fuerza mantiene a los planetas en órbita?",
    "¿Cuál es el idioma más hablado del mundo?",
    "¿Quién descubrió la penicilina?",
    "¿Cuál es el país con mayor población actualmente?",
    "¿Qué órgano bombea la sangre en el cuerpo humano?",
    "¿Cuál es la capital de Australia?",
    "¿Qué estrella es el centro de nuestro sistema solar?",
    "¿Cuál es la ciudad más poblada del mundo?",
    "¿Qué planeta es conocido como el planeta rojo?",
    "¿Quién fue Albert Einstein?",
    "¿Qué fenómeno causa los eclipses?",
    "¿Cuál es el elemento químico con símbolo O?",
    "¿Qué río pasa por Egipto?",
    "¿Cuál es el país más grande del mundo por superficie?",
    "¿Qué sistema protege al cuerpo de infecciones?",
    "¿Cuál es la capital de Italia?",
    "¿Qué órgano produce insulina?",
    "¿Cuál es la moneda de Estados Unidos?",
    "¿Qué continente tiene menos países?",
    "¿Cuál es la montaña más alta de América del Sur?",
    "¿Qué animal es conocido por cambiar de color?",
    "¿Quién inventó el teléfono?",
    "¿Cuál es la velocidad del sonido en aire aproximada en m/s?",
    "¿Qué país tiene forma de bota?",
    "¿Qué planeta tiene anillos visibles?",
    "¿Qué metal es líquido a temperatura ambiente?",
    "¿Quién escribió Cien años de soledad?",
    "¿Cuál es la capital de Canadá?",
    "¿Qué animal pone huevos y da leche?",
    "¿Qué instrumento mide la temperatura?",
    "¿Cuál es la capital de Alemania?",
    "¿Qué continente tiene más desiertos?",
    "¿Cuál es el lago más profundo del mundo?",
    "¿Qué gas utilizamos en los globos aerostáticos para flotar?",
    "¿Qué país es conocido por el tango?",
    "¿Cuál es la capital de Rusia?",
    "¿Qué planeta es más cercano al Sol?",
    "¿Quién escribió La Odisea?",
    "¿Qué metal se usa para hacer monedas y cables eléctricos?",
    "¿Cuál es la capital de España?",
    "¿Qué tipo de energía proviene del Sol?",
    "¿Qué órgano filtra la sangre y produce orina?",
    "¿Cuál es la capital de México?",
    "¿Qué ave no puede volar pero nada muy bien?",
    "¿Quién pintó La última cena?",
    "¿Cuál es la velocidad de la Tierra alrededor del Sol en km/h?",
    "¿Qué país tiene más volcanes activos?",
    "¿Cuál es la capital de Argentina?",
    "¿Qué elemento químico tiene símbolo Fe?",
    "¿Qué fenómeno produce arcoíris?",
    "¿Cuál es el planeta más lejano del sistema solar?",
    "¿Qué órgano del cuerpo produce bilis?",
    "¿Qué continente es conocido como la cuna de la humanidad?",
    "¿Cuál es el país más pequeño del mundo?",
    "¿Qué sustancia transporta oxígeno en la sangre?",
    "¿Quién escribió Romeo y Julieta?",
    "¿Cuál es la capital de Brasil?",
    "¿Qué animal tiene la lengua más larga relativa a su cuerpo?",
    "¿Qué océano toca África y América del Sur?",
    "¿Quién fue Marie Curie?",
    "¿Qué instrumento mide la intensidad del sonido?",
    "¿Cuál es la capital de China?",
    "¿Qué continente está al sur de Europa?",
    "¿Cuál es la ciudad más antigua habitada continuamente?",
    "¿Qué planeta es el más pequeño del sistema solar?",
    "¿Quién fue Nikola Tesla?",
    "¿Cuál es la capital de India?",
    "¿Qué tipo de sangre es universalmente donante?",
    "¿Qué metal precioso es amarillo y brillante?",
    "¿Cuál es la capital de Egipto?",
    "¿Qué órgano es principal en el sistema digestivo?",
    "¿Qué gas es esencial para la fotosíntesis?",
    "¿Cuál es la capital de Sudáfrica?",
    "¿Qué animal tiene la memoria más larga conocida?",
    "¿Qué continente tiene mayor biodiversidad?",
    "¿Quién inventó la bombilla eléctrica?",
    "¿Qué planeta tiene más lunas conocidas?",
    "¿Cuál es la capital de Turquía?",
    "¿Qué sustancia constituye la mayor parte del cuerpo humano?",
    "¿Qué animal tiene cuernos en espiral?",
    "¿Cuál es el continente más frío del planeta?",
    "¿Qué país produce más café en el mundo?",
    "¿Quién escribió El Principito?",
    "¿Cuál es la capital de Noruega?",
    "¿Qué animal puede dormir de pie?",
    "¿Qué elemento tiene símbolo Au?",
    "¿Cuál es la capital de Grecia?",
    "¿Qué planeta tiene mayor densidad en el sistema solar?",
    "¿Qué mineral se usa en lápices?",
    "¿Quién descubrió América?",
    "¿Cuál es la capital de Suecia?",
    "¿Qué animal tiene pico pero no dientes?",
    "¿Qué gas es responsable del efecto invernadero?",
    "¿Cuál es la capital de Chile?",
    "¿Qué tipo de roca es el granito?",
    "¿Qué órgano produce hormonas sexuales?",
    "¿Cuál es la capital de Portugal?",
    "¿Qué animal tiene el corazón más grande en proporción a su cuerpo?",
    "¿Qué continente tiene más selvas tropicales?",
    "Quién inventó el avión?"
];

let answers = [
  384400, // distancia Tierra-Luna
  753, // fundación de Roma
  118, // elementos en la tabla periódica
  5500, // temperatura del Sol
  10911, // profundidad del Pacífico
  1519, // muerte de Da Vinci
  206, // huesos del cuerpo humano
  299792, // velocidad de la luz
  8848, // altura del Everest
  1605, // Don Quijote
  "Amazonas", // río más largo
  "China", // país de la Muralla
  8, // planetas del sistema solar
  "Oxígeno", // gas que respiramos
  "París", // capital de Francia
  "Leonardo da Vinci", // pintor de la Mona Lisa
  "África", // continente con más países
  "Guepardo", // animal terrestre más rápido
  1969, // llegada a la Luna
  "Tokio", // capital de Japón
  "Aluminio", // metal más abundante
  "Barómetro", // instrumento de presión
  "Océano Pacífico", // océano más grande
  "Shakespeare", // autor de Hamlet
  "Júpiter", // planeta más grande
  "Vitamina D", // vitamina por luz solar
  "Antártida", // desierto más grande
  "Gravedad", // fuerza orbital
  "Chino mandarín", // idioma más hablado
  "Alexander Fleming", // penicilina
  "China", // país más poblado
  "Corazón", // órgano que bombea sangre
  "Canberra", // capital de Australia
  "Sol", // estrella del sistema solar
  "Tokio", // ciudad más poblada
  "Marte", // planeta rojo
  "Científico", // quién fue Einstein
  "Alineación Tierra-Luna", // causa de eclipses
  "Oxígeno", // símbolo O
  "Nilo", // río de Egipto
  "Rusia", // país más grande
  "Sistema inmunológico", // defensa del cuerpo
  "Roma", // capital de Italia
  "Páncreas", // produce insulina
  "Dólar", // moneda de EE.UU.
  "Oceanía", // continente con menos países
  "Aconcagua", // montaña más alta de Sudamérica
  "Camaleón", // cambia de color
  "Alexander Graham Bell", // inventor del teléfono
  343, // velocidad del sonido
  "Italia", // país con forma de bota
  "Saturno", // planeta con anillos
  "Mercurio", // metal líquido
  "Gabriel García Márquez", // autor de Cien años
  "Ottawa", // capital de Canadá
  "Ornitorrinco", // pone huevos y da leche
  "Termómetro", // mide temperatura
  "Berlín", // capital de Alemania
  "África", // continente con más desiertos
  "Lago Baikal", // lago más profundo
  "Helio", // gas en globos aerostáticos
  "Argentina", // país del tango
  "Moscú", // capital de Rusia
  "Mercurio", // planeta más cercano al Sol
  "Homero", // autor de La Odisea
  "Cobre", // metal en monedas y cables
  "Madrid", // capital de España
  "Energía solar", // energía del Sol
  "Riñón", // filtra sangre y produce orina
  "Ciudad de México", // capital de México
  "Pingüino", // ave que nada pero no vuela
  "Leonardo da Vinci", // pintor de La última cena
  107000, // velocidad de la Tierra
  "Indonesia", // país con más volcanes activos
  "Buenos Aires", // capital de Argentina
  "Hierro", // símbolo Fe
  "Refracción de la luz", // causa del arcoíris
  "Neptuno", // planeta más lejano
  "Hígado", // produce bilis
  "África", // cuna de la humanidad
  "Vaticano", // país más pequeño
  "Hemoglobina", // transporta oxígeno
  "Shakespeare", // autor de Romeo y Julieta
  "Brasilia", // capital de Brasil
  "Camaleón", // lengua más larga relativa
  "Océano Atlántico", // toca África y Sudamérica
  "Cientifica Ganadora de 2 nobel", // científica
  "Decibelímetro", // mide intensidad sonora
  "Beijing", // capital de China
  "África", // continente al sur de Europa
  "Damasco", // ciudad más antigua habitada
  "Mercurio", // planeta más pequeño
  "Inventor", // quién fue Tesla
  "Nueva Delhi", // capital de India
  "O-", // sangre universal donante
  "Oro", // metal precioso amarillo
  "El Cairo", // capital de Egipto
  "Estómago", // órgano digestivo principal
  "CO2", // gas esencial para fotosíntesis
  "Pretoria", // capital de Sudáfrica
  "Elefante", // mejor memoria animal
  "América del Sur", // mayor biodiversidad
  "Thomas Edison", // inventor de la bombilla
  "Saturno", // planeta con más lunas
  "Ankara", // capital de Turquía
  "Agua", // sustancia dominante en el cuerpo
  "Cabra montés", // cuernos en espiral
  "Antártida", // continente más frío
  "Brasil", // mayor productor de café
  "Antoine de Saint-Exupéry", // autor de El Principito
  "Oslo", // capital de Noruega
  "Caballo", // duerme de pie
  "Oro", // símbolo Au
  "Atenas", // capital de Grecia
  "Tierra", // planeta más denso
  "Grafito", // mineral en lápices
  "Cristóbal Colón", // descubridor de América
  "Estocolmo", // capital de Suecia
  "Pato", // pico sin dientes
  "CO2", // gas del efecto invernadero
  "Santiago", // capital de Chile
  "Ígnea", // tipo de roca del granito
  "Gónadas", // producen hormonas sexuales
  "Lisboa", // capital de Portugal
  "Colibrí", // corazón más grande relativo
  "América del Sur", // más selvas tropicales
  "Hermanos Wright" // inventores del avión
];


// Pool dinámico de preguntas
let questionPoolOriginal = questions.map((q, i) => ({
    question: q,
    answer: answers[i]
}));

let questionPool = [];
questions.forEach((q, i) => {
    const a = answers[i];
    const tipoRespuesta = typeof a;
    const sospechoso =
        (tipoRespuesta === 'number' && a < 10) || // números demasiado bajos
        (tipoRespuesta === 'string' && a.length < 2) || // respuestas muy cortas
        a === null || a === undefined;

    if (sospechoso) {
        console.warn(`⚠️ Posible error en: "${q}" → "${a}"`);
    }
});


function agregarSinRepetirNuevasPreguntas(nuevas, acumulador) {
    nuevas.forEach(p => {
        if (!acumulador.some(q => q.question === p.question)) {
            acumulador.push(p);
        }
    });
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addPlayer();
    }
}

function addPlayer() {
    const nameInput = document.getElementById('playerName');
    const name = nameInput.value.trim();

    if (name && !players.includes(name)) {
        players.push(name);
        currentScores[name] = 0;

        const playerList = document.getElementById('playersList');
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
            <span class="player-name" id="score-${name}">${name} - 0 pts</span>
        `;
        playerList.appendChild(playerItem);

        nameInput.value = '';
        document.getElementById('startBtn').disabled = players.length < 2;
    }
}

function startGame() {
    if (players.length < 2) {
        alert('¡Se necesitan al menos 2 jugadores!');
        return;
    }

    agregarSinRepetirNuevasPreguntas(questionPoolOriginal, questionPool);

    document.getElementById('playerSetup').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    setupRound();
}

function setupRound() {
    if (questionPool.length === 0) {
        agregarSinRepetirNuevasPreguntas(questionPoolOriginal, questionPool);
        console.log('✅ Pool de preguntas recargado');
    }

    roundPoints = {};
    players.forEach(player => {
        roundPoints[player] = false;
    });

    currentReaderIndex = (currentRound - 1) % players.length;
    const currentReader = players[currentReaderIndex];
    document.getElementById('readerDisplay').innerHTML = `🤖 Ahora lee: <strong>${currentReader}</strong>`;

    const idx = Math.floor(Math.random() * questionPool.length);
    const preguntaActual = questionPool.splice(idx, 1)[0];

    document.getElementById('currentQuestion').textContent = preguntaActual.question;
    document.getElementById('correctAnswer').textContent = preguntaActual.answer;
    document.getElementById('roundNumber').textContent = currentRound;

    const scoreControls = document.getElementById('scoreControls');
    scoreControls.innerHTML = '';

    players.forEach((player, index) => {
        if (index === currentReaderIndex) return;

        const scoreControl = document.createElement('div');
        scoreControl.className = 'score-input';
        scoreControl.innerHTML = `
            <span class="player-name">${player} - ${currentScores[player]} pts</span>
            <div class="score-controls">
                <button class="score-btn" onclick="togglePoint('${player}')" id="btn-${player}">✓</button>
            </div>
        `;
        scoreControls.appendChild(scoreControl);
        updateButtonState(player);
    });
}

function togglePoint(player) {
    roundPoints[player] = !roundPoints[player];
    updateButtonState(player);
}

function updateButtonState(player) {
    const button = document.getElementById(`btn-${player}`);
    if (roundPoints[player]) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

function nextQuestion() {
    Object.keys(roundPoints).forEach(player => {
        if (roundPoints[player]) {
            currentScores[player]++;
        }
        const scoreSpan = document.getElementById(`score-${player}`);
        if (scoreSpan) {
            scoreSpan.textContent = `${player} - ${currentScores[player]} pts`;
        }
    });

    currentRound++;

    if (questionPool.length > 0) {
        setupRound();
    } else {
        endGame();
    }

}

function endGame() {
    let resultMessage = "¡Juego terminado!\n\nResultados finales:\n";

    players.forEach((player, index) => {
        resultMessage += `${index + 1}. ${player}: ${currentScores[player]} puntos\n`;
    });

    const maxScore = Math.max(...Object.values(currentScores));
    const winners = players.filter(player => currentScores[player] === maxScore && maxScore > 0);

    if (winners.length === 1) {
        resultMessage += `\n🎉 ¡Ganador: ${winners[0]} con ${maxScore} puntos!`;
    } else if (winners.length > 1) {
        resultMessage += `\n🎉 ¡Empate entre: ${winners.join(', ')} con ${maxScore} puntos cada uno!`;
    }

    alert(resultMessage);

    players = [];
    currentRound = 1;
    currentScores = {};
    currentReaderIndex = 0;
    roundPoints = {};
    questionPool = [];

    document.getElementById('playersList').innerHTML = '';
    document.getElementById('playerName').value = '';
    document.getElementById('startBtn').disabled = true;

    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('playerSetup').classList.remove('hidden');
}