let currentIndex = 0;

function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
    document.body.classList.remove("no-scroll");
}

function openOverlay(index) {
    document.body.classList.add("no-scroll");
    let selectedPokemon = pokemons[index];
    let overlayRef = document.getElementById("overlay");
    let formattedId = String(index + 1);
    overlayRef.classList.toggle("d_none");
    overlayRef.innerHTML = "";
    overlayRef.innerHTML = getOverlayTemplate(selectedPokemon, formattedId);
    
}

function updateCardData(index) {
    let selectedPokemon = pokemons[index];
    let overlayRef = document.getElementById("overlay");
    let formattedId = String(index + 1);
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

