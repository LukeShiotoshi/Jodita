<<<<<<< HEAD

    // Variables globales
    const BOARD_SIZE = 7;
    const TOTAL_CELLS = BOARD_SIZE * BOARD_SIZE;
    let players = [];
    let board = [];
    let usedDesgracias = new Set();
    let currentDesgracia = null;
    let currentCellIndex = null;
    let selectedCellIndex = null;
    let playersToAssign = new Set();

    // Elementos DOM
    const setupScreen = document.getElementById('setup-screen');
    const gameScreen = document.getElementById('game-screen');
    const playerForm = document.getElementById('player-form');
    const playerNameInput = document.getElementById('player-name');
    const playersListEl = document.getElementById('players-list');
    const startGameBtn = document.getElementById('start-game');
    const boardEl = document.getElementById('board');
    const nextNumberBtn = document.getElementById('next-number');
    const currentBallEl = document.getElementById('current-ball');
    const currentDesgraciaPanel = document.getElementById('current-desgracia-panel');
    const currentDesgraciaText = document.getElementById('current-desgracia-text');
    const statusMessage = document.getElementById('status-message');
    const selectedCellInfo = document.getElementById('selected-cell-info');
    const selectedCellNumber = document.getElementById('selected-cell-number');
    const activePlayersEl = document.getElementById('active-players');
    const assignmentModal = document.getElementById('assignment-modal');
    const modalDesgracia = document.getElementById('modal-desgracia');
    const modalPlayers = document.getElementById('modal-players');
    const modalCancel = document.getElementById('modal-cancel');
    const modalConfirm = document.getElementById('modal-confirm');

    // Pool de desgracias
    const desgracias = [
"Lo encontraron chapando en el baño de una fiesta",
"Se quedó dormido después de una noche con más de una persona",
"Fue visto saliendo del telo con alguien conocido",
"Se enganchó con dos personas el mismo día",
"Lo pescaron en pleno acto en la casa de un amigo",
"Tuvo que esconderse porque entraron los padres en un momento íntimo",
"Se chapó al ex de un amigo en un boliche",
"Lo encontraron a los besos en la facultad",
"Terminó en la cama con alguien que apenas conocía",
"Lo descubrieron mandando nudes en clase",
"Se enganchó con alguien en un viaje de estudio",
"Le sacaron foto en una situación íntima sin permiso",
"Lo atraparon en pleno sexting por la persona equivocada",
"Se chapó a alguien en el baño de un boliche",
"Terminó con un desconocido después de una fiesta",
"Fue visto escapando de una casa de madrugada",
"Se quedó encerrado con alguien en una habitación comprometedora",
"Tuvo que salir corriendo porque llegaron los padres",
"Lo vieron a escondidas con alguien comprometido",
"Estuvo con dos personas que se conocían entre sí",
"Lo grabaron sin darse cuenta en una situación íntima",
"Se enganchó con alguien mucho mayor en una fiesta",
"Fue atrapado con mensajes subidos de tono en el celular",
"Se chapó a alguien frente a la persona equivocada",
"Terminó en la misma cama con varias personas en un viaje",
"Fue descubierto en el auto en un momento íntimo",
"Se besó con alguien prohibido en un evento familiar",
"Lo vieron salir de una habitación cerrada con alguien",
"Se enganchó con alguien en el baño de la facultad",
"Lo encontraron en plena videollamada comprometedora",
"Se cruzó a alguien después de una noche intensa y fue incómodo",
"Fue sorprendido buscando privacidad en una fiesta",
"Estuvo con alguien que después negó todo",
"Se quedó sin excusas cuando lo encontraron en la cama equivocada",
"Tuvo que salir a escondidas de la casa de alguien",
"Fue sorprendido chapando con alguien en un parque",
"Se enganchó con un desconocido en un viaje",
"Se quedó atrapado en un lugar íntimo y no pudo escapar",
"Fue pescado en pleno beso por un familiar",
"Lo encontraron abrazado con alguien en una fiesta",
"Terminó con alguien que estaba comprometido",
"Lo vieron chapando en un pasillo oscuro",
"Se chapó a alguien frente a un ex",
"Estuvo con alguien y se arrepintió al día siguiente",
"Lo descubrieron después de mandar un audio íntimo sin querer",
"Se enganchó con alguien prohibido en el colegio",
"Lo vieron saliendo de la casa de alguien en plena madrugada",
"Se quedó encerrado en un baño con alguien más",
"Fue pescado tocando a alguien en una fiesta",
"Se chapó a alguien en secreto y los encontraron igual",
"Lo encontraron mandando nudes",
"Tuvo sexo en el baño de un boliche",
"Se chapó a dos personas en una misma noche",
"Salió con alguien que tenía pareja",
"Se enganchó con un profe",
"Lo pescaron mirando porno",
"Se chapó al ex de un amigo",
"Tuvo sexo en la playa",
"Fue infiel y lo descubrieron",
"Se grabó en la cama",
"Se quedó desnudo por accidente",
"Lo vieron entrando a un telo",
"Tuvo un trío inesperado",
"Se despertó en la cama equivocada",
"Le encontraron chats subidos de tono",
"Se chapó a alguien mucho mayor",
"Tuvo sexo en el auto",
"Estuvo con dos amigos del mismo grupo",
"Lo pescaron haciéndolo en casa ajena",
"Se olvidó borrar fotos íntimas",
"Se chapó a alguien en la fiesta de egresados",
"Tuvo sexo con alguien y al otro día con otra persona",
"Lo encontraron desnudo en videollamada",
"Se levantó al novio de otra",
"Se enganchó con un desconocido de una app",
"Lo escracharon con mensajes hot",
"Tuvo sexo en el colegio/universidad",
"Se chapó a alguien frente a la ex",
"Estuvo con un amigo de su hermano/a",
"Lo encontraron haciéndolo en un lugar público",
"Fue infiel con alguien del trabajo",
"Se chapó al hermano/a de un amigo",
"Tuvo sexo en una fiesta",
"Lo vieron salir del cuarto equivocado",
"Se chapó a alguien en una boda",
"Tuvo una cita doble con dos personas a la vez",
"Lo encontraron dormido con alguien inesperado",
"Se enganchó con alguien de mucha diferencia de edad",
"Tuvo sexo con alguien que conoció esa misma noche",
"Le revisaron el celu y encontraron todo",
"Estuvo con alguien comprometido",
"Se chapó a alguien en el boliche y después a otra",
"Tuvo una aventura secreta por meses",
"Se enganchó con alguien del grupo de ex",
"Fue descubierto viendo contenido hot en el aula",
"Lo filmaron sin darse cuenta",
"Se chapó a alguien en la pileta",
"Tuvo sexo en la casa de un familiar",
"Lo pescaron escapándose de una casa ajena",
"Lo encontraron desnudo con alguien en la habitación equivocada",
"Se chapó al mejor amigo de su ex",
"Tuvo sexo en el ascensor",
"Se grabó y después el video se filtró",
"Lo descubrieron teniendo una cita doble el mismo día",
"Se chapó a alguien con pareja frente a todos",
"Tuvo sexo en el vestuario del gimnasio",
"Se despertó con alguien y no se acordaba el nombre",
"Lo encontraron mirando fotos íntimas en el celu en público",
"Se chapó a un profe en la fiesta de fin de año",
"Tuvo sexo en un parque de noche",
"Le mandaron nudes por error a la persona equivocada",
"Se enganchó con el/la ex de su amigo más cercano",
"Tuvo sexo en el baño de un avión",
"Fue descubierto en una videollamada subidita de tono",
"Se chapó a dos personas que eran amigos entre sí",
"Tuvo sexo en la pileta con gente alrededor",
"Le revisaron el historial y encontraron cosas turbias",
"Estuvo con alguien casado/a",
"Tuvo sexo en un telo y lo encontró un conocido",
"Se chapó a alguien delante de la pareja",
"Se olvidó de borrar nudes en la galería y alguien los vio",
"Tuvo sexo en la playa con gente mirando",
"Se enganchó con un/a profe particular",
"Lo descubrieron escapándose por la ventana",
"Se chapó al ex de su hermano/a",
"Tuvo sexo en la biblioteca",
"Lo encontraron semidesnudo en un auto",
"Se enganchó con más de una persona del mismo grupo de amigos",
"Se chapó a alguien en el casamiento de un conocido",
"Tuvo sexo en el baño de un restaurante",
"Fue descubierto con alguien en el probador de ropa",
"Le mandaron un nude suyo a un grupo equivocado",
"Se chapó a alguien en el pasillo de la facultad",
"Tuvo sexo con alguien que conoció por Tinder esa misma noche",
"Lo escracharon con capturas de chats hot",
"Se enganchó con alguien mucho mayor por pura adrenalina",
"Tuvo sexo en la terraza",
"Se chapó al/la ex de su pareja actual",
"Lo descubrieron a los besos en la casa de un amigo",
"Se enganchó con alguien de la misma familia (primo/a)",
"Tuvo sexo en el vestuario del colegio",
"Se quedó encerrado en un telo",
"Lo encontraron saliendo de la casa equivocada al amanecer",
"Tuvo un trío con dos desconocidos",
"Se chapó a alguien en la cancha en medio del partido",
"Tuvo sexo en el baño de un boliche con la fila esperando",
"Fue infiel con alguien del círculo más cercano",
"Se enganchó con alguien que le presentó su mejor amigo"
    ];

    // Inicializar
    document.addEventListener('DOMContentLoaded', () => {
      initSetup();
    });

    // Setup inicial
    function initSetup() {
      playerForm.addEventListener('submit', addPlayer);
      startGameBtn.addEventListener('click', startGame);
    }

    // Agregar jugador
    function addPlayer(e) {
      e.preventDefault();
      const name = playerNameInput.value.trim();
      if (!name) return;
      
      if (players.find(p => p.name.toLowerCase() === name.toLowerCase())) {
        alert('El jugador ya existe');
        playerNameInput.value = '';
        return;
      }

      players.push({ 
        name, 
        marks: new Set(),
        color: getRandomNeonColor()
      });

      renderPlayersList();
      playerNameInput.value = '';
      
      // Habilitar botón de empezar si hay al menos 2 jugadores
      startGameBtn.disabled = players.length < 2;
      if (players.length >= 2) {
        startGameBtn.classList.remove('opacity-50', 'disabled:cursor-not-allowed');
      }
    }

    // Renderizar lista de jugadores en setup
    function renderPlayersList() {
      playersListEl.innerHTML = '';
      players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'bg-gray-800 rounded-md p-2 flex justify-between items-center';
        playerDiv.innerHTML = `
          <span class="text-${player.color}-300">${player.name}</span>
          <button onclick="removePlayer(${index})" class="text-red-400 hover:text-red-200">✕</button>
        `;
        playersListEl.appendChild(playerDiv);
      });
    }

    // Remover jugador
    function removePlayer(index) {
      players.splice(index, 1);
      renderPlayersList();
      startGameBtn.disabled = players.length < 2;
      if (players.length < 2) {
        startGameBtn.classList.add('opacity-50', 'disabled:cursor-not-allowed');
      }
    }

    // Iniciar juego
    function startGame() {
      if (players.length < 2) {
        alert('Se necesitan al menos 2 jugadores para comenzar');
        return;
      }

      setupScreen.classList.add('hidden');
      gameScreen.classList.remove('hidden');
      
      initBoard();
      renderActivePlayers();
      initGameEvents();
    }

    // Inicializar tablero
    function initBoard() {
      board = Array(TOTAL_CELLS).fill().map(() => ({
        desgracia: null,
        marks: new Set()
      }));

      boardEl.innerHTML = '';
      for (let i = 0; i < TOTAL_CELLS; i++) {
        const cell = document.createElement('div');
        cell.className = "bg-black/70 border border-gray-700 rounded-md flex flex-col justify-center items-center text-xs md:text-sm select-none cursor-pointer relative p-1 group hover:border-[#00f5ff] hover:shadow-[0_0_5px_#00f5ff] transition-all";
        cell.dataset.index = i;
        
        // Texto de la desgracia
        const textSpan = document.createElement('span');
        textSpan.className = "text-center leading-tight truncate max-w-full text-gray-400 group-hover:text-white transition-colors";
        textSpan.textContent = "?";
        cell.appendChild(textSpan);

        // Marcadores de jugadores
        const marksDiv = document.createElement('div');
        marksDiv.className = "absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-1 p-1";
        cell.appendChild(marksDiv);

        boardEl.appendChild(cell);
      }
    }

    // Renderizar jugadores activos
    function renderActivePlayers() {
      activePlayersEl.innerHTML = '';
      players.forEach((player) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = `bg-gray-800 rounded-md p-3 flex flex-col items-center cursor-pointer hover:bg-gray-700 transition-colors`;
        playerDiv.dataset.player = player.name;
        playerDiv.innerHTML = `
          <span class="text-${player.color}-300 font-semibold">${player.name}</span>
          <span class="text-sm text-gray-400">${player.marks.size} marcas</span>
        `;
        activePlayersEl.appendChild(playerDiv);
      });
    }

    // Inicializar eventos del juego
    function initGameEvents() {
      nextNumberBtn.addEventListener('click', generateNextDesgracia);
      
      // Evento click en celdas del tablero
      boardEl.addEventListener('click', (e) => {
        const cell = e.target.closest('[data-index]');
        if (!cell) return;
        
        const index = parseInt(cell.dataset.index);
        selectCell(index);
      });

      // Eventos del modal
      modalCancel.addEventListener('click', closeModal);
      modalConfirm.addEventListener('click', confirmAssignment);
    }

    // Generar siguiente desgracia
    function generateNextDesgracia() {
      // Buscar desgracias disponibles
      const availableDesgracias = desgracias.filter(d => !usedDesgracias.has(d));
      if (availableDesgracias.length === 0) {
        alert('¡No quedan más desgracias! El juego ha terminado.');
        return;
      }

      // Seleccionar desgracia aleatoria
      currentDesgracia = availableDesgracias[Math.floor(Math.random() * availableDesgracias.length)];
      usedDesgracias.add(currentDesgracia);

      // Buscar celda vacía aleatoria
      const emptyCells = board
        .map((cell, idx) => cell.desgracia === null ? idx : null)
        .filter(i => i !== null);

      if (emptyCells.length === 0) {
        alert('¡Tablero completo! El juego ha terminado.');
        return;
      }

      currentCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      board[currentCellIndex].desgracia = currentDesgracia;

      // Actualizar UI
      updateCellUI(currentCellIndex);
      animateBall();
      showDesgraciaPanel();
      updateStatusMessage(`Nueva desgracia generada: "${currentDesgracia}"`);

      // Mostrar en consola para debug
      console.log(`Desgracia: ${currentDesgracia}, Celda: ${currentCellIndex}`);
    }

    // Mostrar panel de desgracia en grande
    function showDesgraciaPanel() {
      currentDesgraciaText.textContent = currentDesgracia;
      currentDesgraciaPanel.classList.remove('hidden');
      
      // Ocultar después de 5 segundos
      setTimeout(() => {
        currentDesgraciaPanel.classList.add('hidden');
      }, 5000);
    }

    // Actualizar mensaje de estado
    function updateStatusMessage(message) {
      statusMessage.textContent = message;
    }

    // Actualizar UI de celda
    function updateCellUI(index) {
      const cell = boardEl.children[index];
      const textSpan = cell.firstChild;
      const cellData = board[index];
      
      textSpan.textContent = cellData.desgracia || "?";
      if (cellData.desgracia) {
        textSpan.className = "text-center leading-tight truncate max-w-full text-white font-semibold";
      }

      // Actualizar marcas
      const marksDiv = cell.lastChild;
      marksDiv.innerHTML = '';
      cellData.marks.forEach(playerName => {
        const player = players.find(p => p.name === playerName);
        const mark = document.createElement('span');
        mark.className = `text-xs font-bold text-${player.color}-300 drop-shadow-[0_0_2px_${player.color}]`;
        mark.textContent = playerName[0].toUpperCase();
        mark.title = playerName;
        marksDiv.appendChild(mark);
      });
    }

    // Animación de la bola
    function animateBall() {
      currentBallEl.innerHTML = '';
      currentBallEl.classList.remove('animate-ball-fall');
      
      const ball = document.createElement('div');
      ball.className = `w-12 h-12 rounded-full bg-gradient-to-r from-pink-300 to-[#00f5ff] flex items-center justify-center text-black font-bold text-xs shadow-[0_0_20px_#00f5ff]`;
      ball.textContent = '!';
      
      currentBallEl.appendChild(ball);
      
      // Forzar reflow para reiniciar animación
      void currentBallEl.offsetWidth;
      currentBallEl.classList.add('animate-ball-fall');
    }

    // Seleccionar celda
    function selectCell(index) {
      // Limpiar selección anterior
      if (selectedCellIndex !== null) {
        const prevCell = boardEl.children[selectedCellIndex];
        prevCell.classList.remove('ring-2', 'ring-pink-300', 'shadow-[0_0_10px_#ff6ec7]');
      }

      selectedCellIndex = index;
      const cell = boardEl.children[index];
      cell.classList.add('ring-2', 'ring-pink-300', 'shadow-[0_0_10px_#ff6ec7]');

      // Mostrar información de la celda seleccionada
      const cellData = board[index];
      selectedCellNumber.textContent = `Fila ${Math.floor(index/BOARD_SIZE) + 1}, Col ${(index % BOARD_SIZE) + 1}`;
      selectedCellInfo.classList.remove('hidden');

      if (cellData.desgracia) {
        updateStatusMessage(`Casilla seleccionada: "${cellData.desgracia}"`);
        openAssignmentModal(index);
      } else {
        updateStatusMessage('Casilla vacía seleccionada - Esperando desgracia');
      }
    }

    // Abrir modal de asignación
    function openAssignmentModal(cellIndex) {
      playersToAssign.clear();
      const cellData = board[cellIndex];
      modalDesgracia.textContent = cellData.desgracia;
      
      // Renderizar jugadores en el modal
      modalPlayers.innerHTML = '';
      players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = `bg-gray-800 rounded-md p-2 flex items-center gap-2 cursor-pointer ${
          playersToAssign.has(player.name) ? 'ring-2 ring-green-300' : 'hover:bg-gray-700'
        } transition-colors`;
        playerDiv.dataset.player = player.name;
        playerDiv.innerHTML = `
          <span class="text-${player.color}-300 font-semibold">${player.name}</span>
          <span class="text-sm text-gray-400 ml-auto">${cellData.marks.has(player.name) ? '✓' : ''}</span>
        `;
        playerDiv.addEventListener('click', () => togglePlayerAssignment(player.name));
        modalPlayers.appendChild(playerDiv);
      });

      assignmentModal.classList.remove('hidden');
    }

    // Alternar asignación de jugador
    function togglePlayerAssignment(playerName) {
      if (playersToAssign.has(playerName)) {
        playersToAssign.delete(playerName);
      } else {
        playersToAssign.add(playerName);
      }

      // Actualizar UI del modal
      const playerDivs = modalPlayers.querySelectorAll('[data-player]');
      playerDivs.forEach(div => {
        if (playersToAssign.has(div.dataset.player)) {
          div.classList.add('ring-2', 'ring-green-300');
        } else {
          div.classList.remove('ring-2', 'ring-green-300');
        }
      });
    }

    // Cerrar modal
    function closeModal() {
      assignmentModal.classList.add('hidden');
      playersToAssign.clear();
    }

    // Confirmar asignación
    function confirmAssignment() {
      if (selectedCellIndex === null) return;

      const cell = board[selectedCellIndex];
      
      playersToAssign.forEach(playerName => {
        // Alternar marca
        if (cell.marks.has(playerName)) {
          cell.marks.delete(playerName);
          players.find(p => p.name === playerName).marks.delete(selectedCellIndex);
        } else {
          cell.marks.add(playerName);
          players.find(p => p.name === playerName).marks.add(selectedCellIndex);
        }
      });

      // Actualizar UI
      updateCellUI(selectedCellIndex);
      renderActivePlayers();
      closeModal();
      
      // Verificar si hay ganador
      checkWinner();
    }

    // Verificar ganador
    function checkWinner() {
      for (const player of players) {
        // Crear matriz 7x7 de marcas
        const marks = Array.from({ length: BOARD_SIZE }, () => 
          Array.from({ length: BOARD_SIZE }, () => false)
        );

        player.marks.forEach(cellIndex => {
          const row = Math.floor(cellIndex / BOARD_SIZE);
          const col = cellIndex % BOARD_SIZE;
          marks[row][col] = true;
        });

        // Verificar filas
        for (let row = 0; row < BOARD_SIZE; row++) {
          if (marks[row].every(cell => cell)) {
            announceWinner(player);
            return;
          }
        }

        // Verificar columnas
        for (let col = 0; col < BOARD_SIZE; col++) {
          let complete = true;
          for (let row = 0; row < BOARD_SIZE; row++) {
            if (!marks[row][col]) {
              complete = false;
              break;
            }
          }
          if (complete) {
            announceWinner(player);
            return;
          }
        }
      }
    }

    // Anunciar ganador
    function announceWinner(player) {
      alert(`¡${player.name} es el ganador! Ha completado una línea con sus desgracias.`);
      
      // Opcional: reiniciar juego
      if (confirm('¿Quieres jugar de nuevo?')) {
        resetGame();
      }
    }

    // Reiniciar juego
    function resetGame() {
      players.forEach(p => p.marks.clear());
      usedDesgracias.clear();
      currentDesgracia = null;
      currentCellIndex = null;
      selectedCellIndex = null;
      playersToAssign.clear();
      
      gameScreen.classList.add('hidden');
      setupScreen.classList.remove('hidden');
      
      renderPlayersList();
      startGameBtn.disabled = players.length < 2;
    }

    // Utilidad: color neón aleatorio
    function getRandomNeonColor() {
      const colors = ['pink', 'cyan', 'green', 'yellow', 'purple'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
=======

    // Variables globales
    const BOARD_SIZE = 7;
    const TOTAL_CELLS = BOARD_SIZE * BOARD_SIZE;
    let players = [];
    let board = [];
    let usedDesgracias = new Set();
    let currentDesgracia = null;
    let currentCellIndex = null;
    let selectedCellIndex = null;
    let playersToAssign = new Set();

    // Elementos DOM
    const setupScreen = document.getElementById('setup-screen');
    const gameScreen = document.getElementById('game-screen');
    const playerForm = document.getElementById('player-form');
    const playerNameInput = document.getElementById('player-name');
    const playersListEl = document.getElementById('players-list');
    const startGameBtn = document.getElementById('start-game');
    const boardEl = document.getElementById('board');
    const nextNumberBtn = document.getElementById('next-number');
    const currentBallEl = document.getElementById('current-ball');
    const currentDesgraciaPanel = document.getElementById('current-desgracia-panel');
    const currentDesgraciaText = document.getElementById('current-desgracia-text');
    const statusMessage = document.getElementById('status-message');
    const selectedCellInfo = document.getElementById('selected-cell-info');
    const selectedCellNumber = document.getElementById('selected-cell-number');
    const activePlayersEl = document.getElementById('active-players');
    const assignmentModal = document.getElementById('assignment-modal');
    const modalDesgracia = document.getElementById('modal-desgracia');
    const modalPlayers = document.getElementById('modal-players');
    const modalCancel = document.getElementById('modal-cancel');
    const modalConfirm = document.getElementById('modal-confirm');

    // Pool de desgracias
    const desgracias = [
"Lo encontraron chapando en el baño de una fiesta",
"Se quedó dormido después de una noche con más de una persona",
"Fue visto saliendo del telo con alguien conocido",
"Se enganchó con dos personas el mismo día",
"Lo pescaron en pleno acto en la casa de un amigo",
"Tuvo que esconderse porque entraron los padres en un momento íntimo",
"Se chapó al ex de un amigo en un boliche",
"Lo encontraron a los besos en la facultad",
"Terminó en la cama con alguien que apenas conocía",
"Lo descubrieron mandando nudes en clase",
"Se enganchó con alguien en un viaje de estudio",
"Le sacaron foto en una situación íntima sin permiso",
"Lo atraparon en pleno sexting por la persona equivocada",
"Se chapó a alguien en el baño de un boliche",
"Terminó con un desconocido después de una fiesta",
"Fue visto escapando de una casa de madrugada",
"Se quedó encerrado con alguien en una habitación comprometedora",
"Tuvo que salir corriendo porque llegaron los padres",
"Lo vieron a escondidas con alguien comprometido",
"Estuvo con dos personas que se conocían entre sí",
"Lo grabaron sin darse cuenta en una situación íntima",
"Se enganchó con alguien mucho mayor en una fiesta",
"Fue atrapado con mensajes subidos de tono en el celular",
"Se chapó a alguien frente a la persona equivocada",
"Terminó en la misma cama con varias personas en un viaje",
"Fue descubierto en el auto en un momento íntimo",
"Se besó con alguien prohibido en un evento familiar",
"Lo vieron salir de una habitación cerrada con alguien",
"Se enganchó con alguien en el baño de la facultad",
"Lo encontraron en plena videollamada comprometedora",
"Se cruzó a alguien después de una noche intensa y fue incómodo",
"Fue sorprendido buscando privacidad en una fiesta",
"Estuvo con alguien que después negó todo",
"Se quedó sin excusas cuando lo encontraron en la cama equivocada",
"Tuvo que salir a escondidas de la casa de alguien",
"Fue sorprendido chapando con alguien en un parque",
"Se enganchó con un desconocido en un viaje",
"Se quedó atrapado en un lugar íntimo y no pudo escapar",
"Fue pescado en pleno beso por un familiar",
"Lo encontraron abrazado con alguien en una fiesta",
"Terminó con alguien que estaba comprometido",
"Lo vieron chapando en un pasillo oscuro",
"Se chapó a alguien frente a un ex",
"Estuvo con alguien y se arrepintió al día siguiente",
"Lo descubrieron después de mandar un audio íntimo sin querer",
"Se enganchó con alguien prohibido en el colegio",
"Lo vieron saliendo de la casa de alguien en plena madrugada",
"Se quedó encerrado en un baño con alguien más",
"Fue pescado tocando a alguien en una fiesta",
"Se chapó a alguien en secreto y los encontraron igual",
"Lo encontraron mandando nudes",
"Tuvo sexo en el baño de un boliche",
"Se chapó a dos personas en una misma noche",
"Salió con alguien que tenía pareja",
"Se enganchó con un profe",
"Lo pescaron mirando porno",
"Se chapó al ex de un amigo",
"Tuvo sexo en la playa",
"Fue infiel y lo descubrieron",
"Se grabó en la cama",
"Se quedó desnudo por accidente",
"Lo vieron entrando a un telo",
"Tuvo un trío inesperado",
"Se despertó en la cama equivocada",
"Le encontraron chats subidos de tono",
"Se chapó a alguien mucho mayor",
"Tuvo sexo en el auto",
"Estuvo con dos amigos del mismo grupo",
"Lo pescaron haciéndolo en casa ajena",
"Se olvidó borrar fotos íntimas",
"Se chapó a alguien en la fiesta de egresados",
"Tuvo sexo con alguien y al otro día con otra persona",
"Lo encontraron desnudo en videollamada",
"Se levantó al novio de otra",
"Se enganchó con un desconocido de una app",
"Lo escracharon con mensajes hot",
"Tuvo sexo en el colegio/universidad",
"Se chapó a alguien frente a la ex",
"Estuvo con un amigo de su hermano/a",
"Lo encontraron haciéndolo en un lugar público",
"Fue infiel con alguien del trabajo",
"Se chapó al hermano/a de un amigo",
"Tuvo sexo en una fiesta",
"Lo vieron salir del cuarto equivocado",
"Se chapó a alguien en una boda",
"Tuvo una cita doble con dos personas a la vez",
"Lo encontraron dormido con alguien inesperado",
"Se enganchó con alguien de mucha diferencia de edad",
"Tuvo sexo con alguien que conoció esa misma noche",
"Le revisaron el celu y encontraron todo",
"Estuvo con alguien comprometido",
"Se chapó a alguien en el boliche y después a otra",
"Tuvo una aventura secreta por meses",
"Se enganchó con alguien del grupo de ex",
"Fue descubierto viendo contenido hot en el aula",
"Lo filmaron sin darse cuenta",
"Se chapó a alguien en la pileta",
"Tuvo sexo en la casa de un familiar",
"Lo pescaron escapándose de una casa ajena",
"Lo encontraron desnudo con alguien en la habitación equivocada",
"Se chapó al mejor amigo de su ex",
"Tuvo sexo en el ascensor",
"Se grabó y después el video se filtró",
"Lo descubrieron teniendo una cita doble el mismo día",
"Se chapó a alguien con pareja frente a todos",
"Tuvo sexo en el vestuario del gimnasio",
"Se despertó con alguien y no se acordaba el nombre",
"Lo encontraron mirando fotos íntimas en el celu en público",
"Se chapó a un profe en la fiesta de fin de año",
"Tuvo sexo en un parque de noche",
"Le mandaron nudes por error a la persona equivocada",
"Se enganchó con el/la ex de su amigo más cercano",
"Tuvo sexo en el baño de un avión",
"Fue descubierto en una videollamada subidita de tono",
"Se chapó a dos personas que eran amigos entre sí",
"Tuvo sexo en la pileta con gente alrededor",
"Le revisaron el historial y encontraron cosas turbias",
"Estuvo con alguien casado/a",
"Tuvo sexo en un telo y lo encontró un conocido",
"Se chapó a alguien delante de la pareja",
"Se olvidó de borrar nudes en la galería y alguien los vio",
"Tuvo sexo en la playa con gente mirando",
"Se enganchó con un/a profe particular",
"Lo descubrieron escapándose por la ventana",
"Se chapó al ex de su hermano/a",
"Tuvo sexo en la biblioteca",
"Lo encontraron semidesnudo en un auto",
"Se enganchó con más de una persona del mismo grupo de amigos",
"Se chapó a alguien en el casamiento de un conocido",
"Tuvo sexo en el baño de un restaurante",
"Fue descubierto con alguien en el probador de ropa",
"Le mandaron un nude suyo a un grupo equivocado",
"Se chapó a alguien en el pasillo de la facultad",
"Tuvo sexo con alguien que conoció por Tinder esa misma noche",
"Lo escracharon con capturas de chats hot",
"Se enganchó con alguien mucho mayor por pura adrenalina",
"Tuvo sexo en la terraza",
"Se chapó al/la ex de su pareja actual",
"Lo descubrieron a los besos en la casa de un amigo",
"Se enganchó con alguien de la misma familia (primo/a)",
"Tuvo sexo en el vestuario del colegio",
"Se quedó encerrado en un telo",
"Lo encontraron saliendo de la casa equivocada al amanecer",
"Tuvo un trío con dos desconocidos",
"Se chapó a alguien en la cancha en medio del partido",
"Tuvo sexo en el baño de un boliche con la fila esperando",
"Fue infiel con alguien del círculo más cercano",
"Se enganchó con alguien que le presentó su mejor amigo"
    ];

    // Inicializar
    document.addEventListener('DOMContentLoaded', () => {
      initSetup();
    });

    // Setup inicial
    function initSetup() {
      playerForm.addEventListener('submit', addPlayer);
      startGameBtn.addEventListener('click', startGame);
    }

    // Agregar jugador
    function addPlayer(e) {
      e.preventDefault();
      const name = playerNameInput.value.trim();
      if (!name) return;
      
      if (players.find(p => p.name.toLowerCase() === name.toLowerCase())) {
        alert('El jugador ya existe');
        playerNameInput.value = '';
        return;
      }

      players.push({ 
        name, 
        marks: new Set(),
        color: getRandomNeonColor()
      });

      renderPlayersList();
      playerNameInput.value = '';
      
      // Habilitar botón de empezar si hay al menos 2 jugadores
      startGameBtn.disabled = players.length < 2;
      if (players.length >= 2) {
        startGameBtn.classList.remove('opacity-50', 'disabled:cursor-not-allowed');
      }
    }

    // Renderizar lista de jugadores en setup
    function renderPlayersList() {
      playersListEl.innerHTML = '';
      players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'bg-gray-800 rounded-md p-2 flex justify-between items-center';
        playerDiv.innerHTML = `
          <span class="text-${player.color}-300">${player.name}</span>
          <button onclick="removePlayer(${index})" class="text-red-400 hover:text-red-200">✕</button>
        `;
        playersListEl.appendChild(playerDiv);
      });
    }

    // Remover jugador
    function removePlayer(index) {
      players.splice(index, 1);
      renderPlayersList();
      startGameBtn.disabled = players.length < 2;
      if (players.length < 2) {
        startGameBtn.classList.add('opacity-50', 'disabled:cursor-not-allowed');
      }
    }

    // Iniciar juego
    function startGame() {
      if (players.length < 2) {
        alert('Se necesitan al menos 2 jugadores para comenzar');
        return;
      }

      setupScreen.classList.add('hidden');
      gameScreen.classList.remove('hidden');
      
      initBoard();
      renderActivePlayers();
      initGameEvents();
    }

    // Inicializar tablero
    function initBoard() {
      board = Array(TOTAL_CELLS).fill().map(() => ({
        desgracia: null,
        marks: new Set()
      }));

      boardEl.innerHTML = '';
      for (let i = 0; i < TOTAL_CELLS; i++) {
        const cell = document.createElement('div');
        cell.className = "bg-black/70 border border-gray-700 rounded-md flex flex-col justify-center items-center text-xs md:text-sm select-none cursor-pointer relative p-1 group hover:border-[#00f5ff] hover:shadow-[0_0_5px_#00f5ff] transition-all";
        cell.dataset.index = i;
        
        // Texto de la desgracia
        const textSpan = document.createElement('span');
        textSpan.className = "text-center leading-tight truncate max-w-full text-gray-400 group-hover:text-white transition-colors";
        textSpan.textContent = "?";
        cell.appendChild(textSpan);

        // Marcadores de jugadores
        const marksDiv = document.createElement('div');
        marksDiv.className = "absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-1 p-1";
        cell.appendChild(marksDiv);

        boardEl.appendChild(cell);
      }
    }

    // Renderizar jugadores activos
    function renderActivePlayers() {
      activePlayersEl.innerHTML = '';
      players.forEach((player) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = `bg-gray-800 rounded-md p-3 flex flex-col items-center cursor-pointer hover:bg-gray-700 transition-colors`;
        playerDiv.dataset.player = player.name;
        playerDiv.innerHTML = `
          <span class="text-${player.color}-300 font-semibold">${player.name}</span>
          <span class="text-sm text-gray-400">${player.marks.size} marcas</span>
        `;
        activePlayersEl.appendChild(playerDiv);
      });
    }

    // Inicializar eventos del juego
    function initGameEvents() {
      nextNumberBtn.addEventListener('click', generateNextDesgracia);
      
      // Evento click en celdas del tablero
      boardEl.addEventListener('click', (e) => {
        const cell = e.target.closest('[data-index]');
        if (!cell) return;
        
        const index = parseInt(cell.dataset.index);
        selectCell(index);
      });

      // Eventos del modal
      modalCancel.addEventListener('click', closeModal);
      modalConfirm.addEventListener('click', confirmAssignment);
    }

    // Generar siguiente desgracia
    function generateNextDesgracia() {
      // Buscar desgracias disponibles
      const availableDesgracias = desgracias.filter(d => !usedDesgracias.has(d));
      if (availableDesgracias.length === 0) {
        alert('¡No quedan más desgracias! El juego ha terminado.');
        return;
      }

      // Seleccionar desgracia aleatoria
      currentDesgracia = availableDesgracias[Math.floor(Math.random() * availableDesgracias.length)];
      usedDesgracias.add(currentDesgracia);

      // Buscar celda vacía aleatoria
      const emptyCells = board
        .map((cell, idx) => cell.desgracia === null ? idx : null)
        .filter(i => i !== null);

      if (emptyCells.length === 0) {
        alert('¡Tablero completo! El juego ha terminado.');
        return;
      }

      currentCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      board[currentCellIndex].desgracia = currentDesgracia;

      // Actualizar UI
      updateCellUI(currentCellIndex);
      animateBall();
      showDesgraciaPanel();
      updateStatusMessage(`Nueva desgracia generada: "${currentDesgracia}"`);

      // Mostrar en consola para debug
      console.log(`Desgracia: ${currentDesgracia}, Celda: ${currentCellIndex}`);
    }

    // Mostrar panel de desgracia en grande
    function showDesgraciaPanel() {
      currentDesgraciaText.textContent = currentDesgracia;
      currentDesgraciaPanel.classList.remove('hidden');
      
      // Ocultar después de 5 segundos
      setTimeout(() => {
        currentDesgraciaPanel.classList.add('hidden');
      }, 5000);
    }

    // Actualizar mensaje de estado
    function updateStatusMessage(message) {
      statusMessage.textContent = message;
    }

    // Actualizar UI de celda
    function updateCellUI(index) {
      const cell = boardEl.children[index];
      const textSpan = cell.firstChild;
      const cellData = board[index];
      
      textSpan.textContent = cellData.desgracia || "?";
      if (cellData.desgracia) {
        textSpan.className = "text-center leading-tight truncate max-w-full text-white font-semibold";
      }

      // Actualizar marcas
      const marksDiv = cell.lastChild;
      marksDiv.innerHTML = '';
      cellData.marks.forEach(playerName => {
        const player = players.find(p => p.name === playerName);
        const mark = document.createElement('span');
        mark.className = `text-xs font-bold text-${player.color}-300 drop-shadow-[0_0_2px_${player.color}]`;
        mark.textContent = playerName[0].toUpperCase();
        mark.title = playerName;
        marksDiv.appendChild(mark);
      });
    }

    // Animación de la bola
    function animateBall() {
      currentBallEl.innerHTML = '';
      currentBallEl.classList.remove('animate-ball-fall');
      
      const ball = document.createElement('div');
      ball.className = `w-12 h-12 rounded-full bg-gradient-to-r from-pink-300 to-[#00f5ff] flex items-center justify-center text-black font-bold text-xs shadow-[0_0_20px_#00f5ff]`;
      ball.textContent = '!';
      
      currentBallEl.appendChild(ball);
      
      // Forzar reflow para reiniciar animación
      void currentBallEl.offsetWidth;
      currentBallEl.classList.add('animate-ball-fall');
    }

    // Seleccionar celda
    function selectCell(index) {
      // Limpiar selección anterior
      if (selectedCellIndex !== null) {
        const prevCell = boardEl.children[selectedCellIndex];
        prevCell.classList.remove('ring-2', 'ring-pink-300', 'shadow-[0_0_10px_#ff6ec7]');
      }

      selectedCellIndex = index;
      const cell = boardEl.children[index];
      cell.classList.add('ring-2', 'ring-pink-300', 'shadow-[0_0_10px_#ff6ec7]');

      // Mostrar información de la celda seleccionada
      const cellData = board[index];
      selectedCellNumber.textContent = `Fila ${Math.floor(index/BOARD_SIZE) + 1}, Col ${(index % BOARD_SIZE) + 1}`;
      selectedCellInfo.classList.remove('hidden');

      if (cellData.desgracia) {
        updateStatusMessage(`Casilla seleccionada: "${cellData.desgracia}"`);
        openAssignmentModal(index);
      } else {
        updateStatusMessage('Casilla vacía seleccionada - Esperando desgracia');
      }
    }

    // Abrir modal de asignación
    function openAssignmentModal(cellIndex) {
      playersToAssign.clear();
      const cellData = board[cellIndex];
      modalDesgracia.textContent = cellData.desgracia;
      
      // Renderizar jugadores en el modal
      modalPlayers.innerHTML = '';
      players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = `bg-gray-800 rounded-md p-2 flex items-center gap-2 cursor-pointer ${
          playersToAssign.has(player.name) ? 'ring-2 ring-green-300' : 'hover:bg-gray-700'
        } transition-colors`;
        playerDiv.dataset.player = player.name;
        playerDiv.innerHTML = `
          <span class="text-${player.color}-300 font-semibold">${player.name}</span>
          <span class="text-sm text-gray-400 ml-auto">${cellData.marks.has(player.name) ? '✓' : ''}</span>
        `;
        playerDiv.addEventListener('click', () => togglePlayerAssignment(player.name));
        modalPlayers.appendChild(playerDiv);
      });

      assignmentModal.classList.remove('hidden');
    }

    // Alternar asignación de jugador
    function togglePlayerAssignment(playerName) {
      if (playersToAssign.has(playerName)) {
        playersToAssign.delete(playerName);
      } else {
        playersToAssign.add(playerName);
      }

      // Actualizar UI del modal
      const playerDivs = modalPlayers.querySelectorAll('[data-player]');
      playerDivs.forEach(div => {
        if (playersToAssign.has(div.dataset.player)) {
          div.classList.add('ring-2', 'ring-green-300');
        } else {
          div.classList.remove('ring-2', 'ring-green-300');
        }
      });
    }

    // Cerrar modal
    function closeModal() {
      assignmentModal.classList.add('hidden');
      playersToAssign.clear();
    }

    // Confirmar asignación
    function confirmAssignment() {
      if (selectedCellIndex === null) return;

      const cell = board[selectedCellIndex];
      
      playersToAssign.forEach(playerName => {
        // Alternar marca
        if (cell.marks.has(playerName)) {
          cell.marks.delete(playerName);
          players.find(p => p.name === playerName).marks.delete(selectedCellIndex);
        } else {
          cell.marks.add(playerName);
          players.find(p => p.name === playerName).marks.add(selectedCellIndex);
        }
      });

      // Actualizar UI
      updateCellUI(selectedCellIndex);
      renderActivePlayers();
      closeModal();
      
      // Verificar si hay ganador
      checkWinner();
    }

    // Verificar ganador
    function checkWinner() {
      for (const player of players) {
        // Crear matriz 7x7 de marcas
        const marks = Array.from({ length: BOARD_SIZE }, () => 
          Array.from({ length: BOARD_SIZE }, () => false)
        );

        player.marks.forEach(cellIndex => {
          const row = Math.floor(cellIndex / BOARD_SIZE);
          const col = cellIndex % BOARD_SIZE;
          marks[row][col] = true;
        });

        // Verificar filas
        for (let row = 0; row < BOARD_SIZE; row++) {
          if (marks[row].every(cell => cell)) {
            announceWinner(player);
            return;
          }
        }

        // Verificar columnas
        for (let col = 0; col < BOARD_SIZE; col++) {
          let complete = true;
          for (let row = 0; row < BOARD_SIZE; row++) {
            if (!marks[row][col]) {
              complete = false;
              break;
            }
          }
          if (complete) {
            announceWinner(player);
            return;
          }
        }
      }
    }

    // Anunciar ganador
    function announceWinner(player) {
      alert(`¡${player.name} es el ganador! Ha completado una línea con sus desgracias.`);
      
      // Opcional: reiniciar juego
      if (confirm('¿Quieres jugar de nuevo?')) {
        resetGame();
      }
    }

    // Reiniciar juego
    function resetGame() {
      players.forEach(p => p.marks.clear());
      usedDesgracias.clear();
      currentDesgracia = null;
      currentCellIndex = null;
      selectedCellIndex = null;
      playersToAssign.clear();
      
      gameScreen.classList.add('hidden');
      setupScreen.classList.remove('hidden');
      
      renderPlayersList();
      startGameBtn.disabled = players.length < 2;
    }

    // Utilidad: color neón aleatorio
    function getRandomNeonColor() {
      const colors = ['pink', 'cyan', 'green', 'yellow', 'purple'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
>>>>>>> 4a7d40bebcf4dc1f13a4f1663001167ab3c5e857
  