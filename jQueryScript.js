// Learn How Script Tags and Document Ready Work
/*
$(document).ready(function() {

});
*/

// Target HTML Elements with Selectors Using jQuery

// All jQuery functions start with $ 
/*
$(document).ready(function() {
    $("button").addClass("animated bounce");
});
*/

// Target Elements by Class Using jQuery
/*
$(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shakeX");
});
*/

// Target Elements by id Using jQuery
/*
$(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shakeX");
    $("#target3").addClass("animated fadeOut");
});
*/

// Delete Your jQuery Functions
/*
$(document).ready(function() {
});
*/

// Target the Same Element with Multiple jQuery Selectors
/*
$(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shakeX");
    $("#target1").addClass("btn-primary");
});
*/

// Remove Classes from an Element with jQuery
/*
$(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shakeX");
    $("#target1").addClass("btn-primary");
    $("button").removeClass("btn-default");
});
*/

// Change the CSS of an Element Using jQuery
/*
$(document).ready(function() {
    $("#target1").css("color", "red");
});
*/

// Disable an Element Using jQuery
/*
$(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
});
*/

// Change Text Inside an Element Using jQuery
/*
$(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").html("<em>#target4</em>")
});
*/

// Remove an Element Using jQuery
/*
$(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
});
*/

// Use appendTo to Move Elements with jQuery
/*
$(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
});
*/

// Clone an Element Using jQuery

