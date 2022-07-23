

// FOR DICE 1 
var randomno1 = Math.floor(6 * Math.random()) + 1;
// so we will be geting values btw 1 to 6   

var randomDiceImage1 = "dice" + randomno1 + ".png";
// to get a variable with value dice1.png - dice6.png

var randomDiceImageSource1 = "images/" + randomDiceImage1;
// to get a variable as images/dice1.png - images/dice6.png


var image1 = document.querySelectorAll("img")[0];       // or we could have used        var image1 = document.querySelector(".img1");


image1.setAttribute("src", randomDiceImageSource1);
// changing the src to randomDiceImageSource1




// FOR DICE 2 
// similarily we will do this whole thing for the second dice image
var randomno2 = Math.floor(6 * Math.random()) + 1;
var randomDiceImage2 = "dice" + randomno2 + ".png";
var randomDiceImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];       // var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDiceImageSource2);


if (randomno1 > randomno2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Won!"
}

else if (randomno2 > randomno1) {
    document.querySelector("h1").innerHTML = "🚩Player2 Won!"
}

else {
    document.querySelector("h1").innerHTML = "It's a Tie, try again please."
}
