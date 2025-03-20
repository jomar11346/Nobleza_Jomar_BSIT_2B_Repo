// Declared Variables
 
var randomLoc = Math.floor(Math.random() * 5);
 
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess ;
var hits = 0;
var guesses = 0;


var isSunk = false;

// Game Logic


while (isSunk == false){
    guess = prompt("Ready!, Aim!, Fire! (Enter number 0-6) ")

    if (guess == null) {
        alert("thank u for playing botchog 🫰 ");
        break;
    }else{

        guesses += 1;

        if(guess == location1 || guess == location2 || guess == location3){
            hits += 1;
            alert("HIT!")

            if(hits == 3){
                isSunk = true;
                alert("You Won! Congrats!")

            }
        }else{
            alert("MISS!")
        }


    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(3);

var stats = "You Sank my Battleships at  " + guesses + guesses + "and your accuracy is " + (3/guesses);

alert(stats);
