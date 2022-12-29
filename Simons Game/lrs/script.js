var colArr = ["red","green","yellow","blue"];
var gameArr = [];
var inGame = false;
var level = 0;

function makeSound(color){
    var audio = new Audio("sounds/"+color+".mp3");
    $("#"+color).fadeOut(100).fadeIn(100);
    audio.play();
}

function addColors(){

    $("#level-title").html("Level "+ (++level));

    for(var i = 0; i < level; i++)
    {
        var ind = Math.floor(Math.random()*4);
        //need to add delay
        makeSound(colArr[ind]);
        gameArr.push(colArr[ind]);
    }
}

$(".btn").click((evt) =>{
    if(!inGame)return;

    makeSound(evt.currentTarget.id);
    var col = gameArr.shift();

    console.log(evt.currentTarget.id);
    console.log(gameArr);
    if(col != evt.currentTarget.id){
        makeSound("wrong");
        $("#level-title").html("Press any key to start");
        inGame = false; 
        gameArr = [];
        level = 0; 
        return;
    }
    if(gameArr.length == 0)addColors();
})

$(document).keydown(()=>{
    if(inGame)return;
    inGame = true;
    addColors();
})
