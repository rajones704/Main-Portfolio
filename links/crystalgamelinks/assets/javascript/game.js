//Make a game with 4 crystals and random results
//Each crystal needs a random # between 19-120
//A new random # should be generated every win/lose for the 4 crystals 1-2
//When clicking any Crystal it should add with previous result until it = total score...I think
//If it is greater than the Random result, we decrease lost counter
//If it is equal- then increment win counter
//Game must restart when player win/lose
//Generate new random number
//must make a win/lose counter

var randomResult = [];
var lost = 0;
var win = 0;
var previous = 0;

//Make a game with 4 crystals and random results


var resetStart = function () { }

$(".crystals").empty();

var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsW9qA1q4ipXnKBeuWBhnJE_oLoX0bc22Ha6YodAafpFBEbAj",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7D5kvEPaTdhk4tMWdL0OXW_ad_upOJD9aPkXvfD7jAYCRCPGD",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73maJW_ieuXbW0SjtIWJ_1A6-QFJug4ASb7RfBRy4_UVbBq76",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiirF1t1OCIRCxP351v2bt8zgM0pq-xveXhny29Vg7LztWlce3"];
//Each crystal needs a random # between 19-120

randomResult = Math.floor(Math.random() * 101) + 19; //
//console.log(randomResult);

$("#result").html("Random Result: " + randomResult);

//A new random # should be generated between 1-2 for the 4 crystals 
for (var i = 0; i < 4; i++) {       // x4

    var random = Math.floor(Math.random() * 12) + 1;
  //  console.log(random);

    var crystal = $("<div>");
    crystal.attr({               //<<<<<<< ???? >>>>>>\\
        "class": "crystal",
        "data-random": random
    });

    crystal.css({  
        "background-image": "url('" + images[i] + "')",
     });


$(".crystals").append(crystal);


}

resetStart();

var resetStart = function () {
}

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random")); //is referring to any of the crystals

    //When clicking any Crystal it should add with previous result until it = total score...I think

    previous += num;
    //console.log(previous);

    if (previous > randomResult) {

        lose--;

        $("#lose").html("You lose: " + lose);
      //  console.log("You lose: ");
 previous = 0;
        resetStart();

    }

    else if (previous === randomResult) {

        win++;

        $("#win").html("You win: " + win);
     //   console.log("You win: ");
 previous = 0;
        resetStart();
      //  console.log(resetStart);
    }
   //   console.log(previous === randomResult);
 //    console.log($(this).attr("data-random")); //is referring to any of the crystals


});

