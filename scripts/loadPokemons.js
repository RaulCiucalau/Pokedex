let pokemons = new Array();
let currentPokecards = [];
let pokemonsLoaded = false;

async function onLoadFunc() {
    // Load initial pokemons
    if (pokemonsLoaded) return;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25&offset=0");
    const pokemonData = await response.json();
    showLoadingSpinner();
    for (let i = 0; i < pokemonData.results.length; i++) {
        await fetchPokemon(pokemonData.results[i], i);
    }
    currentPokecards = pokemons;
    renderPokeCards(pokemons);
    hideLoadingSpinner();
    pokemonsLoaded = true; 
}

function renderPokeCards(pokemonArray) {
    const contentRef = document.getElementById('content');
    contentRef.innerHTML = '';
    pokemonArray.forEach((pokemon, index) => {
        let formattedId = String(index + 1);
        contentRef.innerHTML += getContentTemplate(pokemon, index, formattedId);
    });
    contentRef.innerHTML += getMorePokemonsTemplate();
    checkIfToggleSwitch();
}

async function fetchPokemon(pokemon, index) {
    let response = await fetch(pokemon.url);
    let data = await response.json();
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`;
    let types = data.types.map(type => type.type.name);
    const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
    const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
    const speed = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
    const height = data.height;
    const weight = data.weight;
    pushDataInPokemonsArray(pokemon, imageUrl, types, hp, attack, defense, speed, height, weight);
}

function pushDataInPokemonsArray(pokemon, imageUrl, types, hp, attack, defense, speed, height, weight) {
    pokemons.push({
        name: pokemon.name,
        imageUrl,
        types,
        types2: types.map(type => type + "2"),
        hp,
        attack,
        defense,
        speed,
        height: height * 10,
        weight: weight * 0.10
    });
}