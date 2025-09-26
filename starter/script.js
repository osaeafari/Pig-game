'use strict';

// Selecting elements
const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1')
const score0Element = document.querySelector('#score--0');
//another way of getting an ID using getElementById
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Initialize the game
const initialize = function () {
  scores = [0, 0];
  // Round score (the small score in under the current)
  currentScore = 0;
  // Active player
  activePlayer = 0;
  // palying 
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

// Starting the game
initialize();

const switchPlayer = function(){
  // selecting the active player and passing the score
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Setting current score back to 0
  currentScore = 0;
  // Switch to the next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Changing the active player color
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active'); 
};

// Rolling cice functionality
btnRoll.addEventListener('click', function(){
  if (playing) {
    // Generate random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceNumber}.png`;

    // Check for rolled 1: if true ? switch to next player
    if(diceNumber !== 1){
      // Add dice to the current score
      currentScore += diceNumber;
      // selecting the active player and passing the score
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // Swtich player
      switchPlayer();
    }
  }
  
});

// Implementing the hold button functionality
btnHold.addEventListener('click', function(){
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // Check if the player's score is >= 50, Finish game
    if(scores[activePlayer] >= 100){
      // Finish the game
      playing = false;
      diceElement.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // Switch to next player 
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function() {
  initialize();
});