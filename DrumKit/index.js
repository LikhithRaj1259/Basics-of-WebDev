var numOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numOfDrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function (){
        //Here this means the HTML object.
        var addr = "sounds/" + this.innerText + ".mp3";
        var audio = new Audio(addr);
        audio.play();
        }
    );
}

var arr = ["w","a","s","d","j","k","l"]
document.addEventListener("keydown",function(e){

    var c = e.key;
    if(arr.includes(c))
    {
        var addr = "sounds/" + c + ".mp3";
        var audio = new Audio(addr);
        audio.play();
    }
})