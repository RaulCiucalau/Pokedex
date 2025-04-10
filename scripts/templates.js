function getContentTemplate(pokemon) {
    return `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="flip-card-front-img" src="./assets/img/pokedex_card_optimized.png" alt="">
                </div>
                <div class="flip-card-back">
                    <div class="poke-name">${pokemon.name}</div>
                    <div class="poke-card-details">
                        <div class="poke-img-container  ${pokemon.types[0]}" id="card-color-type">
                            <img class="poke-img" src="${pokemon.imageUrl}" />
                        </div>
                        <div class="poke-type">
                            <div>${pokemon.types}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}