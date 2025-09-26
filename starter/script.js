'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
//another way of getting an ID using getElementById
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;

// Rolling cice functionality
btnRoll.addEventListener('click', function(){
  // Generate random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceNumber}.png`;

  // Check for rolled 1: if true ? switch to next player
  if(diceNumber !==1){
    // Add dice to the current score
    currentScore += diceNumber;
    current0Element.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to the next player
  }
})

