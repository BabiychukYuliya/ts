function greet(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    else {
        return "Hello!";
    }
}
console.log(greet("Alice")); // Виводить: Hello, Alice!
console.log(greet()); // Виводить: Hello!
