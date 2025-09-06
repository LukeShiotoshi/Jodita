const categories = [
    {
        name: "Asquerosos",
        color: ["#a3e635", "#84cc16"],
        challenges: [
            "Lame el piso y mantené contacto visual con alguien",
            "Olfateá la axila de la persona a tu derecha",
            "Comé una cucharada de algo elegido por el grupo",
            "Huele los dedos de los pies de alguien",
            "Bebé del vaso de otro sin usar las manos",
            "Lame una silla o una mesa",
            "Ponete medias mojadas durante 3 rondas",
            "Chupá una rodaja de cebolla cruda",
            "Comé algo sin usar las manos como un perro",
            "Pasate desodorante de otra persona",
            "Lavate los dientes con cerveza",
            "Hacete un bigote con mayonesa",
            "Ponete papel higiénico (limpio) en la oreja",
            "Olfateá el ombligo de alguien",
            "Pasá la lengua por una cuchara usada",
            "Comé algo del piso sin las manos",
            "Jugá una ronda con un zapato en la boca (sin cerrar)",
            "Lavate las manos con bebida",
            "Tomá de una botella sin saber qué tiene",
            "Comé una mezcla hecha por otros jugadores",
            "Chupá hielo del piso",
            "Pasate una rodaja de limón por la axila",
            "Comé una galletita mojada en agua con sal",
            "Ponete mostaza en la frente",
            "Compartí cepillo de dientes (real o actuado)",
            "Tomá un trago con una pajita usada",
            "Sentate en algo húmedo y no expliques nada",
            "Olfateá la boca de alguien que recién comió",
            "Lavate las manos con soda",
            "Comé algo mientras alguien te cuenta algo repulsivo",
        ]
    },
    {
        name: "Colectivos",
        color: ["#22c55e", "#14b8a6"],
        challenges: [
            "Bailen todos sin música durante 1 minuto",
            "Todos deben cambiar una prenda de ropa con alguien",
            "El grupo inventa un reto para alguien",
            "Todos deben imitar un animal al mismo tiempo",
            "Formen una fila y hagan una ola de gritos",
            "Hagan una ronda de aplausos inventados",
            "Todos tienen que hablar como robots una ronda",
            "Cámbiense todos los lugares en círculo",
            "Hagan un abrazo grupal de 10 segundos",
            "Cada uno imita al que tiene a la izquierda",
            "Hagan una selfie todos apretados",
            "Todos deben bailar un ritmo al azar",
            "Repitan una frase absurda en coro",
            "Pasen un objeto con la boca entre todos",
            "Elijan a alguien para que no hable por 2 rondas",
            "Todos inventan un apodo para alguien",
            "Intercambien celulares y escriban algo en el buscador",
            "Pasen una prenda en ronda hasta que suene un timer",
            "Hagan una ronda de gritos de animales",
            "Todos se ponen una prenda ajena",
            "Elijan una palabra prohibida para todos",
            "Cambien nombres por apodos hasta nueva orden",
            "Jueguen piedra-papel-tijera todos a la vez",
            "Formen una cadena humana y caminen por la casa",
            "Todos deben contar una mentira como si fuera verdad",
            "Compartan una anécdota entre todos por turnos",
            "Hagan una ola coreográfica",
            "Todos tienen que tomarse un shot sincronizados",
            "Elijan un castigo colectivo si alguien pierde",
            "Cambien de asiento sin romper el círculo",
        ]
    },
    {
        name: "Vicios",
        color: ["#3b82f6", "#6366f1"],
        challenges: [
            "Confesá tu peor vicio actual",
            "Todos votan quién es el más vicioso: hace un reto",
            "El que menos toma hace un shot doble",
            "Contá la vez que más te pasaste de copas",
            "Mostrá el historial de YouTube sin editar",
            "¿Cuál es tu peor hábito nocturno?",
            "Contá cuánto gastás en tu vicio por semana",
            "Recreá tu peor resaca",
            "Mostrá una foto que represente tu peor vicio",
            "Hacé como si fumás con estilo exagerado",
            "Contá una vez que tuviste que ocultar tu vicio",
            "Nombrá un vicio que no abandonarías nunca",
            "Confesá un vicio que no sabían de vos",
            "Contá qué harías por un paquete de papas ahora",
            "¿Sos más de vicios físicos o digitales?",
            "Contá la peor excusa que diste por un vicio",
            "Nombrá a quién del grupo le ves más vicios",
            "¿Tenés un vicio oculto? Revelalo o tomás",
            "Hacé como si estuvieras en abstinencia extrema",
            "Confesá un vicio que te avergüenza",
            "Imitá a alguien con un vicio exagerado",
            "¿Cuál es tu guilty pleasure?",
            "Inventá un vicio falso y hacelo creíble",
            "Contá qué app no podrías borrar nunca",
            "Mostrá cuántas horas usaste el celular hoy",
            "Elegí entre tu vicio o 1 semana sin celular",
            "Hacé una ronda sin mencionar tu vicio",
            "Recreá una excusa para no salir por quedarte con tu vicio",
            "Decí qué droga probarías si no hubiese consecuencias"
        ]
    },
    {
        name: "Sexo",
        color: ["#be123c", "#dc2626"],
        challenges: [
            "Imitá tu posición sexual favorita",
            "Besá a alguien del grupo durante 10 segundos",
            "Elegí a alguien para un reto íntimo",
            "Decí a quién del grupo te cogerías sin pensarlo",
            "Decí cuál fue tu peor experiencia sexual",
            "Mostrá tu cara de orgasmo",
            "Hablá sucio",
            "Besá algo como si fuera alguien",
            "Simulá un gemido exagerado",
            "Decí a quién besarías con los ojos cerrados",
            "Contá si tuviste sexo en un lugar raro",
            "Revelá si estuviste con más de una persona a la vez",
            "¿Con cuántos te chapaste en una noche?",
            "Confesá si alguna vez tuviste sexo sin ganas",
            "Simulá un beso con la palma",
            "Revelá si alguna vez fingiste",
            "Contá con qué famoso/a te gustaría tener sexo",
            "Decí tu fetiche más raro",
            "¿Preferís sexo con amor o sin compromiso?",
            "Contá tu edad cuando lo hiciste por primera vez",
            "Imitá un gemido en otro idioma",
            "Simulá una charla hot por chat",
            "Contá tu mayor miedo en la cama",
            "Decí tu parte favorita del cuerpo de alguien presente",
            "Contá si alguna vez te cortaron las ganas",
            "Simulá una escena hot de película",
            "Decí una frase hot sin reírte",
            "Contá con cuántos estuviste el último año",
            "Nombrá tu lugar favorito para hacerlo",
            "Confesá cuántas veces por semana tenés sexo o tomás"
        ]
    },
    {
        name: "Anécdotas",
        color: ["#ef4444", "#ec4899"],
        challenges: [
            "Contá tu experiencia más vergonzosa en la cama",
            "Confesá tu fantasía más prohibida",
            "Relatá tu encuentro sexual más raro",
            "Confesá algo que hiciste y te arrepentís",
            "Contá tu peor cita",
            "Confesá una mentira que mantuviste años",
            "Contá una anécdota con una ex",
            "Relatá una noche que salió muy mal",
            "Contá una vez que lloraste por amor",
            "Confesá una anécdota que nunca contaste",
            "Contá algo ilegal que hiciste",
            "Contá un momento incómodo con tus viejos",
            "Relatá tu borrachera más peligrosa",
            "Confesá un secreto de viaje",
            "Contá tu experiencia más vergonzosa en público",
            "Revelá una infidelidad (propia o ajena)",
            "Contá una vez que arruinaste la fiesta",
            "Reviví una pelea fuerte con alguien",
            "Contá cómo fue tu primera vez en todo",
            "Contá algo que hiciste sin que nadie se entere",
            "Relatá tu peor metida de pata",
            "Contá una vez que te perdiste mal",
            "Revelá algo que hiciste solo por encajar",
            "Confesá un robo 'inocente'",
            "Contá una vez que fingiste para zafar",
            "Reviví un momento donde te sentiste un desastre",
            "Contá la historia detrás de una cicatriz",
            "Revelá algo que pasó en un boliche y nadie supo",
            "Contá una vez que rompiste algo caro",
            "Contá la vez que más te arrepentiste en una fiesta"
        ]
    },
    {
        name: "Desafíos",
        color: ["#f97316", "#eab308"],
        challenges: [
            "Tomá un shot de la bebida más fuerte que haya",
            "Hacé 10 flexiones sin parar o tomás doble",
            "Inventá un cóctel con 3 ingredientes random y bebelo",
            "Tomá fernet puro sin hacer cara",
            "Tomá un shot sin hacer mueca",
            "Hacé 20 sentadillas rápido",
            "Decí el abecedario al revés",
            "Armá una rima improvisada sobre alguien",
            "Tomá agua con sal",
            "Comé una galletita con mostaza",
            "Hablá como bebé toda una ronda",
            "Decí 5 apellidos del grupo rápido",
            "Hacé equilibrio con algo en la cabeza",
            "Ponete una prenda al revés",
            "Bailá como si estuvieras en un videoclip",
            "Hacé una historia falsa sobre tu vida",
            "Mandá un emoji random a tu contacto más reciente",
            "Decí 3 verdades y 1 mentira",
            "Imitá a alguien del grupo hasta que adivinen",
            "Reíte como una carcajada malvada",
            "Cantá un tema que odies",
            "Publicá una historia que el grupo te diga (podés borrar)",
            "Hacé un dibujo con los ojos cerrados",
            "Decí una frase sexy con voz de dibujo animado",
            "Dejá que alguien controle tu celular por 1 minuto",
            "Hacé flexiones mientras alguien te hace preguntas",
            "Ponete una bufanda improvisada con papel",
            "Hacé 10 vueltas caminando en círculo",
            "Hablá sin usar vocales",
            "Contá tu mayor exceso con alcohol o tomás 2 tragos"
        ]
    }
];
let isSpinning = false;
let currentRotation = 0;
let idleTimer;

document.addEventListener('mousemove', resetIdle);
document.addEventListener('keydown', resetIdle);

function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    showToast('¿Estás pensando o simplemente disfrutando el silencio?');
  }, 15000);
}

function getNeonColor(name) {
  const tones = {
    "Sexo": "#ff3366",
    "Vicios": "#ff9900",
    "Asquerosos": "#33ff66",
    "Colectivos": "#33ccff",
    "Desafíos": "#cc33ff",
    "Anécdotas": "#ffff33"
  };
  return tones[name] || "#ffffff";
}


function initRuleta() {
  const ruleta = document.getElementById('ruleta');
  const container = ruleta.parentElement;
  const segmentAngle = 360 / categories.length;
  const gradientStops = categories.map((cat, i) => {
    const start = i * segmentAngle;
    const end = (i + 1) * segmentAngle;
    return `${cat.color[0]} ${start}deg ${end}deg`;
  }).join(',');
document.querySelectorAll('.active-neon-border').forEach(el => el.remove());
  ruleta.style.background = `conic-gradient(from 0deg, ${gradientStops})`;
  ruleta.innerHTML = '';
  ruleta.style.position = 'relative';

  const radius = ruleta.offsetWidth / 2;

  categories.forEach((cat, i) => {
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = cat.name;

    const angle = i * segmentAngle + segmentAngle / 2 - 90;

    Object.assign(label.style, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transformOrigin: '0 0',
      transform: `rotate(${angle}deg) translate(${radius * 0.6}px)`,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      textShadow: '1px 1px 2px black'
    });

    ruleta.appendChild(label);
  });

  let selector = document.getElementById('selector');
  if (!selector) {
    selector = document.createElement('div');
    selector.id = 'selector';

    Object.assign(selector.style, {
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translate(-50%, -100%) rotate(180deg)',
      width: '0',
      height: '0',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '20px solid #fff',
      outline: '1px solid #000'
    });

    container.style.position = 'relative';
    container.appendChild(selector);
  }
}

function spinRuleta() {
  if (isSpinning) return;
  isSpinning = true;
  document.getElementById('spinButton').disabled = true;
  const ruleta = document.getElementById('ruleta');
  const spinDuration = 2500;
  const extraRotations = 5;
  const randomAngle = Math.floor(Math.random() * 360);
  const rotationAmount = extraRotations * 360 + randomAngle;
  currentRotation += rotationAmount;
  ruleta.style.transition = `transform ${spinDuration}ms linear`;
  ruleta.style.transform = `rotateZ(${currentRotation + 90}deg)`;

  setTimeout(() => {
    isSpinning = false;
    document.getElementById('spinButton').disabled = false;
    const finalAngle = (currentRotation + 90) % 360;
    const normalized = (360 - finalAngle) % 360;
    const segmentAngle = 360 / categories.length;
    const selectedIndex = Math.floor(normalized / segmentAngle);
    const selectedCategory = categories[selectedIndex];
    const randomChallengeIndex = Math.floor(Math.random() * selectedCategory.challenges.length);
    displayResult(selectedCategory, selectedCategory.challenges[randomChallengeIndex]);
    ruleta.style.transition = '';
  }, spinDuration);
}

function getCategoryAnimation(name) {
  const animations = {
    "Sexo": "animate-pulse",
    "Vicios": "animate-shake",
    "Asquerosos": "animate-squeeze",
    "Colectivos": "animate-spring",
    "Desafíos": "animate-bounce",
    "Anécdotas": "animate-fadein"
  };
  return animations[name] || "animate-pop";
}

let lastChallenge = null;

function displayResult(category, challenge) {
  const resultDisplay = document.getElementById('resultDisplay');
  let extra = "";

  if (challenge === lastChallenge) {
    extra = `<div class="mt-4 text-sm text-yellow-400 italic">La ruleta se repite... ¿señal divina?</div>`;
  }

  lastChallenge = challenge;

  resultDisplay.innerHTML = `
    <div class="text-center w-full ${getCategoryAnimation(category.name)}">
      <div class="text-lg md:text-xl mb-4 text-transparent bg-clip-text"
           style="background-image: linear-gradient(to right, ${category.color[0]}, ${category.color[1]});">
        ${category.name}
      </div>
      <div class="text-xl md:text-2xl font-bold mb-6 px-4">
        "${challenge}"
      </div>
      <div class="flex justify-center">
        <div class="w-16 h-1 rounded-full"
             style="background-image: linear-gradient(to right, ${category.color[0]}, ${category.color[1]});">
        </div>
      </div>
      ${extra}
    </div>
  `;

  resultDisplay.classList.add('transform', 'scale-110');
  setTimeout(() => resultDisplay.classList.remove('transform', 'scale-110'), 300);
}

function checkCategoryExhaustion(category) {
  if (!category.challenges.length) {
    document.getElementById('ruleta').style.background = 'conic-gradient(from -90deg, gold 0deg 360deg)';
    showToast("¡La categoría se agotó! Se invoca el modo legendario.");
  }
}

document.getElementById('spinButton').addEventListener('click', spinRuleta);
window.addEventListener('DOMContentLoaded', initRuleta);