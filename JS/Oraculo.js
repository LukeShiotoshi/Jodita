const veredictos = [
"El de remera blanca hace un dab",
"El que tenga medias rotas toma 2",
"El de pantalón corto hace un robot",
"El que tenga celular en la mano lo pasa al de la derecha",
"El que tenga cadena hace un rugido",
"El de ojos claros guiña a tres personas",
"El de zapatillas viejas da una vuelta corriendo",
"El que tenga gorra grita ‘soy un crack’",
"El de buzo con capucha se la pone hasta la próxima ronda",
"El que esté descalzo hace un saludo militar",
"El que tenga anillos se inventa un apodo raro",
"El de remera con estampado baila cumbia",
"El que tenga más stickers en WhatsApp muestra el último",
"El de pelo más oscuro da un abrazo a alguien",
"El que esté más cerca de la puerta canta fuerte",
"El de campera negra toma un shot doble",
"El que tenga menos mensajes no le habla a nadie por 5 minutos",
"El que tenga reloj muestra los pasos de hoy",
"El de pantalón roto se hace selfie grupal",
"El que esté sentado más bajo grita una mala palabra",
"El de auriculares se los pone hasta la próxima ronda",
"El que tenga tatuaje visible baila 15 segundos",
"El que más se rió hoy hace lagartijas",
"El de zapatillas nuevas toma 3",
"El que tenga pulsera hace un gesto raro",
"El de pelo teñido canta reguetón",
"El que más historias subió hoy muestra la última",
"El que tenga billetera encima la tira arriba de la mesa",
"El de buzo gris hace aplausos lentos",
"El que esté más despeinado toma 1 largo",
"El que tenga más brillo en el celu muestra el porcentaje",
"El de lentes de sol los usa hasta la próxima ronda",
"El que más tarde llegó se sienta en el piso",
"El de remera lisa se inventa una coreografía",
"El que tenga campera con cierre lo sube y baja 10 veces",
"El que esté más lejos del centro del grupo grita fuerte",
"El que tenga medias de distinto color da 3 vueltas",
"El que esté más nervioso hace cara sexy",
"El que tenga cara de aburrido hace caras raras",
"El que esté con el vaso más lleno se lo termina",
"El de zapatillas con cordones desatados los ata ya",
"El que tenga aro en la oreja manda un sticker random",
"El de campera roja hace abdominales",
"El que esté mirando el celu lo deja boca abajo",
"El de pelo con rulos hace un acting dramático",
"El que tenga voz más grave canta un tango",
"El de jean azul camina como pingüino",
"El que esté más callado grita su nombre",
"El de buzo con logo toma 2",
"El que tenga menos plata en la billetera muestra cuánto",
"El de medias negras hace moonwalk",
"El que esté transpirando más se abanica con algo",
"El de zapatillas con suela blanca hace pasito de reggaetón",
"El que tenga el celu más caro lo apoya en el piso",
"El de gorra hacia atrás hace cara de modelo",
"El que tenga perfume encima se tira un poco",
"El de campera azul toma un vaso de agua",
"El que esté más cerca de la cocina va a traer algo",
"El de pantalón gris improvisa un freestyle",
"El que tenga uñas pintadas muestra la mano",
"El de pelo corto imita a un profesor",
"El que esté sentado en el medio toma un shot",
"El que más veces bostezó hoy da 5 palmaditas",
"El de medias blancas baila lento",
"El que tenga más pestañas hace un deseo en voz alta",
"El de buzo sin capucha se pone un apodo hasta el final",
"El que tenga cara más seria sonríe exagerado",
"El de remera roja choca los cinco con todos",
"El que esté con la pierna cruzada la descruza ya",
"El que más veces miró la hora la dice de nuevo",
"El de zapatillas sucias hace un paso de breakdance",
"El que tenga más cosas en los bolsillos las vacía en la mesa",
"El de campera con bolsillos se los revisa en voz alta",
"El que tenga más calor se abanica con algo raro",
"El de pelo más despeinado toma un trago largo",
"El que esté más encorvado se estira fuerte",
"El de medias coloridas muestra las dos",
"El que más habló hasta ahora se calla por 2 rondas",
"El de remera rayada gira sobre sí mismo 5 veces",
"El que tenga menos contactos en WhatsApp lo muestra",
"El de zapatillas verdes da un grito fuerte",
"El que tenga gorro puesto hace un pasito sexy",
"El de pantalón negro se tapa la cara con las manos 10 segundos",
"El que tenga mochila cerca la vacía arriba de la mesa",
"El de remera floja se mete adentro y asoma solo la cara",
"El que más haya usado emojis hoy muestra los 3 primeros",
"El de campera rota da un salto alto",
"El que tenga reloj digital lo pone en modo luz",
"El de medias con dibujos las muestra a todos",
"El que tenga menos brillo en los ojos toma 2",
"El de lentes los cambia con alguien hasta la próxima ronda",
"El que esté sentado más cómodo cambia de lugar con el más incómodo",
"El de zapatillas sin cordones aplaude con los pies",
"El que tenga más apps abiertas cierra una ya",
"El de campera con capucha la gira para atrás",
"El que más selfies se sacó hoy muestra la última",
"El de pelo largo se hace un peinado rápido",
"El que tenga voz más aguda canta un reguetón",
"El de pantalón con bolsillos vacía uno en la mesa",
"El que esté más cerca de la mesa hace un ritmo con las manos",
"El de remera ajustada hace pose de fisicoculturista",
"El que tenga auriculares encima se los cuelga del cuello",
"El de zapatos gastados hace sonido de animal",
"El que esté con anillo se lo pone en otro dedo",
"El de buzo estampado hace un paso de baile inventado",
"El que tenga celular más grande lo apoya en el piso",
"El de medias bajas se las sube como si fueran largas",
"El que esté más despeinado hace cara sexy",
"El de campera blanca da 3 vueltas sobre sí mismo",
"El que tenga más pestañas sopla fuerte",
"El de remera con letras lee algo en voz alta",
"El que más veces suspiró hace 3 saltos",
"El de pantalón roto muestra dónde está el roto",
"El que esté más cerca de una silla la cambia de lugar",
"El de zapatillas con logo lo grita fuerte",
"El que tenga menos carga en el celu lo prende en modo avión",
"El de campera abierta la cierra de golpe",
"El que más veces miró el piso lo señala con el dedo",
"El de remera oscura hace mirada intensa",
"El que tenga reloj analógico marca la hora como profesor",
"El de pelo parado se lo aplasta con la mano",
"El que esté sentado más torcido se endereza ya",
"El de medias largas se las baja un poco",
"El que tenga más llaves encima las muestra",
"El de zapatillas con suela alta camina en puntas",
"El que tenga más stickers descargados manda uno ahora",
"El de campera con botones se los abrocha todos",
"El que más habló hasta ahora se tapa la boca 30 segundos",
"El de remera clara se apaga la luz del celu en la cara",
"El que tenga más frío se tapa con lo que encuentre",
"El de pantalón azul da un salto con los dos pies juntos",
"El que esté más nervioso mueve las cejas rápido",
"El de zapatillas nuevas pisa fuerte el piso 3 veces",
"El que tenga cara más seria sonríe exagerado",
"El de medias sucias se las esconde debajo de la silla",
"El que tenga pulsera la levanta y grita su nombre",
"El de pelo lacio lo despeina con la mano",
"El que esté más erguido se agacha hasta el piso",
"El de remera sin mangas muestra los músculos",
"El que tenga menos cosas en los bolsillos da un salto",
"El de campera negra aplaude tres veces",
"El que más haya usado el celu hoy lo deja boca abajo",
"El de pantalón gris hace 3 palmas rápidas",
"El que tenga aro visible lo toca con la mano",
"El de zapatillas sin medias levanta el pie",
"El que más bostezó hoy se pone de pie",
"El de buzo con cremallera la abre y cierra rápido",
"El que tenga uñas más largas las muestra",
"El de campera con parches señala el parche",
"El que esté mirando el techo grita una palabra random",
"El de remera con dibujos los describe",
"El que más tarde se rió hace 2 lagartijas",
"El de zapatos con cordones desatados los acomoda ya",
"El que tenga más carpetas en el celu muestra una",
"El de medias grises levanta los pies al aire",
"El que esté más inclinado hacia adelante se echa para atrás",
"El de remera más corta levanta los brazos",
"El que tenga más fotos en galería abre la última",
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