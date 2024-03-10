
let count = 0;

function increment() {
    count = count + 1;
    document.getElementById("count-el").innerText = count;
    console.log(count);
}

function save() {
    console.log(count);
}

let name = "John"
let greeting = "Hi, my name is ";
console.log(greeting + name);