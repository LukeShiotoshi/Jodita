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
      "Comé un trozo de limón con sal",
      "Ponete salsa picante en la mano y chupala",
      "Lavate la cara con bebida gaseosa",
      "Olfateá un calcetín usado sin quejarte",
      "Chupá hielo del suelo",
      "Ponete mostaza en la nariz",
      "Lame un cubierto usado por alguien más",
      "Comé una galletita mojada en agua sucia",
      "Huele la axila de alguien sin avisar",
      "Ponete ketchup en la frente",
      "Chupá una rodaja de cebolla cruda",
      "Sentate en algo húmedo y no digas nada",
      "Tocá algo pegajoso sin guantes",
      "Lavate las manos con cerveza",
      "Ponete papel higiénico en la oreja",
      "Chupá un limón entero sin hacer cara",
      "Lame una silla o mesa",
      "Comé algo del piso sin usar las manos",
      "Bebé de un vaso elegido por otro jugador",
      "Olfateá un dedo de alguien",
      "Chupá el borde de un vaso ajeno",
      "Meté la mano en un tazón con comida rara",
      "Lavate los dientes con salsa",
      "Lame un helado derretido del suelo",
      "Ponete mayonesa en la mano y chupala",
      "Comé un trozo de pepino podrido",
      "Olfateá un zapato cerrado por 5 segundos",
      "Chupá un cubito de hielo del piso",
      "Hacete un bigote con mostaza",
      "Lame la tapa de una botella usada",
      "Ponete salsa picante en la frente",
      "Comé algo mojado en jugo de limón",
      "Tocá un pedazo de comida caída en el piso",
      "Huele el cuello de alguien sin avisar",
      "Chupá la rodilla de alguien sin explicaciones",
      "Lavate la cara con bebida azucarada",
      "Comé una galletita que estuvo en el piso",
      "Ponete un condimento raro en la oreja",
      "Lame un vaso sucio",
      "Comé algo elegido por otro jugador sin mirar",
      "Hacete un bigote de chocolate",
      "Chupá un trozo de limón sin hacer mueca",
      "Sentate en una silla con algo pegajoso",
      "Lavate las manos con salsa de tomate",
      "Lame algo que nadie quiera tocar",
      "Ponete jugo de limón en la cabeza",
      "Comé una rodaja de cebolla sin respirar",
      "Huele los dedos de alguien sin avisar",
      "Chupá un pedazo de comida rara del suelo",
      "Tocá algo mojado y mantenelo en la mano 10 segundos",
      "Lavate la cara con soda",
      "Comé algo mezclado por el grupo sin mirar",
      "Ponete una prenda húmeda por 3 rondas"
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
      "Decí qué droga probarías si no hubiese consecuencias",
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
      "Decí qué droga probarías si no hubiese consecuencias",
      "Contá tu serie favorita que mirás en secreto",
      "Mostrá el snack que más comés en la semana",
      "Confesá cuántos cafés tomás al día",
      "Decí cuál es tu juego digital favorito y por qué",
      "Contá la vez que más tiempo pasaste pegado al celu",
      "Nombrá un hábito raro que tengas en tu casa",
      "Revelá cuánto dinero gastaste en tu hobby más reciente",
      "Contá un vicio que nadie sabe que tenés",
      "Mostrá un sticker o emoji que siempre usás",
      "Confesá tu app favorita para perder el tiempo",
      "Contá tu playlist más random o vergonzosa",
      "Imitá cómo actuás cuando estás enganchado con tu vicio",
      "Nombrá tu snack favorito y hacelo comer a alguien",
      "Decí cuánto tiempo pasás jugando videojuegos por día",
      "Revelá un hobby que te hace sentir raro/a",
      "Contá tu hábito más repetitivo y molesto",
      "Nombrá a alguien del grupo que creas más vicioso que vos",
      "Mostrá un objeto que siempre te acompaña en tu vicio",
      "Confesá qué harías si no pudieras usar tu vicio por un día",
      "Contá tu peor momento por culpa de un vicio",
      "Decí cuál es tu bebida favorita aunque no bebas alcohol",
      "Revelá un secreto relacionado con tu vicio alimenticio",
      "Contá la vez que más te enganchaste con una serie"
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
      "Confesá cuántas veces por semana tenés sexo o tomás",
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
      "Confesá cuántas veces por semana tenés sexo",
      "Imitá un sonido sexy sin decir palabras",
      "Hacé una pose sugerente sin levantarte de la silla",
      "Decí algo que te excite del grupo sin apuntar a nadie",
      "Contá un sueño sexual raro que hayas tenido",
      "Recreá una escena hot de película usando solo gestos",
      "Nombrá un fetiche divertido sin explicarlo",
      "Hacé un sonido de orgasmo exagerado mientras contás un chiste",
      "Decí una fantasía imposible que te gustaría cumplir",
      "Simulá un beso francés con la mano",
      "Hacé un reto íntimo con la imaginación y describilo",
      "Contá un secreto sexual sin dar nombres",
      "Decí la parte del cuerpo que más te gusta en general",
      "Contá tu peor experiencia con un beso",
      "Imitá una reacción sexy exagerada de película",
      "Simulá que alguien te está seduciendo y reaccioná",
      "Nombrá a alguien del grupo que te haría cosquillas sexuales (sin apuntar directo)",
      "Hacé una confesión hot como si fuera un mensaje de texto",
      "Describí un encuentro sexual con un objeto aleatorio",
      "Contá algo que te de vergüenza sexual pero sin nombres",
      "Hacé un gemido usando solo consonantes"
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
      "Contá la vez que más te arrepentiste en una fiesta",
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
      "Contá la vez que más te arrepentiste en una fiesta",
      "Contá la vez que te caíste en público",
      "Relatá un momento en que alguien se rió de vos y fue humillante",
      "Confesá un secreto de tu infancia que nadie sabe",
      "Contá un momento incómodo en una reunión familiar",
      "Relatá tu primer chasco amoroso",
      "Contá algo vergonzoso que hiciste borracho",
      "Revelá un secreto de tu mejor amigo/a",
      "Contá la vez que dijiste algo sin pensar y salió mal",
      "Relatá un momento donde fingiste ser alguien que no sos",
      "Confesá algo que robaste siendo chico",
      "Contá una vez que mentiste para evitar problemas",
      "Relatá una situación ridícula en la escuela",
      "Contá un momento donde te sentiste totalmente expuesto",
      "Revelá una anécdota graciosa sobre tu familia",
      "Contá una vez que te dormiste en un lugar raro",
      "Relatá la vez que te confundiste de lugar o persona",
      "Confesá un secreto que dijiste por accidente",
      "Contá una historia vergonzosa de vacaciones",
      "Revelá una anécdota graciosa con desconocidos"
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
      "Contá tu mayor exceso con alcohol o tomás 2 tragos",
      "Tomá un shot de jugo raro sin quejarte",
      "Hacé 10 saltos con una pierna",
      "Inventá un cóctel sin alcohol y bebelo",
      "Hacé 20 sentadillas rápidas",
      "Decí el abecedario al revés en 5 segundos",
      "Armá una rima improvisada sobre alguien del grupo",
      "Tomá agua con limón sin hacer mueca",
      "Comé algo que no te guste sin usar las manos",
      "Hablá como bebé durante 30 segundos",
      "Decí 5 cosas que te gustan rápido",
      "Hacé equilibrio con un objeto en la cabeza",
      "Ponete una prenda al revés sin mirar",
      "Bailá como si estuvieras en un videoclip famoso",
      "Contá una mentira y hacela creíble",
      "Mandá un emoji random a alguien en el grupo",
      "Decí 3 verdades y 1 mentira y que adivinen",
      "Imitá a alguien del grupo hasta que adivinen",
      "Reíte como villano de película",
      "Cantá una canción que odies",
      "Publicá una historia graciosa que te diga el grupo",
      "Hacé un dibujo con los ojos cerrados y mostralo",
      "Decí una frase graciosa con voz de caricatura",
      "Dejá que alguien controle tu celular por 1 minuto",
      "Hacé flexiones mientras respondés preguntas rápidas",
      "Ponete una bufanda improvisada con papel higiénico",
      "Hacé 10 vueltas caminando en círculo sin caerte",
      "Hablá sin usar vocales durante 20 segundos",
      "Hacé una pose de superhéroe y mantenela",
      "Hacé 5 imitaciones de animales en 30 segundos",
      "Decí el nombre de todos los presentes en orden inverso",
      "Hacé sonidos de instrumentos imaginarios por 30 segundos",
      "Inventá un baile rápido y mostralo",
      "Contá un chiste y hacé que todos se rían",
      "Hacé un trabalenguas rápido sin equivocarte",
      "Decí un refrán mal y hacelo gracioso",
      "Saltá sobre un pie mientras cantás una canción",
      "Hacé mímica de una película sin palabras",
      "Simulá que estás en un comercial ridículo",
      "Hacé un sonido de explosión con el cuerpo",
      "Decí el nombre de todos los colores al revés",
      "Hacé equilibrio con algo sobre tu cabeza mientras cantás",
      "Inventá un grito de guerra y hacelo fuerte",
      "Hacé 5 poses de yoga exageradas",
      "Decí 3 cosas que harías por un premio ridículo",
      "Actuá como un robot durante 30 segundos",
      "Hacé una ronda de aplausos rítmicos sin equivocarte",
      "Imitá a un famoso sin que adivinen",
      "Hacé 10 saltos y decí un número distinto cada vez",
      "Simulá que estás en un programa de TV y vendé algo absurdo",
      "Hacé 3 sonidos de animales en secuencia sin parar"
    ]
  }
];
const usedChallenges = []; // Variable para guardar desafíos ya usados

function getRandomChallenge(category) {
  const availableChallenges = category.challenges.filter(ch => !usedChallenges.includes(ch));
  if (availableChallenges.length === 0) return "Ya se usaron todos los desafíos de esta categoría";
  const randomIndex = Math.floor(Math.random() * availableChallenges.length);
  const selected = availableChallenges[randomIndex];
  usedChallenges.push(selected);
  return selected;
}
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