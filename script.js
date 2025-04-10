function checkIfToggleSwitch() {
    let checkbox = document.getElementById('toggleSwitch');
    if (checkbox.checked) {
        flipCardsEnabled();
      } else {
        flipCardsDisabled();
      }
}

function flipCardsDisabled() {
    document.getElementById('flipCardHover').disabled = true;
    document.getElementById('flipCardTransformProperty').disabled = true;
}
function flipCardsEnabled() {
    document.getElementById('flipCardHover').disabled = false;
    document.getElementById('flipCardTransformProperty').disabled = false;
}