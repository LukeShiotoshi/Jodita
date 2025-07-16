document.addEventListener('DOMContentLoaded', () => {
  const counterDiv = document.getElementById('drink-counter');

  // Actualiza la UI con datos que vienen de Firebase
  function actualizarContadoresUI(data) {
    if (!data) {
      counterDiv.innerHTML = '<p class="text-yellow-300">Nadie bancó ningún trago aún</p>';
      return;
    }
    const textos = Object.entries(data).map(([key, val]) => {
      // El key viene como "Mojito", "Adios-Amigos-Cocktail", etc.
      const nombre = key.replace(/-/g, ' ');
      return `${val} ${nombre}`;
    });
    counterDiv.innerHTML = `<p class="text-yellow-300 font-semibold">${textos.join(', ')}</p>`;
  }

  // Escuchamos cambios en los votos en Firebase en tiempo real
  const ref = db.ref('counter');
  ref.on('value', snapshot => {
    const data = snapshot.val();
    actualizarContadoresUI(data);
  });

  // Función global para votar, que suma 1 en Firebase
  window.vote = function(drinkName) {
    const key = drinkName.replace(/\s+/g, '-');
    const drinkRef = db.ref('counter/' + key);
    drinkRef.transaction(current => (current || 0) + 1);
  };
   actualizarContadoresUI()
});


async function traducirHTML(html) {
  try {
    const res = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: html,
        source: 'en',
        target: 'es',
        format: 'html',
        api_key: ''
      })
    })
    if (!res.ok) throw new Error(res.statusText)
    const { translatedText } = await res.json()
    return translatedText
  } catch (e) {
    console.warn('Fallo traducción HTML:', e)
    return html
  }
}

  // Evento para traer y mostrar cóctel
  btnFetch.addEventListener('click', async () => {
    container.innerHTML = `<p class="text-gray-400">Cargando…</p>`
    // No tocamos ni borramos el contador acá

    try {
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      if (!res.ok) throw new Error('CocktailDB ' + res.status)
      const { drinks } = await res.json()
      const drink = drinks[0]

      // Ingredientes crudos
      const rawIngr = []
      for (let i = 1; i <= 15; i++) {
        const ing = drink[`strIngredient${i}`]
        const meas = drink[`strMeasure${i}`] || ''
        if (ing) rawIngr.push(`${meas.trim()} ${ing.trim()}`)
      }

      // HTML para traducir
      const ingrHTML = `<ul>${rawIngr.map(i => `<li>${i}</li>`).join('')}</ul>`
      const prepHTML = `<p>${drink.strInstructions}</p>`

      // Traducción
      const [ingrESHTML, prepESHTML] = await Promise.all([
        traducirHTML(ingrHTML),
        traducirHTML(prepHTML)
      ])

      // Bandera y fondo
      const countryFlags = {
        USA: '🇺🇸', UK: '🇬🇧', Canada: '🇨🇦', Mexico: '🇲🇽',
        France: '🇫🇷', Italy: '🇮🇹', Spain: '🇪🇸', Argentina: '🇦🇷',
        Brazil: '🇧🇷', Germany: '🇩🇪', Japan: '🇯🇵'
      }
      const drinkBackgrounds = {
        Vodka: 'bg-gradient-to-r from-purple-900 via-pink-700 to-purple-900',
        Rum: 'bg-gradient-to-r from-yellow-800 via-red-700 to-yellow-800',
        Tequila: 'bg-gradient-to-r from-green-700 via-yellow-500 to-green-700',
        Whiskey: 'bg-gradient-to-r from-orange-800 via-amber-600 to-orange-800',
        Gin: 'bg-gradient-to-r from-blue-800 via-cyan-600 to-blue-800',
        Beer: 'bg-gradient-to-r from-yellow-600 via-orange-400 to-yellow-600'
      }
      const area = drink.strArea || 'Desconocido'
      const flag = countryFlags[area] || '🌍'
      const main = rawIngr[0]?.toLowerCase() || ''
      let bgClass = 'bg-black bg-opacity-60'
      for (const key in drinkBackgrounds) {
        if (main.includes(key.toLowerCase())) {
          bgClass = drinkBackgrounds[key]
          break
        }
      }

      // Render final
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
        </div>`
    } catch (err) {
      console.error('Error completo:', err)
      container.innerHTML = `<p class="text-red-500">Error al cargar el trago. Probá de nuevo.</p>`
    }
  })
