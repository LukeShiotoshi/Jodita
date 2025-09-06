const veredictos = [
  "Vos, el de la remera negra, confesá un secreto o tomás 3.",
  "Decime tu crush del grupo o te hacés un shot de lo que haya más cerca.",
  "Mostrá tu historial de Google o regalá tu prenda favorita de lo que tenés puesto.",
  "Inventate un apodo hot para vos mismo y usalo hasta el final del juego.",
  "Chupale el cuello a alguien o decí en voz alta tu última fantasía sexual.",
  "Besá al que esté a tu izquierda o tomás 5 sin respirar.",
  "Mandale un emoji sugerente al último contacto que no sea familia o te vas quedando sin medias.",
  "Actuá cómo gemís o alguien lo hace por vos y comparan.",
  "Tocá el pecho o culo de alguien con consentimiento, o pasás una ronda con los ojos vendados.",
  "Contá tu peor experiencia sexual o dejás que otro te invente una y la actuás.",
  "Le mandás un audio a alguien diciendo 'la pasé increíble anoche' y no podés explicar nada hasta mañana.",
  "Comé algo sin usar las manos o dejás que alguien te dé de comer lo que quiera.",
  "Contá una vez que estuviste con alguien y después descubriste algo turbio.",
  "Hacete un striptease de 10 segundos o te lo hace otro por vos.",
  "Mandale un mensaje a tu ex diciendo 'todavía pienso en vos' o te tocás la nariz cada vez que hablás por el resto del juego.",
  "Decí quién creés que es el mejor en la cama del grupo o dejás que te elijan pareja para un baile lento.",
  "Parate, cerrá los ojos y dejá que alguien te bese donde quiera (sin pasar la raya obvio).",
  "El que tenga menos ropa ahora tiene el poder de hacerte cualquier pregunta incómoda.",
  "Contá una vez que mentiste para tener sexo o inventate una historia tan creíble que el grupo no sepa si fue real.",
  "Si tenés más de 3 apps de citas instaladas, tomás 2. Si no, mostrás tu galería.",
  "Mostrá tu outfit interior (sin sacarte nada) o que alguien más lo describa como se lo imagina.",
  "Tenés 10 segundos para seducir al que tenés más cerca. Si no se ríe, tomás vos. Si se ríe, toma él/ella.",
  "Le pasás el celu a alguien al azar para que publique una historia y no podés borrarla por 1 hora.",
  "Actuá cómo seducís a alguien por mensaje usando solo una frase. Si nadie se calienta, prenda menos.",
  "Pedile a alguien del grupo que te dé una nalgada. Si se niega, ambos toman doble.",
  "Nombrá a dos personas que te cogerías del grupo, pero con una excusa que lo justifique.",
  "Contá tu fetiche más raro o hacé una demostración improvisada.",
  "Hacé una pose tipo revista de gimnasio y mantenela hasta que alguien te saque foto.",
  "Elegí a alguien para tener 'mirada intensa'. Si alguien parpadea, toma.",
  "Decí a quién te besarías si estuvieran solos esta noche. Si no respondés, te besan a vos.",
  "Vos, el de la remera negra, confesá un secreto o tomás 3",
  "Decime tu crush del grupo o te hacés un shot de lo que haya más cerca",
  "Mostrá tu historial de Google o regalá tu prenda favorita de lo que tenés puesto",
  "Inventate un apodo hot para vos mismo y usalo hasta el final del juego",
  "Chupale el cuello a alguien o decí en voz alta tu última fantasía sexual",
  "Besá al que esté a tu izquierda o tomás 5 sin respirar",
  "Mandale un emoji sugerente al último contacto que no sea familia o te vas quedando sin medias",
  "Actuá cómo gemís o alguien lo hace por vos y comparan",
  "Tocá el pecho o culo de alguien con consentimiento, o pasás una ronda con los ojos vendados",
  "Contá tu peor experiencia sexual o dejás que otro te invente una y la actuás",
  "Le mandás un audio a alguien diciendo 'la pasé increíble anoche' y no podés explicar nada hasta mañana",
  "Comé algo sin usar las manos o dejás que alguien te dé de comer lo que quiera",
  "Contá una vez que estuviste con alguien y después descubriste algo turbio",
  "Hacete un striptease de 10 segundos o te lo hace otro por vos",
  "Mandale un mensaje a tu ex diciendo 'todavía pienso en vos' o te tocás la nariz cada vez que hablás por el resto del juego",
  "Decí quién creés que es el mejor en la cama del grupo o dejás que te elijan pareja para un baile lento",
  "Parate, cerrá los ojos y dejá que alguien te bese donde quiera (sin pasar la raya obvio)",
  "El que tenga menos ropa ahora tiene el poder de hacerte cualquier pregunta incómoda",
  "Contá una vez que mentiste para tener sexo o inventate una historia tan creíble que el grupo no sepa si fue real",
  "Si tenés más de 3 apps de citas instaladas, tomás 2, si no, mostrás tu galería",
  "Mostrá tu outfit interior (sin sacarte nada) o que alguien más lo describa como se lo imagina",
  "Tenés 10 segundos para seducir al que tenés más cerca, si no se ríe, tomás vos, si se ríe, toma él/ella",
  "Le pasás el celu a alguien al azar para que publique una historia y no podés borrarla por 1 hora",
  "Actuá cómo seducís a alguien por mensaje usando solo una frase, si nadie se calienta, prenda menos",
  "Pedile a alguien del grupo que te dé una nalgada, si se niega, ambos toman doble",
  "Nombrá a dos personas que te cogerías del grupo, pero con una excusa que lo justifique",
  "Contá tu fetiche más raro o hacé una demostración improvisada",
  "Hacé una pose tipo revista de gimnasio y mantenela hasta que alguien te saque foto",
  "Elegí a alguien para tener 'mirada intensa', si alguien parpadea, toma",
  "Decí a quién te besarías si estuvieran solos esta noche, si no respondés, te besan a vos",
  "Le pasás tus chats fijos al de tu derecha y que elija uno para leer en voz alta, o tomás 4.",
  "Mandale un '¿Pensás en mí a veces?' a alguien que no hablás hace meses o cambiás tu nombre en WhatsApp por 'Calentura andante' hasta que termine el juego.",
  "Hacete una autofoto con cara sexy y ponela de fondo de pantalla o dejás que alguien más te la saque.",
  "Agarrá el celu del de tu izquierda y dejá una nota de voz diciendo 'Me estás volviendo loco' en el grupo que elija, o tomás sin chistar.",
  "Andá a mirarte al espejo y decite algo caliente como si fueras otra persona. Si no te creés nada, tomás doble.",
  "Simulá cómo te sacás la ropa con ganas o te sacás una prenda al azar sin usar las manos.",
  "Agarrá la mano de alguien y contá en detalle cómo sería una noche con esa persona. Si te trabás, tomás.",
  "Mostrá tu fondo de pantalla sin avisar. Si hay algo que no querías que se vea, igual se ve, o tomás.",
  "Jugá a piedra, papel o tijera con el de al lado. El que pierde le da un piquito al otro o toma 3.",
  "Tenés que hablar como si estuvieras excitado/a por 1 minuto o dejás que otro lo haga por vos y lo imitás.",
  "Escribí en notas algo que nunca dijiste en voz alta y mostrás solo la nota. Si alguien adivina de qué trata, tomás.",
  "Hacé que alguien te saque una foto sexy, pero solo podés posar como influencer. Si no sale buena, tomás.",
  "Armá un tuit que empiece con 'A veces sueño con...' y postealo o tomás hasta que alguien se ría.",
  "Llamá a alguien y decile 'Me calentás más de lo que debería' sin contexto o el grupo elige un reto físico para vos.",
  "Caminá sensual hasta el otro extremo del lugar y volvé como si volvieras de una aventura. Si no lo actuás bien, doble castigo.",
  "Reaccioná con fuego a 3 historias random de Instagram. Si te preguntan por qué, no podés responder hasta el otro día.",
  "Te hacés el dormido/a y alguien tiene que despertarte 'a su manera'. Si no lo logran, toman ellos.",
  "Elegí a alguien para intercambiar una prenda por una ronda completa. Si se niegan, ambos toman fuerte.",
  "Contá una confesión que no le dirías ni a tu terapeuta o alguien del grupo la inventa por vos y la asumís igual.",
  "Jugá a adivinar qué parte del cuerpo te están tocando (con consentimiento y vendado). Si fallás, prendas o shot.",
  "Armá una historia hot con tres personas del grupo. Si no te sale, otro la termina como quiera.",
  "Decí con quién harías un trío del grupo. Si no respondés, alguien lo arma por vos y se hace fanfic.",
  "Mostrá tu historial de emojis usados. Si no hay ninguno hot, alguien te manda uno y lo usás con quien te digan.",
  "Hablá como si estuvieras en plena cita hot o dejás que te escriban el guión para hacerlo.",
  "Elegí a dos personas y decí con cuál dormirías abrazado y con cuál tendrías una noche intensa. Si no respondés, te mezclan las dos cosas.",
  "Inventate un voice note sexy de 5 segundos como si se lo mandaras a tu chongo y reproducilo en altavoz.",
  "Hacete el celoso por algo que pasó entre dos personas del grupo y actuá la escena como si fueras su pareja.",
  "Mandá un sticker con doble sentido en el grupo que elijan. Si no se entiende, tomás doble.",
  "Parate en el medio y dejá que te definan con tres adjetivos hot. Si alguno no te gusta, prendas.",
  "Simulá un beso apasionado con el aire o dejás que alguien te lo dirija como si fuera una escena de novela."

];

const oraculoBtn = document.getElementById('oraculo-btn');
const veredictoElement = document.getElementById('veredicto');
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('useless-button');

  btn.addEventListener('click', () => {
    // Mensaje central
    const msg = document.createElement('div');
    msg.innerHTML = '⚡ Te dije que no toques 😠😡😤⚡';
    msg.className =
      'fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-pink-500 px-4 py-2 rounded-lg shadow-lg font-bold text-center z-50 text-lg animate-fade';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);

    // Truenos cayendo
    for (let i = 0; i < 50; i++) {
      const delay = Math.random() * 2000; // entre 0 y 2 segundos
      setTimeout(() => {
        const thunder = document.createElement('div');
        thunder.textContent = '⚡';
        thunder.className =
          'fixed text-yellow-400 text-3xl pointer-events-none animate-thunder-drop z-50';
        thunder.style.left = `${Math.random() * 100}%`;
        thunder.style.top = `-50px`;
        document.body.appendChild(thunder);

        setTimeout(() => thunder.remove(), 3000);
      }, delay);
    }


    // Botón animado
    btn.classList.add('animate-pulse');
    setTimeout(() => btn.classList.remove('animate-pulse'), 300);
  });
});
document.body.classList.add('bg-pink-900/10');
setTimeout(() => {
  document.body.classList.remove('bg-pink-900/10');
}, 300);
oraculoBtn.addEventListener('click', function () {

  oraculoBtn.disabled = true;
  oraculoBtn.classList.add('opacity-50');

  veredictoElement.textContent = "El Oráculo está decidiendo tu destino...";
  veredictoElement.classList.remove('neon-blue', 'neon-pink', 'neon-purple');


  const colors = ['neon-blue', 'neon-pink', 'neon-purple'];
  let counter = 0;
  const colorInterval = setInterval(() => {
    veredictoElement.classList.remove(...colors);
    veredictoElement.classList.add(colors[counter % colors.length]);
    counter++;
  }, 200);


  setTimeout(() => {
    clearInterval(colorInterval);

    const randomIndex = Math.floor(Math.random() * veredictos.length);
    const veredicto = veredictos[randomIndex];


    veredictoElement.textContent = veredicto;
    veredictoElement.classList.remove(...colors);
    veredictoElement.classList.add('neon-pink');


    oraculoBtn.disabled = false;
    oraculoBtn.classList.remove('opacity-50');
  }, 1500);
});
const btn = document.getElementById('useless-button');
btn.addEventListener('click', () => {
  btn.classList.add('bounce-on-click');
  setTimeout(() => btn.classList.remove('bounce-on-click'), 300);
});