let currentIndex = 0;

function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
}

function openOverlay(index) {
    let selectedPokemon = pokemons[index];
    let overlayRef = document.getElementById("overlay");
    let formattedId = String(index + 1).padStart(3, '0');
    overlayRef.classList.toggle("d_none");
    overlayRef.innerHTML = "";
    overlayRef.innerHTML = getOverlayTemplate(selectedPokemon, formattedId);
}

function openTabOverlay(evt, tabName) {
    let i;
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}