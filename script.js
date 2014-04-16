// Check if the user is ready to play!
confirm("LET'S PLAY!")

var open = prompt("Are you ready to help Chuck catch a squirrel?");

if (open === "yes")
    { 
        console.log(open);
        alert("I love that enthusiasm! Let's go!");
    }
else
    {   console.log(open);
        alert("Too bad! Chuck is anxious to catch one today! Let's go!");
    }

console.log("You are Chuck the Husky and you see a squirrel running up a tree");

console.log("You run over to the tree but notice another squirrel hiding in a bush")

var userAnswer = prompt("Do you leave the squirrel in the tree to try to catch the one in a bush?");

if (userAnswer === "yes")
    {
        alert("Oh bad choice. Both squirrels got away");
    }
else 
    {
        alert("Good job! You caught a squirrel!")
    }
    
var userAnswer = prompt("We've had a rough day of squirrel chasing! Are you ready for a nap?");

if (userAnswer === "yes")
    {
        alert("Great choice! Good night!");
    }
else {
        alert("Sorry but I think you need to rest up before you hunt again!");
     }
