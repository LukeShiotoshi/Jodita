const juegos = {
    oraculo: {
        clase: 'oraculo-cortina',
        frase: 'El Destino Me conto de vos',
        textoClase: 'oraculo-texto',
        respuesta: 'Me dio un mensaje para vos🔮',
        cierre: 'Que esta noche no se olvide nunca '
    },
    ruleta: {
        clase: 'vicios-cortina',
        frase: 'Girás, decidís... o tomás.',
        textoClase: 'vicios-texto',
        respuesta: 'La ruleta ya está envenenada 💥',
        cierre: '¿Zafás o te arriesgás?'
    },
    vaso: {
        clase: 'vaso-cortina',
        frase: 'El Vaso del Destino te observa ',
        textoClase: 'vaso-texto',
        respuesta: '¿Trago o humillación?😈',
        cierre: 'Decidí antes de que te decidan...'
    },
    anonimo: {
        clase: 'anonimo-cortina',
        frase: 'Las mentiras son el juego favorito',
        textoClase: 'anonimo-texto',
        respuesta: 'Lastima tienen patas cortas👀',
        cierre: 'Espero te des cuenta a tiempo'
    },
    verdad: {
        clase: 'verdad-cortina',
        frase: 'Nada se esconde para siempre',
        textoClase: 'verdad-texto',
        respuesta: '¿Confesás o actuás?🔥',
        cierre: 'La vergüenza no tiene botón de escape.'
    },
    bancas: {
        clase: 'bancas-cortina',
        frase: '¿Lo bancás o lo cancelás?',
        textoClase: 'bancas-texto',
        respuesta: 'La nota define tu opinión 📊',
        cierre: 'No seas muy polemico, es solo un juego.'
    }
};

function mostrarCortina(juego) {
    const config = juegos[juego];
    if (!config) return;

    const overlay = document.createElement("div");
    overlay.className = `cortina ${config.clase}`;
    Object.assign(overlay.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
    });
    document.body.appendChild(overlay);

    const box = document.createElement("div");
    box.className = "text-center px-6 mb-4";
    overlay.appendChild(box);

    const skipBtn = document.createElement("button");
    skipBtn.id = "skip-drama";
    skipBtn.textContent = "";
    skipBtn.className =
        "absolute bottom-6 text-sm text-pink-300 underline hover:text-pink-500 transition-colors";
    overlay.appendChild(skipBtn);

    const pregunta = document.createElement("div");
    pregunta.textContent = config.frase;
    pregunta.className = `${config.textoClase} epic-in mb-2`;
    box.appendChild(pregunta);

    setTimeout(() => {
        const respuesta = document.createElement("div");
        respuesta.textContent = config.respuesta;
        respuesta.className = `${config.textoClase} epic-in mb-2`;
        box.appendChild(respuesta);
    }, 1500);

    setTimeout(() => {
        pregunta.classList.add("escape");
        box.lastChild.classList.add("escape");

        for (let i = 0; i < 6; i++) {
            const line = document.createElement("div");
            line.className = "speed-line";
            line.style.top = `${30 + i * 8}%`;
            line.style.left = "100%";
            overlay.appendChild(line);
        }
    }, 5500);

    setTimeout(() => {
        box.innerHTML = "";
        const final = document.createElement("div");
        final.innerHTML = config.cierre;
        final.className = `${config.textoClase} jump-in`;
        box.appendChild(final);
        if (juego === 'oraculo') {
            // 🌟 Estrellas girando en loop alrededor del texto final
            for (let i = 0; i < 8; i++) {
                const estrella = document.createElement("div");
                estrella.className = "estrella-flotante";
                estrella.style.top = `${30 + Math.sin(i) * 20}%`;
                estrella.style.left = `${50 + Math.cos(i) * 25}%`;
                overlay.appendChild(estrella);
            }

            // 🎮 Botón de entrada místico
            const playBtn = document.createElement("button");
            playBtn.textContent = "Quiero jugar ya";
            playBtn.className = "btn-oraculo-iniciar";
            overlay.appendChild(playBtn);

            playBtn.addEventListener("click", () => overlay.remove());
        }
        if (juego === 'ruleta') {
            const slotWrapper = document.createElement("div");
            slotWrapper.className = "slot-machine";
            overlay.appendChild(slotWrapper);

            const categorias = ["Sexo", "Vicios", "Anécdotas", "Desafíos", "Colectivos", "Castigos"];
            for (let i = 0; i < 3; i++) {
                const columna = document.createElement("div");
                columna.className = "slot-column";
                slotWrapper.appendChild(columna);

                // Mezcla aleatoria
                const mezcla = [...categorias, ...categorias].sort(() => Math.random() - 0.5);
                mezcla.forEach(txt => {
                    const item = document.createElement("div");
                    item.className = "slot-item";
                    item.textContent = txt;
                    columna.appendChild(item);
                });
            }

            const playBtn = document.createElement("button");
            playBtn.textContent = "Girá la máquina";
            playBtn.className = "btn-ruleta-iniciar";
            overlay.appendChild(playBtn);

            playBtn.addEventListener("click", () => overlay.remove());
        }
        if (juego === 'vaso') {
            const decorativos = ['🍷', '🥃', '🍸', '🍶', '🧉'];
            decorativos.forEach((icono, i) => {
                const figura = document.createElement("div");
                figura.className = "vaso-flotante";
                figura.textContent = icono;
                figura.style.top = `${20 + Math.sin(i * 2) * 20}%`;
                figura.style.left = `${15 + i * 15}%`;
                overlay.appendChild(figura);
            });

            const playBtn = document.createElement("button");
            playBtn.textContent = "Me la banco";
            playBtn.className = "btn-vaso-iniciar";
            overlay.appendChild(playBtn);
            playBtn.addEventListener("click", () => overlay.remove());
        }
        if (juego === 'anonimo') {
            // 🧩 Líneas distorsionadas horizontales tipo glitch
            for (let i = 0; i < 12; i++) {
                const glitch = document.createElement("div");
                glitch.className = "glitch-line";
                glitch.style.top = `${Math.random() * 90}%`;
                glitch.style.left = 0;
                overlay.appendChild(glitch);
            }

            // 🕶️ Fragmentos de texto interrumpido
            const textoGlitch = document.createElement("div");
            textoGlitch.className = "anonimo-fragmento";
            textoGlitch.innerHTML = "Desco<span class='glitch-fx'>nocido</span> 4<span class='glitch-fx'>0</span>4";
            overlay.appendChild(textoGlitch);

            // 🎮 Botón para iniciar
            const playBtn = document.createElement("button");
            playBtn.textContent = "Descifrá el dato";
            playBtn.className = "btn-anonimo-iniciar";
            overlay.appendChild(playBtn);

            playBtn.addEventListener("click", () => overlay.remove());
        }
        if (juego === 'verdad') {
            const palabras = ["vergüenza", "secreto", "acción", "culpa", "osadía", "pasión"];
            palabras.forEach((txt, i) => {
                const palabra = document.createElement("div");
                palabra.className = "palabra-flotante";
                palabra.textContent = txt;
                palabra.style.top = `${Math.random() * 80}%`;
                palabra.style.left = `${Math.random() * 80}%`;
                palabra.style.animationDelay = `${i * 0.7}s`;
                overlay.appendChild(palabra);
            });

            const playBtn = document.createElement("button");
            playBtn.textContent = "Confieso y juego ya";
            playBtn.className = "btn-verdad-iniciar";
            overlay.appendChild(playBtn);

            playBtn.addEventListener("click", () => overlay.remove());
        }
        if (juego === 'bancas') {
  // 🌫️ Palabras clave flotando
  const palabras = ["culpa", "placer", "intensidad", "tabú", "nivel", "honestidad"];
  palabras.forEach((txt, i) => {
    const palabra = document.createElement("div");
    palabra.className = "palabra-nebulosa";
    palabra.textContent = txt;
    palabra.style.top = `${Math.random() * 70}%`;
    palabra.style.left = `${Math.random() * 80}%`;
    palabra.style.animationDelay = `${i * 0.5}s`;
    overlay.appendChild(palabra);
  });

  // 🌀 Orbita central primero
  const centro = document.createElement("div");
  centro.className = "orbita-puntaje";
  overlay.appendChild(centro);

  // 🔢 Números orbitando
  for (let i = 1; i <= 10; i++) {
    const numero = document.createElement("div");
    numero.className = "numero-puntaje";
    numero.textContent = i;
    const angulo = (360 / 10) * i;
    numero.style.transform = `rotate(${angulo}deg) translate(90px) rotate(-${angulo}deg)`;
    centro.appendChild(numero);
  }

  // 🎮 Botón de entrada
  const playBtn = document.createElement("button");
  playBtn.textContent = "¡Quiero calificar ya!";
  playBtn.className = "btn-bancas-iniciar";
  overlay.appendChild(playBtn);
  playBtn.addEventListener("click", () => overlay.remove());
}
    }, 6100);

    setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 600);
    }, 9500);

    document.addEventListener("click", (e) => {
        if (e.target.id === "skip-drama") overlay.remove();
    });
}