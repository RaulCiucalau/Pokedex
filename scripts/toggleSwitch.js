function checkIfToggleSwitch() {
  let checkbox = document.getElementById('toggleSwitch');
  if (checkbox.checked) {
    flipCardsEnabled();
    setHoverEffect(true);
  } else {
    flipCardsDisabled();
    setHoverEffect(false);

  }
}

function flipCardsDisabled() {
  document.getElementById('flipCardTransformProperty').disabled = true;

}
function flipCardsEnabled() {
  document.getElementById('flipCardTransformProperty').disabled = false;
}

function setHoverEffect(disable) {
  let cards = document.querySelectorAll('.flip-card-container');
  cards.forEach(card => {
    if (disable) {
        card.classList.add('no-hover');
    } else {
        card.classList.remove('no-hover');
    }
});
}