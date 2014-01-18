/* Elimarie Morales Santiago
 Jan. 18, 2014
 Goal3: Assignment: The Duel - Part3
 */

// self-executing function

(function(){


    var fighters = [

        { name: "Spiderman",
        health: 100,
        damage:20
    },
        { name: "Batman",
        health: 100,
        damage: 20
        }
    ];

    console.log(fighters);

// initiate round

    var round = 0;

    var  heather1 = document.getElementById("Spiderman");

         heather1.innerHTML = fighters[0].health;


    var  heather2 = document.getElementById("Batman");

         heather2.innerHTML = fighters[1].health;


    console.log(heather1);
    console.log(heather2);



    function fight(){




// Random formula
            var minDamage1 = fighters[0].damage * .5;
            var minDamage2 = fighters[1].damage * .5;
            var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2);

// inflict damage
            fighters[0].health-=f1;
            fighters[1].health-=f2;

        var heather1 = document.getElementById("Spiderman");
        heather1.innerHTML =fighters[0].health;

        var heather2 = document.getElementById("Batman");
        heather2.innerHTML =fighters[1].health;



// check for winner
        var result= winnerCheck();
        console.log(result);
        if (result === " No Winner "){
            round ++;
            heather1.innerHTML = fighters[0].health;
            heather2.innerHTML = fighters[1].health;

            // document.write(fighters[0].health + " *ROUND " + round + " OVER* " + fighters[1].health);

        }else {
            //document.write(result);

            document.getElementById("round").innerHTML = "Round" + round + "Round Over";
      }


    }

    function winnerCheck(){
        console.log("In winnerCheck FN");

        var result= " No Winner ";

        if (fighters[0] < 1 && fighters[1] < 1){
            result = " You Both Die ";

        }else if (fighters[0] <1){
            result = fighters[1] + " WINS!!! ";

        }else if (fighters[1] <1){
            result = fighters[0] + " WINS!!! ";

        };

        return result;

    };



    /*** The program starts below ***/
     fight();

    var button = document.querySelector('.buttonblue');
        button.onclick = function(e){

          e.preventDefault();
          return false;

      }

})();



