var n1 = Math.floor(Math.random()*6)+1;
var n2 = Math.floor(Math.random()*6)+1;

var ele = document.querySelector('.container h1');
if(n1 > n2)
{
    ele.innerText = "Player 1 Wins";
}
else if(n1 < n2)
{
    ele.innerText = "Player 2 Wins";
}
else 
{
    ele.innerText = "Its a draw, Try Again";
}

var v1 = "images/dice"+n1+".png",v2 = "images/dice"+n2+".png";
document.querySelector('.img1').setAttribute('src',v1);
document.querySelector('.img2').setAttribute('src',v2);
