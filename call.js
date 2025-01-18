var person1 = {
    name: "MERN",

    greet: function () {
      console.log("Hello, my name is " + this.name);
    },
  };


  var person2 = {
    name: "Raj",
  };


  person1.greet.call(person2); 
  
  person1.greet();
