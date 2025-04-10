let pokemons = [];

async function onLoadFunc() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    let pokemonData = await response.json();
    let contentRef = document.getElementById('content');
    for (let i = 0; i < pokemonData.results.length; i++) {
        await fetchPokemon(pokemonData.results[i], i);
    }
    contentRef.innerHTML = '';
    Object.keys(pokemons).forEach(key => {
        contentRef.innerHTML += getContentTemplate(pokemons[key]);
    });
}

async function fetchPokemon(pokemon, index) {
    let res = await fetch(pokemon.url);
    let details = await res.json();
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`;
    let types = details.types.map(t => t.type.name);
    pokemons.push({
         name: pokemon.name, 
         imageUrl, 
         types 
        });
}