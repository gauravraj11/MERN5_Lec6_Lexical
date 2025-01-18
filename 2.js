var name = "Sagar";

const A = {

    "name" : "pushan",
    "roll" :"007",
    "callback" : ()=>{
        console.log(this.name); 
    }
}

A.callback();