// variables
var wins = 0;
var losses = 0;
var computerChoice = Math.floor(Math.random() * 100);
var crystal = Math.floor(Math.random() * 20);
var crystal2 = Math.floor(Math.random() * 20);
var crystal3 = Math.floor(Math.random() * 20);
var crystal4 = Math.floor(Math.random() * 20);
var yourPoints = 0;

// .attr("data-crystalvalue", numberOptions[i]);

// if wins round:: computer num === user guess
//  wins goes up
// computer selects a new random num value
// crystals each get a new random num value

// if looses round:: computer num !== user guess (user guess has to go over computer guess to reset round)
// losses goes up
// computer selects new random num value
// crystals each get a new random num value
$(".crystal1").attr("data-crystalvalue", crystal);
$(".crystal2").attr("data-crystalvalue", crystal2);
$(".crystal3").attr("data-crystalvalue", crystal3);
$(".crystal4").attr("data-crystalvalue", crystal4);


 $(".crystals").on("click", function(){
    var youPoints;
    var num = parseInt($(this).attr("data-ran")
})

// functions 

if ((yourPoints === computerChoice)) {
    wins++;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log ("computer chose" , computerGuess)
    crystal = Math.floor(math.random() * 20);
}
if ((yourPoints > computerChoice)) {
    losses++;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log ("computer chose" , computerGuess)
    crystal = Math.floor(math.random() * 20);
}



var computerText = document.getElementById("computer-text")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")


// $("#computer-choice").html("Computer Choice: ");

// for (var i = 0; i < 4 i++){
//     var randomNum  = Math.floor(math.random() * 20);

//     var crystal = $("<div>");
//     crystal.attr({
//         "class": "#crystals",
//         "data-ran": randomNum

//     $("#crystals").append(crystal);
// }
//

// console.log ("computer chose" , computerGuess)

