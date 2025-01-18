 var roll = 7 ;

 callnotchild=()=>{
    console.log(this.roll);
}

const A = {
     roll : 1,
     parent : function(notchild){
        console.log(this.roll);
        
        notchild();
     } 
    }

A.parent(callnotchild);
