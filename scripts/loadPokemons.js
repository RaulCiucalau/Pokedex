let pokemons = [];
async function onLoadFunc() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    let pokemonData = await response.json();
    let contentRef = document.getElementById('content');
    for (let i = 0; i < pokemonData.results.length; i++) {
        await fetchPokemon(pokemonData.results[i], i);
    }
    contentRef.innerHTML = '';
    pokemons.forEach((pokemon, index) => {
        contentRef.innerHTML += getContentTemplate(pokemon, index);
        checkIfToggleSwitch();
    });
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

openOverlay(index)
}

function pushDataInPokemonsArray(pokemon, imageUrl, types, hp, attack, defense, speed, height, weight) {
    pokemons.push({
        name: pokemon.name,
        imageUrl,
        types,
        hp,
        attack,
        defense,
        speed,
        height: height * 10,
        weight: weight * 0.10
    });
}