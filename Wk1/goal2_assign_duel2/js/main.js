/* Elimarie Morales Santiago
 Jan. 11, 2014
 Goal2: Assignment: The Duel - Part2
 */

// self-executing function

(function(){
        console.log("FIGHT!!!");

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
            fighter1[1]-=f1;
            fighter2[1]-=f2;


            console.log(fighter1[0] + ":" + fighter1[1] + ":" + fighter2[0] + ":" + fighter2[1]);

// check for winner
            var result= winnerCheck();
            console.log(result);
            if (result === " No Winner "){
            round ++;
            alert(fighter1[0] + ":" + fighter1[1] + " *ROUND " + round + " OVER* " + fighter2[0] + ":" + fighter2[1]);
            }else {
            alert(result);

            break;
      };
        };

    };

    function winnerCheck(){
            console.log("In winnerCheck FN");

    var result= " No Winner ";

        if (fighter1[1] < 1 && fighter2[1] < 1){
          result = " You Both Die ";

        }else if (fighter1[1] <1){
          result = fighter2[0] + " WINS!!! ";

        }else if (fighter2[1] <1){
          result = fighter1[0] + " WINS!!! ";

        };

    return result;

    };

    /*** The program starts below ***/

    fight();

})();



