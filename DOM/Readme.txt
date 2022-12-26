Document Object Model:-

HTML file is converted similar to tree, Document->html ...->body

Querys:-
var arr = document.getElementsByTagName("li"); arr[0].style.color = red;
        = document.getElementsByClassName("cp");
        = document.querySelectorAll("h1);    //Could be Heirarchial or combined selectors.

var ele = document.getElementById("title"); ele.innerHTML = "Hi";
        = document.querySelector("h1");      //returns the first element
Heirarchial Selector :- No Spaces, else space(parent child)

Seperation of Concern :- 
document.querySelector("btn").classList.add("classNam");
document.querySelector("btn").classList.remove("classNam");
document.querySelector("btn").classList.toggle("classNam");

Attributes:-
document.querySelector("a").attributes;    //gives the attributes
document.querySelector("a").getAttribute("href"); //value of href
document.querySelector("a").setAttribute("href","www.google.com");
