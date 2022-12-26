EventListeners :- 

.(event, funcNam()) --> wrong as function is called irrespective of event.
.(event,funcNam) --> right way.

Alternatively, 
.(event,function (){
    alert("Easy and most errorless way");
});