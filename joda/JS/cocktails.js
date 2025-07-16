document.addEventListener('DOMContentLoaded', () => {
  const btnFetch = document.getElementById('cocktailBtn')
  const container = document.getElementById('cocktail-container')
  const counterDiv = document.getElementById('drink-counter')

  // Función para actualizar UI con datos de localStorage
  function actualizarContadoresUI() {
    const textos = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key.startsWith('counter-')) {
        const val = localStorage.getItem(key)
        const nombre = key.replace('counter-', '').replace(/-/g, ' ')
        textos.push(`${val} ${nombre}`)
      }
    }
    counterDiv.innerHTML = textos.length
      ? `<div class="inline-block max-w-4xl px-6 py-2 bg-purple-900 bg-opacity-70 rounded-lg text-yellow-300 font-semibold shadow-lg">
          ${textos.join(', ')}
        </div>`
      : `<div class="inline-block max-w-4xl px-6 py-2 bg-purple-900 bg-opacity-70 rounded-lg text-yellow-300 font-semibold shadow-lg">
          Nadie bancó ningún trago aún
        </div>`
  }
  function renderVotingButtons(nombre) {
  return `
    <div class="mt-4">
      <p class="text-[#00f5ff] font-bold mb-2">¿Lo bancás?</p>
      <button onclick="vote('${nombre}')"
              class="text-lg font-semibold bg-[#00f5ff] px-4 py-2 rounded neon-border
                     hover:bg-white hover:text-black transition">
        re banco
      </button>
    </div>`
}

  // Función para votar y guardar en localStorage
  window.vote = function (drinkName) {
    const key = `counter-${drinkName.replace(/\s+/g, '-')}`
    let cnt = parseInt(localStorage.getItem(key)) || 0
    localStorage.setItem(key, ++cnt)
    actualizarContadoresUI()
  }

  // Mostrar contador al cargar la página
  actualizarContadoresUI()
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
})
