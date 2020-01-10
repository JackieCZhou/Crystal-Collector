Crystal Collector:
A functional matching game, Crystal Collector uses a Math.floor(Math.random() random interger generator with an onClick() event to update each rounds score, as well as the overall wins and losses.  A "win" or "loss" will also trigger an event that generates new values for the computer & the mystery values of the crystals each round. 

Game Layout:

-Upon loading the page a randomly generated interger for the computer is applied to the "Computer Score" field.
-Additionaly each of the crystals are assigned randomly generated intergers as well that are hidden from the player using a similar function.
-As the user clicks a crystal the "Your Score" value goes up based on that crystals currently assigned point value.

The goal being to match the computer score to the users score based on the addition of each crystals points via the onClick event.

Going over the computers score will result in the "Loss" field going up by one.  An exact match to the "Your Score" and "Computer Score" fields will result in the "Win" field going up by one.

Upon a win or loss being triggered the game automatically restarts. New intergers are generated and assigned to the computer player as well as the crystals.  The "Wins" and "Losses" fields keep track of their points until the page is refreshed.

The visuals for this game were designed using bootstrap

Coded in:
HTML, CSS, Javascript

Design:
Bootstrap

