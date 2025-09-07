const dilemas = [
    "solo escucha música de anime",
    "usa crocs con medias todo el tiempo",
    "odia los asados y prefiere sushi frío",
    "llama 'Skylar' a su planta carnívora",
    "odia a los Simpson",
    "siempre responde con memes",
    "se baña cada 3 días",
    "odia los animales",
    "manda audios de 5 minutos para decir hola",
    "duerme con 7 peluches y les habla",
    "usa crocs con medias",
    "le pone mayonesa al café",
    "no cree en los cumpleaños",
    "odia los Simpson",
    "lee los términos y condiciones",
    "dice 'XD' en la vida real",
    "nunca probó fernet y dice que es feo",
    "dice que Metallica es 'meh'",
    "escucha música a todo volumen sin auriculares",
    "nunca vio Shrek",
    "dice que no cree en el WiFi",
    "cree que la Tierra es plana",
    "se limpia los mocos con la manga",
    "pronuncia 'Spotify' como 'Spotifai'",
    "colecciona uñas en un frasco",
    "tiene un grupo de WhatsApp solo con él",
    "juega con la comida en los restaurantes",
    "le pone kétchup al asado",
    "dice que el mate es asqueroso",
    "se ríe como delfín",
    "cree que los aliens controlan el gobierno",
    "se presenta con apodos inventados",
    "nunca lavó un plato",
    "pone su celu con brillo al máximo en el cine",
    "cree que el horóscopo define todo",
    "le habla a las plantas como si fueran bebés",
    "quiere llamar a su hijx 'Gokú'",
    "no usa desodorante",
    "se viste como personaje de anime",
    "colecciona envoltorios de golosinas",
    "no come pizza con las manos",
    "sigue usando emojis como 😎 y 😩",
    "cree que el 'teclado mecánico' es un instrumento",
    "no tiene redes sociales",
    "usa TikTok pero no quiere admitirlo",
    "se autodenomina 'Alfa'",
    "no diferencia Star Wars de Star Trek",
    "guarda su DNI en una media",
    "cree que los gatos son 'demoníacos'",
    "nunca usó Google Maps",
    "usa fundas de minions en el celu",
    "se duerme con videos de conspiraciones",
    "tiene más selfies con filtros que sin",
    "le habla a su ex cada 15 días",
    "todavía dice 'flama' o 're turbio'",
    "guarda caramelos derretidos en el bolsillo",
    "tiene posters de Shrek en la pieza",
    "escribe 'ola' sin h",
    "responde historias con '🔥🔥🔥' a cualquiera",
    "se saca fotos con el flash frontal",
    "odia la lluvia sin motivo",
    "solo come arroz blanco",
    "cree que los juegos de mesa son satánicos",
    "hace TikToks bailando solo",
    "no distingue a Messi de Maradona",
    "tiene miedo a las mariposas",
    "sigue usando BlackBerry",
    "no sabe abrir una gaseosa",
    "solo habla con stickers",
    "juega Roblox con voz de pito",
    "nunca lavó su buzo favorito",
    "tiene su contraseña como '1234'",
    "defiende el pan con pasas",
    "no sabe andar en bici",
    "se pinta las uñas con fibra",
    "mezcla agua caliente con jugo en polvo",
    "le pone azúcar al mate amargo ajeno",
    "responde 'a mí me pasa' a todo",
    "sigue creyendo en Papá Noel",
    "usa su DNI como raspador de hielo",
    "dice 'bailemos' y no sabe bailar",
    "no sabe pelar una naranja",
    "saca fotos a la comida pero no las sube",
    "cree que la Cumbia 420 es un género espiritual",
    "corta las pizzas con cuchillo y tenedor",
    "se lava los dientes con jabón",
    "grita 'gool' sin mirar fútbol",
    "usa el celu en la ducha",
    "solo tiene ropa negra con frases tipo 'NO FEELINGS'",
    "no sabe escribir 'joda' sin h",
    "piensa que Linux es una religión",
    "arma cadenas de WhatsApp en 2025",
    "le pide perdón a las paredes",
    "habla en tercera persona de sí mismx",
    "cree que los piojos son buenos para el pelo",
    "rompe burbujas con los dedos de otros",
    "no sabe silbar",
    "chupa el borde de la taza antes de tomar",
    "usa bufanda con musculosa",
    "nunca aprendió a usar Excel",
    "dibuja caritas tristes en el vapor del espejo",
    "colecciona sobres de azúcar usados",
    "tiene conversaciones con su reflejo",
    "aplaude cuando aterriza el avión",
    "dice que todo esto es 'normal' y vos sos el raro",
    "Solo escucha música de k-pop y defiende a muerte cada grupo.",
    "Usa crocs con medias en invierno y verano sin importar el qué dirán.",
    "Odia el mate y se burla de los que lo toman.",
    "Habla en memes todo el tiempo y espera que todos entiendan.",
    "Se baña todos los días, pero solo con agua fría y sin jabón.",
    "Le tiene miedo a los perros y evita cualquier reunión donde haya uno.",
    "Manda audios kilométricos para contar cosas simples.",
    "Duerme con un peluche enorme y lo lleva a todos lados.",
    "Le pone azúcar al mate y lo hace público sin vergüenza.",
    "No cree en las celebraciones de cumpleaños y se saltea todas.",
    "Se sabe los términos y condiciones de memoria y los comparte sin que nadie le pida.",
    "Nunca usó WhatsApp y prefiere mensajes por SMS.",
    "Dice que el rock está muerto y solo escucha reggaetón.",
    "Es fanático del reggaetón y lo defiende en cualquier discusión.",
    "Nunca vio una película de Marvel y no le interesa.",
    "Se ríe en voz alta cuando alguien falla y no tiene tacto.",
    "Colecciona figuritas de animé y las muestra orgulloso.",
    "Le pone mayonesa a la pizza y no entiende las miradas de horror.",
    "Usa emojis solo de corazones y flores y parece un poeta.",
    "Es vegetariano y no para de hablar de eso en la joda.",
    "Nunca aprendió a cocinar y solo sabe pedir delivery.",
    "Tiene miedo a la oscuridad y siempre necesita la luz prendida.",
    "Sigue usando auriculares grandes tipo ‘DJ’ aunque no le queden bien.",
    "Le encanta hacer chistes pesados aunque nadie se ría.",
    "Nunca aprendió a manejar y se marea en cualquier transporte.",
    "Habla con un acento inventado y espera que todos lo sigan.",
    "Le fascina la cultura japonesa y tiene más cosas de anime que ropa normal.",
    "No le gusta el fútbol y lo dice sin filtro en cada reunión.",
    "Es fanático de los videojuegos pero no sabe jugar casi nada.",
    "Colecciona memes antiguos y los guarda como tesoros.",
    "Tiene una playlist exclusiva para llorar y la usa en público sin vergüenza.",
    "Le pone ketchup a la milanesa y defiende la mezcla con pasión.",
    "Dice que el cine argentino es aburrido y solo ve Hollywood.",
    "Nunca aprendió a usar redes sociales y vive desconectado del mundo.",
    "Sigue usando frases de los 2000 y nadie entiende su vocabulario.",
    "Usa gafas oscuras dentro de lugares cerrados sin razón aparente.",
    "Le encanta hablar de teorías conspirativas y las comparte en cada charla.",
    "No le gusta la música electrónica y lo dice sin filtro.",
    "Se viste siempre con ropa deportiva y parece que va a entrenar todo el día.",
    "Sabe tocar algún instrumento, pero solo para hacer ruido en las reuniones.",
    "No sabe bailar pero siempre intenta y pide pista.",
    "Le encanta el café solo y lo mira como si fuera un dios.",
    "Nunca usa protector solar y se quema siempre en verano.",
    "Usa frases en inglés sin saber bien lo que significan y los mezcla en las conversaciones.",
    "Es fanático de los comics y lleva libros a todas partes.",
    "No cree en las reglas y siempre está buscando cómo romperlas.",
    "Sigue usando MSN Messenger como si fuera 2005.",
    "Le fascina la comida picante y pone ají en todo.",
    "Se duerme en cualquier lugar y a cualquier hora.",
    "No puede estar sin su celular ni un minuto y se pone loco/a si lo pierde.",
    "Se ríe con cualquier chiste malo y contagia a todos.",
    "Le encanta hacer bromas pesadas y se olvida rápido de que lastimó a alguien.",
    "Colecciona remeras vintage y las usa sin importar la moda.",
    "Le gusta el reggaetón pero dice que es música de baja calidad.",
    "Nunca vio una serie completa, solo capítulos sueltos.",
    "Habla solo cuando está nervioso y todos lo notan.",
    "Le pone hielo a la cerveza y lo defiende con vehemencia.",
    "Es fanático de los deportes extremos aunque nunca practicó ninguno.",
    "Prefiere quedarse en casa antes que salir, pero finge lo contrario.",
    "Se la pasa hablando de sus conquistas aunque nadie le pregunte.",
    "Dice que las redes sociales son para perder el tiempo, pero está siempre conectado.",
    "Le da miedo hablar en público y siempre busca excusas para evitarlo.",
    "Nunca aprendió a usar un microondas y le da miedo tocarlo.",
    "Usa perfumes raros que incomodan al grupo.",
    "Es fan de las películas de terror y se asusta con cualquier ruido.",   
    "Siempre llega tarde a todo y nunca avisa.",
    "Prefiere el invierno aunque siempre está resfriado/a.",
    "No le gusta el dulce y prefiere lo salado en todas sus formas.",
    "solo escucha k-pop",
"odia el alcohol",
"ama el sushi y lo come siempre",
"colecciona vinilos",
"le encanta el anime y tiene poster en la pieza",
"prefiere té antes que café",
"siempre responde con stickers",
"ama los videojuegos retro",
"se sabe de memoria canciones de Disney",
"odia los asados y prefiere ensaladas",
"ama el helado de vainilla con topping de chocolate",
"colecciona remeras de bandas",
"prefiere pizza con ananá",
"solo ve series de misterio",
"se sabe todos los openings de anime",
"le encanta bailar reguetón aunque sea malo",
"ama los perros y los sigue en Instagram",
"prefiere películas animadas antes que acción",
"siempre tiene cargador a mano",
"le gustan los memes de gatos",
"odia el mate pero lo prueba por compromiso",
"ama los juegos de mesa cooperativos",
"colecciona figuras Funko Pop",
"prefiere comida japonesa antes que hamburguesas",
"le encanta leer manga",
"ama los parques de diversiones",
"siempre escucha música a todo volumen en auriculares",
"colecciona tazas raras",
"prefiere café con leche y azúcar",
"ama la cultura japonesa en general",
"le gustan los animales aunque tenga alergia",
"prefiere libros de fantasía antes que policiales",
"siempre canta mientras se ducha",
"ama los dibujos animados de los 90",
"prefiere chocolate amargo antes que dulce",
"colecciona pósters de series y películas",
"ama los helados de sabores raros",
"siempre tiene snacks en la mochila",
"prefiere juegos cooperativos antes que competitivos",
"ama la música de los 80 y 90",
"siempre organiza playlists según el mood",
"prefiere series de comedia antes que drama",
"ama los animales de granja aunque nunca los haya tenido",
"colecciona stickers de viajes o souvenirs",
"prefiere tacos bajos antes que altos",
"ama los días de lluvia y quedarse en casa",
"siempre prueba recetas nuevas",
"prefiere hamburguesas veganas antes que carne",
"ama la comida italiana clásica",
"colecciona entradas de cine y conciertos",
"prefiere café helado antes que caliente",
"ama los festivales de música aunque no vaya todos",
"siempre lleva auriculares aunque no los use",
"prefiere series cortas antes que largas",
];
let sumaNotas = 0;
const ultimosDilemas = [];
const maxUltimos = 15;

let votosTotales = 0;
let usosNienPedo = 0;
let usosHastaAgua = 0;

let cooldownNienPedo = 0;
let cooldownHastaAgua = 0;

let dilemaGenerado = false;

const btnNienPedo = document.getElementById("btnNienPedo");
const btnHastaAgua = document.getElementById("btnHastaAgua");
const contadorNienPedo = document.getElementById("contadorNienPedo");
const contadorHastaAgua = document.getElementById("contadorHastaAgua");
document.addEventListener("DOMContentLoaded", () => {


    btnNienPedo.disabled = true;  // Arrancan bloqueados porque no hay dilema
    btnHastaAgua.disabled = true;

    function actualizarEstadoBotones() {
        if (!dilemaGenerado) {
            btnNienPedo.disabled = true;
            btnHastaAgua.disabled = true;
            return;
        }
        btnNienPedo.disabled = cooldownNienPedo > 0;
        btnHastaAgua.disabled = cooldownHastaAgua > 0;
    }

    function generarDilema() {
        let randomIndex;
        let intentos = 0;

        do {
            randomIndex = Math.floor(Math.random() * dilemas.length);
            intentos++;
            if (intentos > 50) break;
        } while (ultimosDilemas.includes(randomIndex));

        ultimosDilemas.push(randomIndex);
        if (ultimosDilemas.length > maxUltimos) {
            ultimosDilemas.shift();
        }

        document.getElementById("dilema").textContent = `Es un 10 pero ${dilemas[randomIndex]}. ¿Cuánto le ponés?`;

        if (!dilemaGenerado) {
            dilemaGenerado = true;
            document.getElementById("btnGenerarNuevo").style.display = "none";
            actualizarEstadoBotones();
        }
    }
    document.getElementById("btnGenerarNuevo").addEventListener("click", generarDilema);


    function votar(event) {
        if (!dilemaGenerado) return;

        votosTotales++;

        const nota = parseInt(event.target.textContent);
        sumaNotas += nota;
        const promedio = (sumaNotas / votosTotales).toFixed(2);
        document.getElementById("promedioNotas").textContent = promedio;

        if (cooldownNienPedo > 0) cooldownNienPedo--;
        if (cooldownHastaAgua > 0) cooldownHastaAgua--;

        actualizarEstadoBotones();
        generarDilema();
    }

    document.querySelectorAll(".btn-voto").forEach(boton => {
        boton.addEventListener("click", (e) => votar(e));
    });

    btnNienPedo.addEventListener("click", () => {
        usosNienPedo++;
        contadorNienPedo.textContent = usosNienPedo;

        cooldownNienPedo = 5;
        votosTotales++;
        sumaNotas += -20;

        const promedio = (votosTotales > 0) ? (sumaNotas / votosTotales).toFixed(2) : "0.00";
        document.getElementById("promedioNotas").textContent = promedio;

        if (cooldownHastaAgua > 0) cooldownHastaAgua--;
        actualizarEstadoBotones();
        generarDilema();
    });


    btnHastaAgua.addEventListener("click", () => {
        usosHastaAgua++;
        contadorHastaAgua.textContent = usosHastaAgua;

        cooldownHastaAgua = 5;
        votosTotales++;
        sumaNotas += 20;

        const promedio = (votosTotales > 0) ? (sumaNotas / votosTotales).toFixed(2) : "0.00";
        document.getElementById("promedioNotas").textContent = promedio;

        if (cooldownNienPedo > 0) cooldownNienPedo--;
        actualizarEstadoBotones();
        generarDilema();
    });

});