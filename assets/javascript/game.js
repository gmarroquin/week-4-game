function initialize()
{

//Generating a random number between 19 and 120. "Var beginGame" is creating the initial random number. 
var beginGame = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(beginGame);
var audio = new Audio("Diamonds.mp3");

//score when clicking on a diamond 
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(randomNumber);

//adding score VAR
var addScore = parseInt("#imageStyleOne") + parseInt("#imageStyleTwo");
	console.log("Adding scores");

//JQUERY
$( document ).ready(function() {
    console.log( "ready!" );

//jquery function to produce the random number on click
$("#startGame").click(function(){
$("#startGame").replaceWith( beginGame );
	console.log("StartGame?");

//Onclick place random number in div
$("#imageStyleOne, #imageStyleTwo, #imageStyleThree, #imageStyleFour").click(function(){
$( "#randomNumberResult" ).replaceWith( randomNumber );
	console.log("This is working?");

//Create a loop to allow for multiple diamonds to generate a score + add them together 



//If Score is === to Random number win


//else lose game

//if win add to win tally column


//if lose add to lose tally column 




//play theme song
audio.play();
	console.log("Music added!!!!!")

})


})

});

}

// call this code
$(initialize);

