  // Case 1

function add(a, b, c) {
    return a + b +c;
  }
  
  const args = [2, 3, 6];
  const result = add.apply(null, args);
  console.log(result); 


  // Case 2

  var person = {

    name: "Alice"
}

function greet(age, profession) {
      console.log("Hello, my name is " + this.name + " age is " + age + ". I am a " + profession);
    };
  
  greet.apply(person, [32, "student"]);
