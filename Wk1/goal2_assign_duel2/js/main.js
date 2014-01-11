/* Elimarie Morales Santiago
 Jan. 11, 2014
 Goal1: Assignment: The Duel - Part1
 */

// self-executing function

(function(){
        console.log("FIGHT!!!");

// Players Names
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

// Players Health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

// Players Damage
    var playerOneDamge = 20;
    var playerTwoDamage = 20;

// Initiate Round
    var round = 0;

    function fight(){

     alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);

     for (var i = 0; i < 10; i++){

// Random formula
            var minDamage1 = playerOneDamge * .5;
            var minDamage2 = playerTwoDamage * .5;
            var f1 = Math.floor(Math.random() * (playerOneDamge - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);

// inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName + ":" + playerOneHealth + ":" + playerTwoName + ":" + playerTwoHealth);

// check for winner
            var result= winnerCheck();
            console.log(result);
            if (result === " No Winner "){
            round ++;
            alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
            }else {
            alert(result);

            break;
      };
        };

    };

    function winnerCheck(){
            console.log("In winnerCheck FN");

    var result= " No Winner ";

        if (playerOneHealth < 1 && playerTwoHealth < 1){
          result = " You Both Die ";

        }else if (playerOneHealth <1){
          result = playerTwoName + " WINS!!! ";

        }else if (playerTwoHealth <1){
          result = playerOneName + " WINS!!! ";

        };

    return result;

    };

    /*** The program starts below ***/

    fight();

})();



