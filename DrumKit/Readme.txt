
var powMach1 = {
    name : "Lola";
    age   : 19;
    time : "today at 8:30";
    sayHello : function() {
        alert("Hello");
    }
}
console.log(powMach1.age);
powMach1.sayHello();

Constructor Function :- 

Function starts with capital letter, 

function PowerMach (name,age,time){
    this.name = name;
    this.age = age;
    this.time = time;
}

var powMach1 = new PowerMach("Lola",16,"today at 8:30");