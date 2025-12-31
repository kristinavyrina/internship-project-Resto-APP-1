function bubbleClose() {
  const selectors = {
    bubble: '.bubble',
    bubbleButton: '.bubble-button',
  }

  const stateClasses = {
    invisible: 'invisible',
  }

  const bubbleElement = document.querySelector(selectors.bubble);
  const bubbleButtonElement = document.querySelector(selectors.bubbleButton);

  bubbleButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    bubbleElement.classList.add(stateClasses.invisible);
  });
}

bubbleClose();