"use strict";
let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;
let userDamage = 0;
let grantDamage = 0;
let userName = undefined;
let game = prompt("Do you want to play a game?");
if (game === "yes") {
  userName = prompt("Choose your username");
  while (grantWins < 1 && userWins < 3) {
    if (userHealth > 0 && grantHealth > 0) {
      userDamage = Math.floor((Math.random() * 2) + 1);
      grantDamage = Math.floor((Math.random() * 2) + 1);
      userHealth = userHealth - userDamage;
      grantHealth = grantHealth - grantDamage;
      console.log(`${userName} has ${userHealth} health left.`);
      console.log(`Grant has ${grantHealth} health left.`);
    } else if (grantHealth <= 0) {
      userWins++; 
      if (userWins === 3) {
        console.log("You win!");
        break;
      }
      console.log(userWins);
      grantHealth = 10;
    } else if (userHealth <= 0) {
      console.log("You lose");
      break;
    }
  }
}