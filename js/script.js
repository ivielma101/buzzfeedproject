/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var totalScore;
var question1=q1Result(q1Input);
var question2=q2Result(q2Input);
var question3=q3Result(q3Input);

totalScore= question1+question2+question3;
var pokemon= finalresult(totalScore,name);
$(".result").text(pokemon)
function finalresult(totalScore,name){
    var character = '';
    if(totalScore>=15){
        character = 'Charmander'
    }else if (totalScore>10){
        character = 'Squirtle'
    }else{
        character = 'Turtwig'
    }
    return 'Hello ' +name+', your starter Pokemon is '+character;
}


function q1Result (answer){
if (answer=== "water"){
    return 4;
} else if (answer ==="grass"){
    return 1;
}else if (answer ==="flying"){
    return 0;
}else if(answer === "fighting"){
    return 2;
}else {
    return 1;
}
}
function q2Result (answer){
    if (answer==="light"){
        return 2;
    }else if( answer==="heavy"){
        return 1;
    }else {
        return 3;
    }
}
function q3Result(answer){
    if (answer=== "flying"){
        return 4;
    }else if (answer==="ground"){
        return 2;
    }else{
        return 1
    }
}










});

});
