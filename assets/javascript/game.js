function initialize()
{

//Generating a random number between 19 and 120. "Var randomNumber" is creating 
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(randomNumber);
var audio = new Audio("Diamonds.mp3");


$( document ).ready(function() {
    console.log( "ready!" );


//Onclick place random number in div
$("#imageStyleOne, #imageStyleTwo, #imageStyleThree, #imageStyleFour").click(function(){
$( "#randomNumberResult" ).replaceWith( randomNumber );
	console.log("This is working?");

//play theme song
audio.play();

})


});

}

// call this code
$(initialize);

