let prompt = [];
const promptnuevo = [
    "El que más probablemente se haya chapado a alguien sin recordar el nombre",
    "El que más ha fingido un orgasmo en su vida",
    "El que tiene el historial de navegación más turbio",
    "El que más likely se ha enamorado de su mejor amig@",
    "El que ha mandado más nudes por error",
    "El que más ha llorado por un ex",
    "El que más ha stalkeado a su crush en redes sociales",
    "El que más probablemente se ha comido algo del piso",
    "El que más ha pedido fiado en el kiosco",
    "El que más ha fingido estar enfermo para no trabajar",
    "El que más ha copiado en un examen",
    "El que más probablemente se haya meado encima de adulto",
    "El que más ha fantaseado con su jefe/profe",
    "El que más ha llegado tarde por quedarse dormido",
    "El que más ha comido comida de la basura",
    "El que más ha bailado como langosta en una fiesta",
    "El que más ha llorado viendo una película animada",
    "El que más ha cantado en el baño pensando que nadie escuchaba",
    "El que más ha comido algo caducado a propósito",
    "El que más ha ghosteado a alguien",
    "El que más probablemente se haya chapado a alguien sin recordar el nombre",
    "El que más ha fingido un orgasmo en su vida",
    "El que tiene el historial de navegación más turbio",
    "El que más likely se ha enamorado de su mejor amig@",
    "El que ha mandado más nudes por error",
    "El que más ha llorado por un ex",
    "El que más ha stalkeado a su crush en redes sociales",
    "El que más probablemente se ha comido algo del piso",
    "El que más ha pedido fiado en el kiosco",
    "El que más ha fingido estar enfermo para no trabajar",
    "El que más ha copiado en un examen",
    "El que más probablemente se haya meado encima de adulto",
    "El que más ha fantaseado con su jefe/profe",
    "El que más ha llegado tarde por quedarse dormido",
    "El que más ha comido comida de la basura",
    "El que más ha bailado como langosta en una fiesta",
    "El que más ha llorado viendo una película animada",
    "El que más ha cantado en el baño pensando que nadie escuchaba",
    "El que más ha cantado karaoke en voz alta en casa",
    "El que más ha fingido dolor de cabeza para evadir planes",
    "El que más ha enviado un audio de un minuto sin mensaje de texto",
    "El que más ha usado filtro de perro en videollamada por accidente",
    "El que más ha chismeado por chat con el altavoz activado",
    "El que más ha bailado solo frente al espejo",
    "El que más ha llorado comiendo helado viendo telenovela",
    "El que más ha olvidado dónde aparcó el auto",
    "El que más ha criticado al jefe en el chat equivocado",
    "El que más ha recuperado una conversación eliminada para curiosear",
    "El que más se ha enamorado de un personaje de serie",
    "El que más ha comprado ropa sin probársela jamás",
    "El que más ha sufrido la resaca en cámara lenta",
    "El que más ha escrito un mensaje SOS de borracho",
    "El que más ha comido pizza fría al día siguiente",
    "El que más ha olvidado apagar el micrófono en Zoom",
    "El que más ha activado el modo avión para cortar llamadas",
    "El que más ha fingido gusto por un regalo horrible",
    "El que más ha hecho doble check azul y no respondió",
    "El que más ha borrado archivos importantes por accidente",
    "El que más ha perdido el control de sus filtros de Instagram",
    "El que más ha leído el horóscopo y actuado según él",
    "El que más ha enviado capturas de pantalla a escondidas",
    "El que más ha iniciado un chat grupal sin nadie respondiendo",
    "El que más ha intentado ligar con una IA",
    "El que más ha pedido comida a medianoche y olvidó la dirección",
    "El que más ha hablado dormido y asustado a su pareja",
    "El que más ha bailado reggaetón en pijama",
    "El que más ha dado like a fotos de hace años en Instagram",
    "El que más ha jurado amor eterno por WhatsApp",
    "El que más ha enviado memes inadecuados al chat equivocado",
    "El que más ha reproducido música vergonzosa en público",
    "El que más ha fingido saber de arte para impresionar",
    "El que más ha practicado un discurso frente al espejo",
    "El que más ha comprado entradas a eventos para olvidarlos",
    "El que más ha guardado screenshots comprometedoras",
    "El que más ha puesto excusas ridículas para cortar amistad",
    "El que más ha retuiteado sin verificar la fuente",
    "El que más ha dejado en visto a su crush por días",
    "El que más ha usado emojis para explicar sus emociones",
    "El que más ha hablado con su reflejo en el espejo",
    "El que más se ha atragantado con una carcajada",
    "El que más ha olvidado su nombre al presentarse",
    "El que más ha dejado mensajes de voz de más de un minuto",
    "El que más ha enviado GIFs tóxicos a su ex",
    "El que más ha probado cambios de look por impulso",
    "El que más ha formado un trending topic sin querer",
    "El que más ha dormido con el teléfono en la mano",
    "El que más ha usado TikTok para 'estudiar'",
    "El que más ha fingido entender memes en otro idioma",
    "El que más ha hablado consigo mismo en voz alta en público",
    "El que más ha olvidado el cumpleaños de alguien importante",
    "El que más ha fingido señal débil de internet para evadir una videollamada",
    "El que más ha comprado comida para terminar tirándola",
    "El que más ha enviado mensajes a la persona equivocada a las 3 AM",
    "El que más ha visto una serie completa en una sola noche",
    "El que más ha sobrevivido a base de café y menos de cuatro horas de sueño",
    "El que más ha hecho scroll infinito en redes sociales sin encontrar nada bueno",
    "El que más ha llevado calcetines desparejados sin darse cuenta",
    "El que más ha perdido el teléfono en casa y lo ha encontrado en el refri",
    "El que más ha hablado con su mascota pensando que le respondía",
    "El que más ha usado la excusa de «lo vi en Internet» para impresionar",
    "El que más ha cancelado planes a última hora por pereza",
    "El que más ha cantado en el coche creyendo que nadie lo escuchaba",
    "El que más se ha quedado dormido en clase o en una reunión virtual",
    "El que más ha sacado selfies comprometedoras borrosas",
    "El que más ha fingido entender un chiste para no pasar vergüenza",
    "El que más ha intentado adivinar contraseñas de Wi-Fi ajenas",
    "El que más ha empezado una conversación incómoda en un ascensor",
    "El que más ha usado pijama como si fuera ropa de calle",
    "El que más ha comido algo caducado a propósito",
    "El que más ha ghosteado a alguien"
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
    // Elementos del DOM
    const phraseDisplay = document.getElementById('current-phrase');
    const newPhraseBtn = document.getElementById('new-phrase-btn');
    const phraseCounter = document.getElementById('phrase-counter');
    const totalprompt = document.getElementById('total-prompt');

    // Estado del juego
    let usedprompt = [];
    let currentPhraseIndex = 0;

    // Inicialización
    function initGame() {
        totalprompt.textContent = prompt.length;
        phraseCounter.textContent = '0';
        console.log('Juego inicializado correctamente');
    }

    // Función simplificada para obtener frase aleatoria
    function getRandomPhrase() {
        // Si ya usamos todas las frases, reiniciamos
        if (usedprompt.length >= prompt.length) {
            usedprompt = [];
            alert('¡Se reinician las frases! Comienza de nuevo.');
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * prompt.length);
        } while (usedprompt.includes(randomIndex));

        usedprompt.push(randomIndex);
        currentPhraseIndex = usedprompt.length;

        return {
            text: prompt[randomIndex],
            index: currentPhraseIndex
        };
    }

    // Función para mostrar nueva frase con animación
    function showNewPhrase() {
        try {
            const newPhraseData = getRandomPhrase();

            // Animación de desvanecimiento
            phraseDisplay.style.transition = 'all 0.3s ease';
            phraseDisplay.style.opacity = '0';
            phraseDisplay.style.transform = 'translateY(20px)';

            setTimeout(() => {
                phraseDisplay.textContent = newPhraseData.text;


                // Restaurar opacidad y posición
                phraseDisplay.style.opacity = '1';
                phraseDisplay.style.transform = 'translateY(0)';

                // Reproducir sonido de neón
                playNeonSound();

                console.log('Nueva frase mostrada:', newPhraseData.text);
            }, 300);

        } catch (error) {
            console.error('Error al mostrar nueva frase:', error);
            phraseDisplay.textContent = '¡Error! Intenta de nuevo.';
        }
    }

    // Efecto de sonido de neón
    function playNeonSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.3);

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (error) {
            console.log('Audio context no disponible en este navegador');
        }
    }

    // Event Listeners
    function setupEventListeners() {
        // Click en el botón
        newPhraseBtn.addEventListener('click', function () {
            console.log('Botón clickeado - mostrando nueva frase');
            showNewPhrase();
        });

        // Teclado - espacio o enter
        document.addEventListener('keydown', function (e) {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                console.log('Tecla presionada - mostrando nueva frase');
                showNewPhrase();
            }
        });

        // Touch para dispositivos móviles
        newPhraseBtn.addEventListener('touchstart', function (e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
        });

        newPhraseBtn.addEventListener('touchend', function (e) {
            e.preventDefault();
            this.style.transform = 'scale(1)';
            showNewPhrase();
        });
    }

    // Manejo de errores global
    window.addEventListener('error', function (e) {
        console.error('Error global:', e.error);
        alert('Ocurrió un error. Por favor, recarga la página.');
        initGame();
        setupEventListeners();
    });
    window.showNewPhrase = showNewPhrase;
window.initGame = initGame;
initGame();
setupEventListeners();
});