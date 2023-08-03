var userclickedpattern=[];
var gamepattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var level=0;
var index=0;
var gamestart=false;
$(document).keypress(function(event){
    if(gamestart==false){
        gamestart=true;
        nextSequence();
    }
})
$(".btn").click(function(){
    if(gamestart){
        var audio=new Audio("sounds/"+this.id+".mp3");
        audio.play();
        var userchosencolor=this.id;
        userclickedpattern.push(userchosencolor);
        animatepress('#'+userchosencolor);
        checkans(level);
    }
})
function checkans(currentlvl){
    if(userclickedpattern[userclickedpattern.length-1]===gamepattern[userclickedpattern.length-1]){
        if(userclickedpattern.length===currentlvl){
            nextSequence();
        }
    }else{
        $("h1").text("Game Over, Press Any Key to Restart");
        var aud=new Audio("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
            aud.play();
        },200);
        // 
        level=0;
        gamepattern=[];
        gamestart=false;
        
    }
}
function nextSequence(){
    var randomnumber=Math.floor(Math.random()*4);
    var randomcolorchosen=buttonColors[randomnumber];
    gamepattern.push(randomcolorchosen);
    $("#"+randomcolorchosen).fadeOut().fadeIn();
    level++;
    $("h1").text("Level "+level);
    userclickedpattern=[];
    index=0;
}
function animatepress(current){
    $(current).addClass("pressed");
    setTimeout(function(){
        $(current).removeClass("pressed");
    },100);
}