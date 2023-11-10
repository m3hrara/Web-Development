var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var img1src = "./images/dice"+randomNum1+".png";
var img2src = "./images/dice"+randomNum2+".png";

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

img1.setAttribute("src", img1src);
img2.setAttribute("src", img2src);

if(randomNum1>randomNum2)
{
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if(randomNum1<randomNum2)
{
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else{
    document.querySelector("h1").textContent = "Draw!";
}