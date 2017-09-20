function initialize()
{

//Generating a random number between 19 and 120. "Var randomNumber" is creating 
var beginGame = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(beginGame);
var audio = new Audio("Diamonds.mp3");


var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(randomNumber);
var audio = new Audio("Diamonds.mp3");


$( document ).ready(function() {
    console.log( "ready!" );


$("#startGame").click(function(){
$("#startGame").replaceWith( beginGame );
	console.log("StartGame?");

//Onclick place random number in div
$("#imageStyleOne, #imageStyleTwo, #imageStyleThree, #imageStyleFour").click(function(){
$( "#randomNumberResult" ).replaceWith( randomNumber );
	console.log("This is working?");

//play theme song
audio.play();
	console.log("Music added!!!!!")

})


})

});

}

// call this code
$(initialize);

