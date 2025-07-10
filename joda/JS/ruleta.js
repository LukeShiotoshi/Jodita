const categories = [
    {
        name: "Anécdotas", color: ["#ef4444", "#ec4899"], challenges: [
            "Confiesa tu fantasía más prohibida",
            "Besá a la persona de tu izquierda durante 10 segundos",
            "Imitá tu posición sexual favorita",
            "Contá tu experiencia más vergonzosa en la cama",
            "Elegí a alguien para un reto íntimo"
        ]
    },
    {
        name: "Desafíos", color: ["#f97316", "#eab308"], challenges: [
            "Tomá un trago de la bebida más fuerte disponible",
            "Fumá un cigarrillo completo en un minuto",
            "Confiesa tu mayor exceso con alcohol",
            "Toma fernet puro sin hacer cara",
            "Inventa un cóctel con 3 ingredientes al azar y bébelo"
        ]
    },
    {
        name: "Asquerosos", color: ["#eab308", "#f59e0b"], challenges: [
            "Contá tu peor historia con fernet",
            "Relatá la vez que más borracho/a estuviste",
            "Confiesa algo que hiciste y de lo que te arrepientes",
            "Contá tu encuentro sexual más raro",
            "Revelá tu mayor secreto de fiesta"
        ]
    },
    {
        name: "Colectivos", color: ["#22c55e", "#14b8a6"], challenges: [
            "Bailá sin música durante 1 minuto",
            "Hacé 10 sentadillas con alguien en tus hombros",
            "Imitá a un animal hasta que alguien adivine cuál es",
            "Corré alrededor de la casa gritando tu nombre",
            "Hacé un striptease de 30 segundos"
        ]
    },
    {
        name: "Sexo", color: ["#991b1b", "#dc2626"], challenges: [
            "Comé una cucharada de algo asqueroso (elige el grupo)",
            "Olfateá la axila de la persona a tu derecha",
            "Bebé de la bebida de otra persona sin usar manos",
            "Lame el piso y mantené contacto visual con alguien",
            "Huele los dedos de los pies de alguien"
        ]
    },
    {
        name: "Vicios", color: ["#3b82f6", "#6366f1"], challenges: [
            "Elegí a dos que se tengan que abrazar 1 minuto o ambos toman",
            "Todos deben cambiar una prenda de ropa con alguien",
            "El grupo elige tu próxima verdad o reto",
            "Vota quién debe hacer el próximo reto difícil",
            "Todos deben contar un secreto o tomar un trago"
        ]
    }
];

let isSpinning = false;
let currentRotation = 0;

function initRuleta() {
    const ruleta = document.getElementById('ruleta');
    const container = ruleta.parentElement;
    const segmentAngle = 360 / categories.length;
    const gradientStops = categories.map((cat, i) => {
        const start = i * segmentAngle;
        const end = (i + 1) * segmentAngle;
        return `${cat.color[0]} ${start}deg ${end}deg`;
    }).join(',');
    ruleta.style.background = `conic-gradient(${gradientStops})`;
    ruleta.innerHTML = '';
    ruleta.style.position = 'relative';
    const radius = ruleta.offsetWidth / 2;
    categories.forEach((cat, i) => {
        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = cat.name;
        const angle = i * segmentAngle + segmentAngle / 2;
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
    const spinDuration = 4000;
    const extraRotations = 5;
    const randomAngle = Math.round(Math.random() * 359);
    const minAngle = 30; 
    let targetAngle = randomAngle;
    if (targetAngle < minAngle) targetAngle += 360;
    const finalRotation = currentRotation + extraRotations * 360 + targetAngle;
    ruleta.style.transition = `transform ${spinDuration}ms ease-out`;
    ruleta.style.transform = `rotate(${finalRotation}deg)`;
    setTimeout(() => {
        isSpinning = false;
        document.getElementById('spinButton').disabled = false;
        currentRotation = finalRotation % 360;
        const segmentAngle = 360 / categories.length;
        const normalized = (360 - (currentRotation % 360)) % 360;
        const selectedIndex = Math.floor(normalized / segmentAngle);
        const selectedCategory = categories[selectedIndex];
        const randomChallengeIndex = Math.floor(Math.random() * selectedCategory.challenges.length);
        displayResult(selectedCategory, selectedCategory.challenges[randomChallengeIndex]);
        ruleta.style.transition = '';
    }, spinDuration);
}

function displayResult(category, challenge) {
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.innerHTML = `
        <div class="text-center w-full">
            <div class="text-lg md:text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[${category.color[0]}] to-[${category.color[1]}]">${category.name}</div>
            <div class="text-xl md:text-2xl font-bold mb-6 px-4">"${challenge}"</div>
            <div class="flex justify-center">
                <div class="w-16 h-1 rounded-full bg-gradient-to-r from-[${category.color[0]}] to-[${category.color[1]}]"></div>
            </div>
        </div>
    `;
    resultDisplay.classList.add('transform', 'scale-110');
    setTimeout(() => resultDisplay.classList.remove('transform', 'scale-110'), 300);
}

document.getElementById('spinButton').addEventListener('click', spinRuleta);
window.addEventListener('DOMContentLoaded', initRuleta);
