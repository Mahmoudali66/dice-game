var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomdiceImage = "images/dice"+ randomNumber1 +".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomdiceImage2 = "images/dice"+ randomNumber2 +".png"; 

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdiceImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="😋Player1 Wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins😋";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}