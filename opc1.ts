function greet(name?: string) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return `Hello!`;
  }
}

console.log(greet("Alice")); // Виводить: Hello, Alice!
console.log(greet()); // Виводить: Hello!
