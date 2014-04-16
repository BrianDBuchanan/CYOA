// Check if the user is ready to play!
confirm("LET'S PLAY!")

var age = prompt("How old are you?");

if (age < 18)
    {
        console.log("Ok, you are allowed to play but I take no reponsibility for you.");
    }
else
    {
        console.log("Game on!");
    }

console.log("You are Chuck the Husky and you see a squirrel running up a tree");

console.log("You run over to the tree but notice another squirrel hiding in a bush")

var userAnswer = prompt("Do you leave the squirrel in the tree to try to catch the one in a bush?");

if (userAnswer === "yes")
    {
        console.log("Oh bad choice. Both squirrels got away");
    }
else 
    {
        console.log("Good job! You caught a squirrel!")
    }
    
var userAnswer = prompt("We've had a rough day of squirrel chasing! Are you ready for a nap?");

if (userAnswer === "yes")
    {
        console.log("Great choice! Good night!");
    }
else {
        console.log("Sorry but I think you need to rest up before you hunt again!");
     }
