var btnArray = document.querySelectorAll(".drum");
for(var i=0; i<btnArray.length;i++)
{
    btnArray[i].addEventListener("click", function()
    {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}

document.addEventListener("keydown", function(KeyboardEvent)
{
    makeSound(KeyboardEvent.key);
    buttonAnimation(KeyboardEvent.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            break;
        default:
            console.log("default");
    }
    audio.play();
}


function buttonAnimation(pressedKey)
{
    var activeBtn = document.querySelector("."+ pressedKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}