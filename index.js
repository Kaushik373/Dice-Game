function randomNumberGenarator() {
    return Math.floor((Math.random()*6)+1);
}

var dice1 = randomNumberGenarator();
var dice2 = randomNumberGenarator();

document.querySelector(".image1").setAttribute("src",'images/dice'+dice1+'.png');
document.querySelector(".image2").setAttribute("src",'images/dice'+dice2+'.png');


if(dice1 > dice2){
    document.querySelector("h1").textContent="🚩Player 1 is the Winner!";
}   
else if(dice1 === dice2){
    document.querySelector("h1").textContent="It's a draw!";
}
else{
    document.querySelector("h1").textContent="Player 2 is the Winner!🚩";
}

