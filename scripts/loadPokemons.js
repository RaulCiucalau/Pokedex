let pokemons = [];

async function onLoadFunc() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    let responseAsJson = await response.json();
    let contentRef = document.getElementById('content');
    for (let index = 0; index < responseAsJson.results.length; index++) {
        let pokemon = responseAsJson.results[index];
        let pokemonData = await fetch(pokemon.url);
        let pokemonDetails = await pokemonData.json();
        let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`;
        let types = pokemonDetails.types.map(type => type.type.name);
        pokemons.push({
            name: pokemon.name,
            imageUrl: imageUrl,
            types: types
        });
    }
    contentRef.innerHTML = '';
    Object.keys(pokemons).forEach(key => {
        let pokemon = pokemons[key];
        contentRef.innerHTML += getContentTemplate(pokemon);
    });
}