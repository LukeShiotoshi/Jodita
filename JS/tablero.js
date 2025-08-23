const turnosSaltados = {};
const extraTurnos = {};  // contador de tiros extra

// Límite de jugadores
const MAX_JUGADORES = 16;

// Genera 16 colores vibrantes con HSL (o pon tu propio array de hex)
const coloresFichas = Array.from(
    { length: MAX_JUGADORES },
    (_, i) => `hsl(${(i * 360) / MAX_JUGADORES}, 80%, 50%)`
);

const posicionesFichas = [
    { top: '5%', left: '5%' },     // 1: esquina superior izquierda
    { top: '5%', right: '5%' },     // 2: esquina superior derecha
    { bottom: '5%', left: '5%' },    // 3: esquina inferior izquierda
    { bottom: '5%', right: '5%' },   // 4: esquina inferior derecha
    { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' } // 5: centro
];
// Mensajes para las 36 casillas - estilo fernet de menta
const categorias = {
    picante: {
        colorCls: 'bg-blue-300',
        retos: [
            { texto: '¿Cuál es tu mayor fantasía?' },
            { texto: '¿Con quién del grupo tendrías una cita secreta?' },
            { texto: '¿Alguna vez tuviste un sueño erótico con alguien conocido?' },
            { texto: '¿Qué es lo más raro que te excita?' },
            { texto: '¿Preferís hacerlo con luz o sin luz?' },
            { texto: '¿Cuál es tu parte del cuerpo favorita?' },
            { texto: '¿Qué es lo más hot que hiciste en un lugar público?' },
            { texto: '¿Con cuántas personas chapaste en una noche?' },
            { texto: '¿Qué preferís: besos largos o rápidos?' },
            { texto: '¿Quién de acá te parece más atractivo?' },
            { texto: '¿Te gusta mandar o que te manden?' },
            { texto: '¿Cuál es tu postura favorita?' },
            { texto: '¿Alguna vez fuiste infiel?' },
            { texto: '¿Qué es lo más atrevido que mandaste por chat?' },
            { texto: '¿Qué famoso/a te calienta más?' },
            { texto: '¿Qué es lo más raro que buscaste en páginas xxx?' },
            { texto: '¿Tenés un “crush prohibido”?' },
            { texto: '¿Cuándo fue la última vez que te chapaste a alguien?' },
            { texto: '¿Alguna vez tuviste una experiencia de una sola noche?' },
            { texto: '¿Preferís romance lento o acción rápida?' }
        ]
    },
    romance: {
        colorCls: 'bg-red-300',
        retos: [
            { texto: '¿Quién fue tu primer amor?' },
            { texto: '¿Quién te dio tu mejor beso?' },
            { texto: '¿Alguna vez te enamoraste de alguien imposible?' },
            { texto: '¿Cuál fue tu peor cita?' },
            { texto: '¿Qué es lo más cursi que hiciste por alguien?' },
            { texto: '¿Te gustó alguien de tu grupo de amigos?' },
            { texto: '¿Creés en el amor a primera vista?' },
            { texto: '¿Quién fue tu crush más fuerte?' },
            { texto: '¿Cuál es la canción que te recuerda a alguien especial?' },
            { texto: '¿Alguna vez escribiste una carta de amor?' },
            { texto: '¿Qué cosa romántica odiás?' },
            { texto: '¿Qué es lo que más te enamora de alguien?' },
            { texto: '¿Perdonarías una infidelidad?' },
            { texto: '¿Qué regalo de amor fue el mejor que recibiste?' },
            { texto: '¿Alguna vez te rompieron el corazón?' },
            { texto: '¿Tenés una cita soñada en mente?' },
            { texto: '¿Qué fue lo más tierno que te hicieron?' },
            { texto: '¿Alguna vez lloraste por amor?' },
            { texto: '¿Cuál es tu película romántica favorita?' },
            { texto: '¿Sos detallista en el amor?' }
        ]
    },
    verguenza: {
        colorCls: 'bg-green-300',
        retos: [
            { texto: '¿Cuál fue tu momento más vergonzoso?' },
            { texto: '¿Alguna vez te caíste frente a mucha gente?' },
            { texto: '¿Qué es lo más ridículo que usaste de ropa?' },
            { texto: '¿Te equivocaste de chat y mandaste algo comprometido?' },
            { texto: '¿Cuál fue tu peor papelón en público?' },
            { texto: '¿Contá un secreto que nunca dijiste a nadie.' },
            { texto: '¿Cuál fue tu peor nota en la escuela?' },
            { texto: '¿Cuál es tu apodo más feo?' },
            { texto: '¿Qué es lo más estúpido que compraste?' },
            { texto: '¿Alguna vez te quedaste dormido en clase o trabajo?' },
            { texto: '¿Qué fue lo último que googleaste que da vergüenza?' },
            { texto: '¿Alguna vez dijiste “te amo” de más?' },
            { texto: '¿Cuál fue tu peor fail con alguien que te gustaba?' },
            { texto: '¿Cuál es tu miedo más raro?' },
            { texto: '¿Alguna vez mentiste para zafar de algo y te descubrieron?' },
            { texto: '¿Qué es lo más vergonzoso que te pasó con tu familia?' },
            { texto: '¿Qué canción sabés de memoria pero te da vergüenza admitir?' },
            { texto: '¿Cuál fue la peor foto tuya viralizada?' },
            { texto: '¿Alguna vez lloraste en público?' },
            { texto: '¿Qué es lo más raro que hacías de chico?' }
        ]
    },
    toma: {
        colorCls: 'bg-yellow-300',
        retos: [
            { texto: '¡Qué mala leche! Tomate un shot.' },
            { texto: 'Buena tirada, repartí 3 tragos.' },
            { texto: 'Ups… doble shot para vos.' },
            { texto: 'Se te cayó la ficha, todos menos vos toman.' },
            { texto: 'Brindis obligatorio, todos toman un sorbo.' },
            { texto: 'Premio raro: elegí a alguien que se clave dos tragos.' },
            { texto: '¡Re hidratate! Tomá agua o alcohol, pero tomá.' },
            { texto: 'Castigo: pasás tu bebida a la derecha.' },
            { texto: 'Fortuna absurda: inventá un brindis y todos toman.' },
            { texto: 'Caíste en “la maldición del vaso vacío”: terminá lo que te queda.' },
            { texto: 'Que tragedia… servite un shot bien cargado.' },
            { texto: 'Buen karma: elegí a alguien para que no tome.' },
            { texto: 'Regalá tu próximo trago a otro.' },
            { texto: 'Tirada mística: el más alto del grupo toma 2.' },
            { texto: 'Qué bajón, todos los que usan zapatillas toman.' },
            { texto: 'Invertido: si no querés tomar, bailá 10 segundos ridículamente.' },
            { texto: 'Regla boba: a partir de ahora no se puede decir “sí”. El que falle toma.' },
            { texto: 'Mala fortuna: te toca fondo blanco.' },
            { texto: 'Error de sistema: todos menos vos reparten un trago.' },
            { texto: 'Excepción absurda: el último que habló toma ya mismo.' }
        ]
    }
};

// Acumulador por categoría
const retosUsados = {
    aventura: [],
    conocimiento: [],
    destreza: [],
    suerte: []
};

function obtenerRetoAleatorio(categoria) {
    const disponibles = categorias[categoria].retos;
    const usados = retosUsados[categoria];

    // Si se agotaron, reiniciamos
    if (usados.length >= disponibles.length) {
        retosUsados[categoria] = [];
        console.log(`🔁 Se reinician los retos de ${categoria}`);
    }

    // Agregamos los que faltan sin repetir
    agregarSinRepetir(disponibles, retosUsados[categoria]);

    // Elegimos uno al azar y lo eliminamos del acumulador
    const idx = Math.floor(Math.random() * retosUsados[categoria].length);
    const reto = retosUsados[categoria].splice(idx, 1)[0];

    return reto;
}

let jugadores = [];
let jugadorActual = 0;
let posiciones = {};
let tablero = [];
let juegoActivo = false;

// Inicializar el juego
function inicializarJuego() {
    actualizarBotonComenzar();

}

// Agregar jugador
function agregarJugador() {
    const input = document.getElementById('nuevo-jugador');
    const nombre = input.value.trim();

    if (nombre && jugadores.length < MAX_JUGADORES) {
        jugadores.push(nombre);
        posiciones[nombre] = 1;
        input.value = '';
        actualizarListaJugadores();
        actualizarBotonComenzar();
    }
}

// Actualizar lista de jugadores en pantalla inicial
function actualizarListaJugadores() {
    const lista = document.getElementById('jugadores-lista');
    lista.innerHTML = '';

    jugadores.forEach((jugador, index) => {
        const colorFicha = coloresFichas[index % coloresFichas.length];

        const div = document.createElement('div');
        div.className = 'flex items-center justify-between p-3 bg-gray-700 rounded';
        div.innerHTML = `
                    <div class="flex items-center">
                        <span class="text-white">${jugador}</span>
                        <div class="ficha-preview" style="background: ${colorFicha}" title="Color de tu ficha"></div>
                    </div>
                    <span class="text-gray-400 text-sm">Ficha ${index + 1}</span>
                `;
        lista.appendChild(div);
    });
}

const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');

function actualizarBotonComenzar() {
    const btn = document.getElementById('comenzar-juego');
    btn.disabled = jugadores.length < 2;
}
// Inicializa el turno: activa el juego y muestra el primer jugador
function iniciarTurno() {
    juegoActivo = true;
    jugadorActual = 0;
    document.getElementById('jugador-turno').textContent = jugadores[jugadorActual];
}

// Actualiza todo el panel de juego: turno y último valor del dado
function actualizarInterfazJuego() {
    const turnoEl = document.getElementById('jugador-turno');
    const dadoEl = document.getElementById('dado-value');

    if (!turnoEl || !dadoEl) {
        console.error('Falta #jugador-turno o #dado-value en el DOM');
        return;
    }

    // Actualizar nombre del jugador
    let texto = jugadores[jugadorActual];
    if ((extraTurnos[jugadores[jugadorActual]] || 0) > 0) {
        texto += ' 🔄';
    }
    turnoEl.textContent = texto;

    // Reiniciar valor del dado
    dadoEl.textContent = '?';
}


function comenzarJuego() {
    if (jugadores.length < 2) return;

    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    juegoActivo = true;            // <–– activa el juego
    iniciarTurno();
    generarTablero();
    actualizarInterfazJuego();     // o actualizarInterfaz, según tu nombre real

}




// Generar tablero 6x6 con 4 grupos de colores
function generarTablero() {
    const tableroContainer = document.getElementById('tablero');
    tableroContainer.innerHTML = '';
    tablero = [];

    const ordenCategorias = ['picante', 'romance', 'verguenza', 'toma'];

    for (let i = 0; i < 66; i++) {
        const num = i + 1;
        const catKey = ordenCategorias[i % ordenCategorias.length];
        const cat = categorias[catKey];
        const reto = cat.retos[Math.floor(Math.random() * cat.retos.length)];

        tablero.push({ numero: num, categoria: catKey, reto });

        const div = document.createElement('div');
        div.className = `
  casilla relative aspect-square rounded-lg flex items-center justify-center
  text-xs sm:text-sm font-bold ${cat.colorCls} text-gray-800
`;
        div.innerHTML = `
          <span>${num}</span>
          <div id="fichas-${num}" class="absolute inset-0"></div>
        `;
        div.addEventListener('click', () => {
            const jugador = jugadores[jugadorActual];
            const estaEnEsta = posiciones[jugador] === num;
            mostrarModalCasilla(tablero[num - 1], estaEnEsta);
        });
        tableroContainer.appendChild(div);
    }
    actualizarFichasEnTablero();
}


// Actualizar fichas en el tablero
function actualizarFichasEnTablero() {
    // Limpia todos los contenedores
    for (let i = 1; i <= 36; i++) {
        const cont = document.getElementById(`fichas-${i}`);
        if (cont) cont.innerHTML = '';
    }

    // Agrupa jugadores por casilla
    const ocupantes = {};
    jugadores.forEach(jug => {
        const pos = posiciones[jug];
        if (!ocupantes[pos]) ocupantes[pos] = [];
        ocupantes[pos].push(jug);
    });

    // Dibuja fichas
    Object.entries(ocupantes).forEach(([pos, listaJug]) => {
        // 1) Buscamos el contenedor de fichas para esta posición
        const cont = document.getElementById(`fichas-${pos}`);
        if (!cont) {
            console.warn(`Contenedor fichas-${pos} no encontrado en el DOM`);
            return;  // salta a la siguiente posición si no existe
        }

        // 2) Pintamos cada ficha dentro del contenedor existente
        listaJug.forEach((jug, idx) => {
            const stylePos = posicionesFichas[idx] || posicionesFichas[4];
            const ficha = document.createElement('div');
            ficha.className = 'ficha-jugador absolute w-4 h-4 rounded-full';
            ficha.style.backgroundColor = coloresFichas[jugadores.indexOf(jug)];
            ficha.title = jug;

            Object.assign(ficha.style, stylePos);
            ficha.style.opacity = '1';

            cont.appendChild(ficha);
        });
    });
}


// Tirar dado
function tirarDado() {
    if (!juegoActivo) return;

    const resultado = Math.ceil(Math.random() * 6);
    const jugador = jugadores[jugadorActual];
    const origen = posiciones[jugador] ?? 0;
    let destino = origen + resultado;
    if (destino > tablero.length) destino = tablero.length;

    // 1. Mostrar resultado del dado
    document.getElementById('modal-dado-resultado').textContent = resultado;
    document.getElementById('modal-dado-mensaje').textContent =
        `Avanzas de ${origen} a ${destino}`;
    document.getElementById('modal-resultado').classList.remove('hidden');

    // 2. Actualizar la posición y pintar la ficha de fondo
    posiciones[jugador] = destino;
    actualizarFichasEnTablero();

    // 3. Auto-cerrar en 1.5 segundos
    setTimeout(() => {
        cerrarModalResultado();
    }, 1500);
}



// Mostrar modal de resultado
function mostrarModalResultado(resultado, nuevaPosicion) {
    const modal = document.getElementById('modal-resultado');
    document.getElementById('modal-dado-resultado').textContent = resultado;
    document.getElementById('modal-dado-mensaje')
        .textContent = `${jugadores[jugadorActual]} avanzó a la casilla ${nuevaPosicion}`;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    setTimeout(() => {
        modal.classList.add('hidden');
        const casillaObj = tablero.find(c => c.numero === nuevaPosicion);
        mostrarModalCasilla(casillaObj);
    }, 1200);
}
// Cerrar modal de resultado
function cerrarModalResultado() {
    document.getElementById('modal-resultado').classList.add('hidden');
    document.getElementById('modal-resultado').classList.remove('flex');
    actualizarFichasEnTablero();
    actualizarInterfazJuego();

}

// Mostrar modal de casilla especial
function mostrarModalCasilla(casillaObj, aplicaEfecto) {
    const modal = document.getElementById('modal-casilla');
    document.getElementById('modal-titulo').textContent =
        `Casilla ${casillaObj.numero}`;
    document.getElementById('modal-casilla-numero').textContent =
        casillaObj.numero;
    document.getElementById('modal-descripcion').textContent =
        casillaObj.reto.texto;
    document.getElementById('modal-casilla').classList.remove('hidden');

    // guarda si al cerrar debe aplicar el efecto
    modal.dataset.aplica = aplicaEfecto ? '1' : '0';
    // guardas reto y jugador tal y como antes
    modal.dataset.reto = JSON.stringify(casillaObj.reto);
    modal.dataset.jugador = jugadores[jugadorActual];

    modal.classList.remove('hidden');
}


// Cerrar modal de casilla
function cerrarModalCasilla() {
    const modal = document.getElementById('modal-casilla');
    const aplica = modal.dataset.aplica === '1';
    document.getElementById('modal-casilla').classList.add('hidden');

    // Lógica de efecto ya aplicada...
    // Ahora avanzamos al siguiente jugador
    jugadorActual = (jugadorActual + 1) % jugadores.length;
    actualizarInterfazJuego();

    // Cierra inmediatamente la ventana de info
    modal.classList.add('hidden');

    if (!aplica) {
        // era solo un “preview”: sales sin tocar nada
        return;
    }

    // … aquí va TODO tu switch de efectos, animaciones y cambio de turno …
    const reto = JSON.parse(modal.dataset.reto);
    const jug = modal.dataset.jugador;
    let pasaTurno = true;
    const prevPos = posiciones[jug];

    switch (reto.efecto.tipo) {
        case 'mover':
            posiciones[jug] = Math.min(36, Math.max(1, prevPos + reto.efecto.valor));
            break;
        // skip, dar, cambiar, extraTurno, nada…
    }

    animarFichas(prevPos, posiciones[jug], jug, () => {
        actualizarFichasEnTablero();
        actualizarInterfazJuego();
        if (pasaTurno) jugadorActual = (jugadorActual + 1) % jugadores.length;
    });
}
function showModalDar(origen, valor) {
    const modal = document.getElementById('modal-dar');
    const lista = document.getElementById('dar-lista');
    lista.innerHTML = '';

    jugadores.filter(j => j !== origen).forEach(j => {
        const btn = document.createElement('button');
        btn.textContent = j;
        btn.className = 'px-3 py-1 bg-blue-500 text-white rounded';
        btn.onclick = () => {
            posiciones[j] = Math.min(36, posiciones[j] + valor);
            cerrarModalDar();
        };
        lista.appendChild(btn);
    });

    modal.classList.remove('hidden');
}

function cerrarModalDar() {
    document.getElementById('modal-dar').classList.add('hidden');
    actualizarFichasEnTablero();
    actualizarInterfazJuego();
    jugadorActual = (jugadorActual + 1) % jugadores.length;
}
function cerrarModalResultado() {
    document.getElementById('modal-resultado').classList.add('hidden');
    // Abre directo el modal de la casilla actual
    const jugador = jugadores[jugadorActual];
    const pos = posiciones[jugador];
    mostrarModalCasilla(tablero[pos - 1], true);

}

function animarFichas(from, to, jugador, callback) {
    const step = to > from ? 1 : -1;
    const pasos = [];
    for (let pos = from + step; step > 0 ? pos <= to : pos >= to; pos += step) {
        pasos.push(pos);
    }

    const idxJugador = jugadores.indexOf(jugador);
    const color = coloresFichas[idxJugador];
    let i = 0;

    function moverUnPaso() {
        // 1) Quita la ficha de la casilla anterior
        const prevPos = i === 0 ? from : pasos[i - 1];
        const contPrev = document.getElementById(`fichas-${prevPos}`);
        const fichaPrev = [...contPrev.children]
            .find(div => div.title === jugador);
        if (fichaPrev) contPrev.removeChild(fichaPrev);

        // 2) Pone la ficha en la siguiente casilla
        const posActual = pasos[i];
        const contAct = document.getElementById(`fichas-${posActual}`);
        const ficha = document.createElement('div');
        ficha.className = 'ficha-jugador absolute w-4 h-4 rounded-full jump';
        ficha.title = jugador;
        ficha.style.backgroundColor = color;
        Object.assign(ficha.style, posicionesFichas[idxJugador] || posicionesFichas[0]);
        contAct.appendChild(ficha);

        i++;
        if (i < pasos.length) {
            // espera 200ms antes de saltar a la siguiente celda
            setTimeout(moverUnPaso, 200);
        } else if (typeof callback === 'function') {
            // al terminar la ruta, ejecuta el callback (ej. mostrar modal)
            callback();
        }
    }

    moverUnPaso();
}

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', inicializarJuego);
