function setupStack(stackSelector) {
  const stack = document.querySelector(stackSelector);
  const cards = Array.from(stack.children)
    .reverse()
    .filter((child) => child.classList.contains("card"));

  cards.forEach((card) => stack.appendChild(card));

  function moveCard() {
    const lastCard = stack.lastElementChild;
    if (lastCard.classList.contains("card")) {
      lastCard.classList.add("swap");

      setTimeout(() => {
        lastCard.classList.remove("swap");
        stack.insertBefore(lastCard, stack.firstElementChild);
      }, 1200);
    }
  }

  stack.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (card && card === stack.lastElementChild) {
      card.classList.add("swap");

      setTimeout(() => {
        card.classList.remove("swap");
        stack.insertBefore(card, stack.firstElementChild);
        resetAutoplay();
      }, 1200);
    }
  });

  let autoplayInterval = setInterval(moveCard, 4000);

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(moveCard, 4000);
  }
}

setupStack(".stack"); // primera sección
setupStack(".stack2"); // segunda sección (la que está abajo)
