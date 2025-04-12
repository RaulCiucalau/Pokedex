function getContentTemplate(pokemon, index) {
    return `
        <div class="flip-card-container" onclick="openOverlay(${index})">
        <div id="flipCard" class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="flip-card-front-img" src="./assets/img/pokedex_card_optimized.png" alt="">
                </div>
                <div class="flip-card-back">
                    <div class="poke-name">${pokemon.name}</div>
                    <div class="poke-card-details">
                        <div class="poke-img-container  ${pokemon.types[0]}" id="card-color-type">
                            <img class="poke-img" src="${pokemon.imageUrl}" alt="${pokemon.name}">
                        </div>
                        <div class="poke-type">
                            <div>${pokemon.types}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `
}

function getOverlayTemplate(pokemon, formattedId) {
    return `
        <div class="overlay-content">
            <h2 class ="card-overlay-title">#${formattedId}</h2>
            <h2 class ="card-overlay-title">${pokemon.name}</h2>
            <div class="card-overlay-details">
                <div class="card-overlay-img-container ${pokemon.types[0]}" id="card-color-type">
                    <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
                </div>
                <p>${pokemon.types}</p>
                <div class="tab-pokemon-overlay">
                    <button class="tablinks active" onclick="openTabOverlay(event,'Main')">Main</button>
                    <button class="tablinks" onclick="openTabOverlay(event, 'Stats')">Stats</button>
                </div>

                <div id="Main" class="tabcontent" style="display: block;">
                    <p><strong>Height:</strong> ${pokemon.height} cm</p>
                    <p><strong>Weight:</strong> ${pokemon.weight.toFixed(2).replace('.', ',')} kg</p>
                </div>
                <div id="Stats" class="tabcontent" style="display: none;">
                    <p><strong>HP:</strong></p>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${pokemon.hp / 255 * 100}%; max-width: 100%;">${pokemon.hp}</div>
                    </div>
                    <p><strong>Attack:</strong></p>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${pokemon.attack / 190 * 100}%; max-width: 100%;">${pokemon.attack}</div>
                    </div>
                    <p><strong>Defense:</strong></p>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${pokemon.defense / 250 * 100}%; max-width: 100%;">${pokemon.defense}</div>
                    </div>
                    <p><strong>Speed:</strong></p>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${pokemon.speed / 200 * 100}%; max-width: 100%;">${pokemon.speed}</div>
                    </div>
                </div>
        </div>
    `;
}