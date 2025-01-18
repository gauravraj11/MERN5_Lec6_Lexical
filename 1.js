 this.name = "Gaurav Raj"

const A = {

    "name" : "pushan",
    "roll" :"007",
    "callback" : function(){
        console.log(this); 
    }
}

A.callback();

console.log(this);
