

// $(".btn")[ran].addClass(".pressed");

// setTimeout(function() {
//     $(".btn")[ran].removeClass(".pressed");
// }, 100);
var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var level = 0;
var toggle = false;

// Plays sound
function playSound(name) {
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}


//Checks for the keypress and starts the game
if(toggle === false){
    $(document).on("keypress", function(){
        level = 0;
        toggle = true;
        s = 0;  
        nextSequence();
    });
}

var s=0; // For looping over the clicks to check the answer
//Generating the next sequence for the game.
function nextSequence() {
    level++;
    $("h1").text("Level "+level);
    var ran = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[ran];
    gamePattern.push(randomChosenColor);
    console.log(randomChosenColor);
    s = 0;
    playSound(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
}

//Mouse clicks and functionality
$(".btn").on("click", function(event){
    userClickedPattern.push(this.id);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(this.id);
});

//Checking the answer
function checkAnswer(ans) {
    console.log(ans);
    console.log(gamePattern[s]);
    
    
    if(ans === gamePattern[s]){
        console.log(("Sucess"));
    }
    else{
        console.log("Failure");
        $("h1").text("Game Over, Press any key to restart");
        $("body").addClass("game-over");
        playSound("wrong");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        toggle = false;
        gamePattern = [];
    }
    if(s+1 == gamePattern.length){
        setTimeout(function() {
            nextSequence();
        }, 1000);
    }
    s++;
}

//Animation of mouse clicks
function animatePress(color) {
    $("#"+color).addClass("pressed");
    setTimeout(function() {
        $("#"+color).removeClass("pressed");
    }, 100);
}

// while(true){
//     nextSequence();
//     if(clickId === gamePattern[i]){
//         continue;
//     }
//     else
//     // show game over and if pressed any key to reset the game
// }