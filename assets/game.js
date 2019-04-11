// variables
var wins = 0;
var losses = 0;
var computerChoice = Math.floor(Math.random() * 100);
var crystal = Math.floor(Math.random() * 20);
var crystal2 = Math.floor(Math.random() * 20);
var crystal3 = Math.floor(Math.random() * 20);
var crystal4 = Math.floor(Math.random() * 20);
var yourPoints1 = 0;


$(".crystal1").attr("data-crystalvalue", crystal);
$(".crystal2").attr("data-crystalvalue", crystal2);
$(".crystal3").attr("data-crystalvalue", crystal3);
$(".crystal4").attr("data-crystalvalue", crystal4);

$("#computer-choice-text").html(computerChoice);
$("#your-points-text").html(yourPoints1);

$(".crystals").on("click", function () {
    console.log("yourpoints", yourPoints1)
    var num = parseInt($(this).attr("data-crystalvalue"))
    yourPoints1 = yourPoints1 + num
    $("#your-points-text").html(yourPoints1);

    if ((yourPoints1 === computerChoice)) {
        wins++;
        console.log(wins)
        console.log("computer chose", computerChoice)
        reset()
    }
    else if ((yourPoints1 > computerChoice)) {
        losses++;
        console.log(losses)
        console.log("computer chose", computerChoice)
        reset()
    }

    //   on click, grab num
    // attr. num to your points
    //  with each click, add pre num to additional num
    console.log(num)
});

function reset() {
    computerChoice = Math.floor(Math.random() * 100);
    var crystal = Math.floor(Math.random() * 20);
    var crystal2 = Math.floor(Math.random() * 20);
    var crystal3 = Math.floor(Math.random() * 20);
    var crystal4 = Math.floor(Math.random() * 20);
    yourPoints1 = 0;


    $(".crystal1").attr("data-crystalvalue", crystal);
    $(".crystal2").attr("data-crystalvalue", crystal2);
    $(".crystal3").attr("data-crystalvalue", crystal3);
    $(".crystal4").attr("data-crystalvalue", crystal4);
    $("#computer-choice-text").html(computerChoice);
    $("#your-points-text").html(yourPoints1);
    $("#wins-text").html(wins);
    $("#losses-text").html(losses);
}









// var computerText = document.getElementById("computer-choice-text")

// var lossesText = document.getElementById("losses-text")
// var yourPointsText = document.getElementById("your-points-text")


//// functions 
// .attr("data-crystalvalue", numberOptions[i]);

// if wins round:: computer num === user guess
//  wins goes up
// computer selects a new random num value
// crystals each get a new random num value

// if looses round:: computer num !== user guess (user guess has to go over computer guess to reset round)
// losses goes up
// computer selects new random num value
// crystals each get a new random num value 


// $("#computer-choice").html("Computer Choice: ");



//     var crystal = $("<div>");
//     crystal.attr({
//         "class": "#crystals",
//         "data-ran": randomNum

//     $("#crystals").append(crystal);
// }
//

// console.log ("computer chose" , computerGuess)

