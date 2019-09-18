

$(document).ready(function() {

var total = 0;
var losses = 0;
var wins = 0;



for (var i = 19; i< 121; i++)

var randomNumber = Math.floor(Math.random() * 102 + 19);
    console.log(randomNumber);


var orangeCrystal = Math.floor(Math.random()*12+1);
var whiteCrystal = Math.floor(Math.random()*12+1);
var greenCrystal = Math.floor(Math.random()*12+1);
var purpleCrystal = Math.floor(Math.random()*12+1);
total = 0;



$("#green").on("click",function () {
    total = total + greenCrystal;
    console.log("New total" + total);
    $("#score").text(total);
})

$("#white").on("click",function () {
    total = total + whiteCrystal;
    console.log("New total" + total);
    $("#score").text(total);
})

$("#purple").on("click",function () {
    total = total + purpleCrystal;
    console.log("New total" + total);
    $("#score").text(total);
})

$("#orange").on("click",function () {
    total = total + orangeCrystal;
    console.log("New total" + total);
    $("#score").text(total);

})

});
