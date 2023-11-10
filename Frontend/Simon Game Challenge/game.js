var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPickedPattern = [];
var randomChosenColor;
var hasGameStarted=false;
var level = 0;

$(document).on("keydown", function(){
    if(!hasGameStarted){
        nextSequence()
        hasGameStarted=true;
    }
        else{
            return;
        }
});

$(".btn").on("click",function(){
    var userChosenColor = $(this).attr("id");
    userPickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userPickedPattern.length-1);
});

function nextSequence()
{
    level++;
    $("h1").text("Level "+level);

    var randomNum = Math.floor(Math.random() * 4);
    selectRandomColor(randomNum);
}
function selectRandomColor(randomNumber)
{
    randomChosenColor = buttonColors[randomNumber];
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
}

function playSound(name)
{
    console.log("playing");
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    },100);
}

function checkAnswer(index)
{
    // check 
    if (userPickedPattern[index] === gamePattern[index])
    {
        if(userPickedPattern.length === gamePattern.length)
        {
            userPickedPattern.length=0;
            console.log("win");
            setTimeout(function(){
                nextSequence();
            },1000);
        }

    }
    else{
        console.log("lose");
        var lose = new Audio("./sounds/wrong.mp3");
        lose.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern.length=0;
    userPickedPattern.length=0;
    hasGameStarted=false;
}