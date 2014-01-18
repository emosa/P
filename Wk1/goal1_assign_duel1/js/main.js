/* Elimarie Morales Santiago
 Jan. 10, 2014
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

    var fighter1 = ["Spiderman",100,20];
    var fighter2 = ["Batman", 100,20];



// Initiate Round
    var round = 0;

    function fight(){

     alert(fighter1[0] + ":" + fighter1[1] + " *START* " + fighter2[0] + ":" + fighter2[1]);

     for (var i = 0; i < 10; i++){

// Random formula
            var minDamage1 = fighter1[2] * .5;
            var minDamage2 = fighter2[2] * .5;
            var f1 = Math.floor(Math.random() * (fighter1[2] - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (fighter2[2] - minDamage2) + minDamage2);

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



