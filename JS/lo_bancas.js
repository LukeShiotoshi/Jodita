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
    "dice que todo esto es 'normal' y vos sos el raro"


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