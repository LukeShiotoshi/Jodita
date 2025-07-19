document.addEventListener('DOMContentLoaded', () => {
  const counterDiv = document.getElementById('drink-counter');
  const container = document.getElementById('cocktail-container'); // Asegurate que este exista
  const btnFetch = document.getElementById('cocktailBtn'); // Id del botón

  // Actualiza la UI con datos que vienen de Firebase
  function actualizarContadoresUI(data) {
    const texto = !data
      ? '<p class="text-yellow-300">Nadie bancó ningún trago aún</p>'
      : `<p class="text-yellow-300 font-semibold animate-fade-in">${Object.entries(data)
        .map(([key, val]) => `${val} ${key.replace(/-/g, ' ')}`)
        .join(', ')}</p>`;

    counterDiv.querySelector('div').innerHTML = texto;
  }

  // Escuchamos cambios en los votos en Firebase en tiempo real
  const ref = db.ref('counter');
  ref.on('value', snapshot => {
    const data = snapshot.val();
    actualizarContadoresUI(data);
  });

  // Función global para votar, que suma 1 en Firebase
  window.vote = function (drinkName) {
    const key = drinkName.replace(/\s+/g, '-');
    const drinkRef = db.ref('counter/' + key);
    drinkRef.transaction(current => (current || 0) + 1);
  };

  // Render botones para votar
  function renderVotingButtons(name) {
    const safeName = name.replace(/\s+/g, '-');
    return `
      <div class="mt-4 text-center">
        <button onclick="vote('${name}')" class="bacnar-btn px-4 py-2 bg-yellow-300 text-purple-900 font-bold rounded transition">
          Bancar este trago 🍹
        </button>
      </div>
    `;
  }

  // Evento para traer y mostrar cóctel
  btnFetch.addEventListener('click', async () => {
    container.innerHTML = `<p class="text-gray-400">Cargando…</p>`;

    try {
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      if (!res.ok) throw new Error('CocktailDB ' + res.status);
      const { drinks } = await res.json();
      const drink = drinks[0];

      const rawIngr = [];
      for (let i = 1; i <= 15; i++) {
        const ing = drink[`strIngredient${i}`];
        const meas = drink[`strMeasure${i}`] || '';
        if (ing) rawIngr.push(`${meas.trim()} ${ing.trim()}`);
      }

      const ingrHTML = `<ul class="fade-slide-in">${rawIngr.map(i => `<li>${i}</li>`).join('')}</ul>`;
      const prepHTML = `<p class="fade-slide-in">${drink.strInstructions}</p>`;
      const ingrESHTML = ingrHTML;
      const prepESHTML = prepHTML;


      const countryFlags = {
        USA: '🇺🇸', UK: '🇬🇧', Canada: '🇨🇦', Mexico: '🇲🇽',
        France: '🇫🇷', Italy: '🇮🇹', Spain: '🇪🇸', Argentina: '🇦🇷',
        Brazil: '🇧🇷', Germany: '🇩🇪', Japan: '🇯🇵'
      };

      const drinkBackgrounds = {
        Vodka: 'bg-gradient-to-r from-purple-900 via-pink-700 to-purple-900',
        Rum: 'bg-gradient-to-r from-yellow-800 via-red-700 to-yellow-800',
        Tequila: 'bg-gradient-to-r from-green-700 via-yellow-500 to-green-700',
        Whiskey: 'bg-gradient-to-r from-orange-800 via-amber-600 to-orange-800',
        Gin: 'bg-gradient-to-r from-blue-800 via-cyan-600 to-blue-800',
        Beer: 'bg-gradient-to-r from-yellow-600 via-orange-400 to-yellow-600'
      };

      const area = drink.strArea || 'Desconocido';
      const flag = countryFlags[area] || '🌍';
      const main = rawIngr[0]?.toLowerCase() || '';
      let bgClass = 'bg-black bg-opacity-60';

      for (const key in drinkBackgrounds) {
        if (main.includes(key.toLowerCase())) {
          bgClass = drinkBackgrounds[key];
          break;
        }
      }

      container.innerHTML = `
        <div class="${bgClass} border-2 border-[#00f5ff] rounded-xl p-6 shadow-lg text-white">
          <h3 class="text-2xl neon-text mb-2">${drink.strDrink} ${flag}</h3>
          <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"
               class="w-64 mx-auto rounded-lg neon-border mb-4" />
          <h4 class="text-[#00f5ff] text-xl mb-2">Ingredientes:</h4>
          ${ingrESHTML}
          <h4 class="text-[#00f5ff] text-xl mb-2">Preparación:</h4>
          ${prepESHTML}
          ${renderVotingButtons(drink.strDrink)}
        </div>`;
    } catch (err) {
      console.error('Error completo:', err);
      container.innerHTML = `<p class="text-red-500">Error al cargar el trago. Probá de nuevo.</p>`;
    }
  });
});