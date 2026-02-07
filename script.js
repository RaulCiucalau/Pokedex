let currentIndex = 0;
let offset = 25 * 1;
let limit = 5;

function toggleOverlay() {
    const overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
    updateScrollLockBasedOnOverlay();
}

function openOverlay(index) {
    let selectedPokemon = pokemons[index];
    let overlayRef = document.getElementById("overlay");
    let formattedId = String(index + 1);
    overlayRef.classList.toggle("d_none");
    overlayRef.innerHTML = "";
    overlayRef.innerHTML = getOverlayTemplate(selectedPokemon, formattedId);
    updateScrollLockBasedOnOverlay();
    currentIndex = index;
}

function updateCardData(index) {
    const selectedPokemon = pokemons[index];
    const overlayRef = document.getElementById("overlay");
    const formattedId = String(index + 1);
    overlayRef.innerHTML = getOverlayTemplate(selectedPokemon, formattedId);
    currentIndex = index;
}

function openTabOverlay(evt, tabName) {
    const tabContent = document.getElementsByClassName("tab_content");
    const tabLinks = document.getElementsByClassName("tab_links");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function updatePokeCard(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = pokemons.length - 1;
    } else if (currentIndex >= pokemons.length) {
        currentIndex = 0;
    }
    updateCardData(currentIndex);
}

function nextBtnPokeCard() {
    updatePokeCard(1);
}

function backBtnPokeCard() {
    updatePokeCard(-1);
}

function updateScrollLockBasedOnOverlay() {
    const overlay = document.getElementById("overlay");
    const isOverlayVisible = !overlay.classList.contains("d_none");
    document.body.classList.toggle("no-scroll", isOverlayVisible);
}

function searchPokemon() {
    const inputText = document.getElementById('searchBar').value.trim().toLowerCase();
    if (inputText.length < 3) {
        renderPokeCards(pokemons);
        return;
    }
    const currentPokecards = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(inputText)
    );
    renderPokeCards(currentPokecards);
    document.getElementById('loadMorePokemons').classList.add("d_none");
}

function showLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'flex';
}

function hideLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'none';
}

async function loadMorePokemons() {
    showLoadingSpinner();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const pokemonData = await response.json();
    for (const result of pokemonData.results) {
        await fetchPokemon(result, pokemons.length);
    }
    renderPokeCards(pokemons);
    offset += limit;
    hideLoadingSpinner();
    if (offset >= 1302) {
        document.getElementById('loadMoreBtn').classList.add("d_none");
    }
}