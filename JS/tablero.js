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
    aventura: {
        colorCls: 'bg-pink-200',
        retos: [
            { texto: 'Salta un obstáculo (avanzas 1)', efecto: { tipo: 'mover', valor: 1 } },
            { texto: 'Pierdes el rumbo (retrocedes 1)', efecto: { tipo: 'mover', valor: -1 } },
            { texto: 'Encuentras un mapa (avanzas 2)', efecto: { tipo: 'mover', valor: 2 } },
            { texto: 'Cruzas un río difícil (esperas un turno)', efecto: { tipo: 'skip', turnos: 1 } },
            { texto: 'Un compañero te ayuda (avanzas 3)', efecto: { tipo: 'mover', valor: 3 } },
            { texto: 'Caes en un pantano (retrocedes 2)', efecto: { tipo: 'mover', valor: -2 } },
            { texto: 'Descansas en un campamento (sin efecto)', efecto: { tipo: 'nada' } },
            { texto: 'Una tormenta te retrasa (retrocedes 3)', efecto: { tipo: 'mover', valor: -3 } },
            { texto: 'Encuentras provisiones (avanzas 2)', efecto: { tipo: 'mover', valor: 2 } },
            { texto: 'Una bestia bloquea el camino (esperas 2 turnos)', efecto: { tipo: 'skip', turnos: 2 } },
            { texto: 'Subes una montaña (avanzas 4)', efecto: { tipo: 'mover', valor: 4 } },
            { texto: 'Pierdes tu mochila (retrocedes 2)', efecto: { tipo: 'mover', valor: -2 } },
            { texto: 'Descubres un atajo secreto (avanzas 5)', efecto: { tipo: 'mover', valor: 5 } },
            { texto: 'Caminas en círculos (retrocedes 1)', efecto: { tipo: 'mover', valor: -1 } }
        ]
    },
    conocimiento: {
        colorCls: 'bg-blue-200',
        retos: [
            { texto: 'Respondes trivia (avanzas 2)', efecto: { tipo: 'mover', valor: 2 } },
            { texto: 'Olvidas la respuesta (esperas un turno)', efecto: { tipo: 'skip', turnos: 1 } },
            { texto: 'Das una explicación brillante (avanzas 3)', efecto: { tipo: 'mover', valor: 3 } },
            { texto: 'Confundes la pregunta (retrocedes 1)', efecto: { tipo: 'mover', valor: -1 } },
            { texto: 'Resuelves un acertijo (avanzas 4)', efecto: { tipo: 'mover', valor: 4 } },
            { texto: 'No entiendes el enunciado (retrocedes 2)', efecto: { tipo: 'mover', valor: -2 } },
            { texto: 'Compartes tu conocimiento (otro jugador avanza 1)', efecto: { tipo: 'dar', valor: 1 } },
            { texto: 'Te quedas en blanco (pierdes próximo turno)', efecto: { tipo: 'skip', turnos: 1 } },
            { texto: 'Citas un dato histórico exacto (avanzas 2)', efecto: { tipo: 'mover', valor: 2 } },
            { texto: 'Respondes mal una suma (retrocedes 1)', efecto: { tipo: 'mover', valor: -1 } },
            { texto: 'Descifras un código (avanzas 5)', efecto: { tipo: 'mover', valor: 5 } },
            { texto: 'Tu respuesta fue incompleta (esperas 1 turno)', efecto: { tipo: 'skip', turnos: 1 } },
            { texto: 'Adivinas la pregunta antes de terminarla (avanzas 3)', efecto: { tipo: 'mover', valor: 3 } }
        ]
    },
    destreza: {
        colorCls: 'bg-green-200',
        retos: [
            { texto: 'Lanzas bien el dado (avanzas 3)', efecto: { tipo: 'mover', valor: 3 } },
            { texto: 'Se te cae la ficha (retrocedes 2)', efecto: { tipo: 'mover', valor: -2 } },
            { texto: 'Equilibrio perfecto (avanzas 2)', efecto: { tipo: 'mover', valor: 2 } },
            { texto: 'Fallás el intento (esperas un turno)', efecto: { tipo: 'skip', turnos: 1 } },
            { texto: 'Haces una jugada épica (avanzas 5)', efecto: { tipo: 'mover', valor: 5 } },
            { texto: 'Te distraés (retrocedes 1)', efecto: { tipo: 'mover', valor: -1 } },
            { texto: 'Mantienes el ritmo (avanzas 1)', efecto: { tipo: 'mover', valor: 1 } },
            { texto: 'Pierdes el control (retrocedes 3)', efecto: { tipo: 'mover', valor: -3 } },
            { texto: 'Superas una prueba física (avanzas 4)', efecto: { tipo: 'mover', valor: 4 } },
            { texto: 'Te tropiezas (retrocedes 2)', efecto: { tipo: 'mover', valor: -2 } },
            { texto: 'Reflejos rápidos (avanzas 2)', efecto: { tipo: 'mover', valor: 2 } },
            { texto: 'Manos temblorosas (esperas 1 turno)', efecto: { tipo: 'skip', turnos: 1 } },
            { texto: 'Completás un reto difícil (avanzas 6)', efecto: { tipo: 'mover', valor: 6 } }
        ]
    },
    suerte: {
        colorCls: 'bg-yellow-200',
        retos: [
            { texto: 'Encuentras un atajo (avanzas 4)', efecto: { tipo: 'mover', valor: 4 } },
            { texto: 'Te resbalas (pierdes el próximo turno)', efecto: { tipo: 'skip', turnos: 1 } },
            { texto: 'Tirada de dado afortunada (avanzas 6)', efecto: { tipo: 'mover', valor: 6 } },
            { texto: 'Pisas una trampa (retrocedes 3)', efecto: { tipo: 'mover', valor: -3 } },
            { texto: 'Un aliado te salva (avanzas 2)', efecto: { tipo: 'mover', valor: 2 } },
            { texto: 'Mala racha (retrocedes 4)', efecto: { tipo: 'mover', valor: -4 } },
            { texto: 'Giras la fortuna (cambias lugar con otro jugador)', efecto: { tipo: 'cambiar' } },
            { texto: 'Encuentras monedas (avanzas 1)', efecto: { tipo: 'mover', valor: 1 } },
            { texto: 'Pierdes todo de golpe (retrocedes 5)', efecto: { tipo: 'mover', valor: -5 } },
            { texto: 'Ganas un premio inesperado (avanzas 3)', efecto: { tipo: 'mover', valor: 3 } },
            { texto: 'Caes en mala suerte (esperas 2 turnos)', efecto: { tipo: 'skip', turnos: 2 } },
            { texto: 'Doble fortuna (vuelves a tirar)', efecto: { tipo: 'extraTurno' } },
            { texto: 'Se rompe tu amuleto (retrocedes 2)', efecto: { tipo: 'mover', valor: -2 } }
        ]
    }
};

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
const gameScreen  = document.getElementById('game-screen');

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
  const dadoEl  = document.getElementById('dado-value');

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
    // 1. Declara y limpia el contenedor aquí
    const tableroContainer = document.getElementById('tablero');
    tableroContainer.innerHTML = '';
    tablero = [];

    // 2. Prepara y mezcla categorías
    let asignaciones = [];
    Object.keys(categorias).forEach(key => {
        for (let i = 0; i < 9; i++) asignaciones.push(key);
    });
    asignaciones.sort(() => Math.random() - 0.5);

    // 3. Crea y añade las 36 casillas
    asignaciones.forEach((catKey, idx) => {
        const num = idx + 1;
        const cat = categorias[catKey];
        const reto = cat.retos[Math.floor(Math.random() * cat.retos.length)];

        tablero.push({ numero: num, categoria: catKey, reto });

        const div = document.createElement('div');
        div.className = `
      casilla relative h-16 rounded-lg flex items-center justify-center
      text-sm font-bold ${cat.colorCls} text-gray-800`;
        div.innerHTML = `
      <span>${num}</span>
      <div id="fichas-${num}" class="absolute inset-0"></div>
    `;
        div.addEventListener('click', () => {
            const jugador = jugadores[jugadorActual];
            const estaEnEsta = posiciones[jugador] === num;
            mostrarModalCasilla(tablero[num - 1], estaEnEsta);
        });

        // 4. Aquí sí existe y puedes hacer appendChild
        tableroContainer.appendChild(div);
    });

    // 5. Una vez creadas, pinta las fichas
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
  const jugador   = jugadores[jugadorActual];
  const origen    = posiciones[jugador] ?? 0;
  let   destino   = origen + resultado;
  if (destino > tablero.length) destino = tablero.length;

  // 1. Mostrar resultado del dado
  document.getElementById('modal-dado-resultado').textContent = resultado;
  document.getElementById('modal-dado-mensaje').textContent   =
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
  const jugador  = jugadores[jugadorActual];
  const pos      = posiciones[jugador];
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
