 this.name = "Sagar";

const A = {

    "name" : "pushan",
    "roll" :"007",
    "callback" : ()=>{
        abc = ()=>{
            console.log(this.name); 
        }
        abc();
    } 
}

A.callback();