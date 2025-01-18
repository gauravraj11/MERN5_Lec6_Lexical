function createCounter() {
    let count = 10; 

    return function () { 
        count++; 
        console.log(count);
    };
}

const counter = createCounter(); 

counter(); // 1
counter(); // 2
counter(); // 3
