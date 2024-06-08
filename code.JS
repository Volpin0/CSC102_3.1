function PlayCraps() {
    //This is a one-line comment
    /*this is a function to play craps in game.html
    Must reference the JS file in the HTML to work.
    rules for craps
    Roll two dice
    add up to 7 or 11, you lose.
    if they are doubles and even you win!
    everything else is a push
    */
    //Jakil W 5/30/24
    console.log("playCraps() started");
    // This tells the console that the game has started, the code below will work without it but it is useful for troubleshooting. 
    //Roll dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    // var makes a variable for this JS file and = sets the variable to a number.
    // Math.random() generates a random number between 0 and <1, multiply by 6 to make the number range from 0 to <6. 
    // Math.floor() rounds this number down to the nearest whole number, giving a range from 0 to 5.
    // + 1 makes it 1 to 6.
    console.log(die1);
    // This prints the variable to the console.
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;
    //  This gets a div by its id and changes the text between the open and close to the text contained in the "", + die1 adds the variable to the end of the text
    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //look for loss
    if (sum == 7 || sum == 11) {
        // "if" checks for requirements in the () if the requirements are fulfilled it will do actions in the {}
        // == checks if the variable is equal to a number and sets it to true or false.
        // || checks the true and false, if at least one side is true the requirements are met and the {} actions will be performed.  
        console.log("loss");
        document.getElementById("gameRes").innerHTML = " You lost! Hold this <h1>L</h1>";
    } else if (die1 == die2 && die1 % 2 == 0) {
        // "else if" are new requirements to be checked if "if" fails.
        // && checks if both sides are true, if yes it returns true.
        // % 2 divides the variable by 2, if the result is equal to 0 then the variable was divisible by 2
        console.log("win");
        document.getElementById("gameRes").innerHTML = " I think you cheated but here have this <h1>W</h1>";
    } else {
        // If all other requirements fail "else" will be executed.
        console.log("tie");
        document.getElementById("gameRes").innerHTML = " That was close, run it back!";


    }

    //look for win

    //everything else is a push

}
