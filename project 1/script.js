'use strict';

function createAdder() {
    let counter = 0;

    function adder() {
        counter++;
        return counter;
    }

    return adder;
}

let inc = createAdder();

for(let i = 0; i < 10; i++) {
    console.log(inc());
}