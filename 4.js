this.name = "Sagar";

const A = {

    "name" : "pushan",
    "roll" :"007",
    "callback" : function(){

        function abc(){
            console.log(this.name); 
        }
        
        abc();
    } 
}

A.callback();