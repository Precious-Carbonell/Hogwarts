document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      { name: '1', img: 'assets/images/1.png' },
      { name: '2', img: 'assets/images/2.png' },
      { name: '3', img: 'assets/images/3.png' },
      { name: '4', img: 'assets/images/4.png' },
      { name: '5', img: 'assets/images/5.png' },
      { name: '6', img: 'assets/images/6.png' },
      { name: '1', img: 'assets/images/1.png' },
      { name: '2', img: 'assets/images/2.png' },
      { name: '3', img: 'assets/images/3.png' },
      { name: '4', img: 'assets/images/4.png' },
      { name: '5', img: 'assets/images/5.png' },
      { name: '6', img: 'assets/images/6.png' }
    ];
  
    cardArray.sort(() => 0.5 - Math.random());
  
    const grid = document.querySelector('#grid');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let currentScore = 0;
    let timer = null;
    let timeRemaining = 60;
    let gameOver = false;
    let gameStarted = false;
    const gameOverModal = document.getElementById('gameOverModal');
    const victoryModal = document.getElementById('victoryModal');
    const finalScoreElement = document.getElementById('finalScore');
    const finalScoreVictoryElement = document.getElementById('finalScoreVictory');
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/images/brain.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
  
      if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'assets/images/brain.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/brain.png');
      } else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'assets/images/white.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        currentScore++;
        scoreElement.textContent = 'Score: ' + currentScore;
      } else {
        setTimeout(() => {
          cards[optionOneId].setAttribute('src', 'assets/images/brain.png');
          cards[optionTwoId].setAttribute('src', 'assets/images/brain.png');
        }, 1000);
      }
      cardsChosen = [];
      cardsChosenId = [];
      scoreElement.textContent = 'Score: ' + currentScore;
  
      if (cardsWon.length === cardArray.length / 2) {
        clearInterval(timer);
        showVictoryModal();
      } else if (timeRemaining <= 0) {
        clearInterval(timer);
        showGameOverModal();
      }
    }
  
    function flipCard() {
      let cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if (!gameStarted) {
        startTimer();
        gameStarted = true;
      }
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  
    function showGameOverModal() {
      finalScoreElement.textContent = currentScore;
      gameOverModal.style.display = 'block';
      const closeButton = document.getElementsByClassName('close')[0];
      closeButton.addEventListener('click', function () {
        gameOverModal.style.display = 'none';
      });
    }
  
    function showVictoryModal() {
      finalScoreVictoryElement.textContent = currentScore;
      victoryModal.style.display = 'block';
      const closeButton = document.getElementsByClassName('close')[1];
      closeButton.addEventListener('click', function () {
        victoryModal.style.display = 'none';
      });
      gameOver = true;
      resetGame();
    }
  
    function updateTimer() {
      timeRemaining--;
      timerElement.textContent = 'Time: ' + timeRemaining;
  
      if (timeRemaining <= 0 && !gameOver) {
        clearInterval(timer);
        showGameOverModal();
        gameOver = true;
      }
    }
  
    function startTimer() {
      timer = setInterval(updateTimer, 1000);
    }
  
    // Inicia o jogo
    function startGame() {
      createBoard();
    }
  
    function resetGame() {
      clearInterval(timer);
      timeRemaining = 60;
      timerElement.textContent = 'Time: ' + timeRemaining;
      grid.innerHTML = '';
      cardsChosen = [];
      cardsChosenId = [];
      cardsWon = [];
      currentScore = 0;
      scoreElement.textContent = 'Score: ' + currentScore;
      createBoard();
    }
  
    const startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', startGame);
  
    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', resetGame);
  });
