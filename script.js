let currentIndex = 0;

function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
}

function openOverlay(index) {
    let selectedPokemon = pokemons[index];
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
    overlayRef.innerHTML = "";
    overlayRef.innerHTML = getOverlayTemplate(selectedPokemon);
}