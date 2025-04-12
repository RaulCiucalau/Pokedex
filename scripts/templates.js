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
                    <button class="tablinks" onclick="openTabOverlay(event, 'London')">Main</button>
                    <button class="tablinks" onclick="openTabOverlay(event, 'Paris')">Stats</button>
                </div>

                <div id="London" class="tabcontent">
                    <h3>Main</h3>
                    <p>adssaddas</p>
                </div>

                <div id="Paris" class="tabcontent">
                    <h3>Stats</h3>
                    <p>adsadsads</p> 
                </div>
                </div>
        </div>
    `;
}