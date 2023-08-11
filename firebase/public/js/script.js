// Função para embaralhar um array usando o algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Selecionar o container de cards
  const cardContainer = document.querySelector('.responsive-container-block .responsive-container-block');

  // Obter uma lista de todos os elementos de card dentro do container
  const cards = Array.from(cardContainer.querySelectorAll('.card-container'));

  // Embaralhar a ordem dos cards
  shuffleArray(cards);

  // Limpar o container
  cardContainer.innerHTML = '';

  // Adicionar os cards embaralhados de volta ao container
  cards.forEach(card => {
    cardContainer.appendChild(card);
  });
  