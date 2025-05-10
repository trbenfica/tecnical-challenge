function fibonacci(n) {
  let iterator = 1;
  const memory = new Map();
  let index = 2;

  memory.set(1, 0);
  memory.set(2, 1);

  while (iterator < n) {
    index++;
    iterator = memory.get(index - 1) + memory.get(index - 2);
    memory.set(index, iterator);
  }

  return Array.from(memory.values()).includes(n);
}

// Testes
console.log("Exemplo para o número 2: " + fibonacci(2)); // true
console.log("Exemplo para o número 3: " + fibonacci(3)); // true
console.log("Exemplo para o número 5: " + fibonacci(5)); // true
console.log("Exemplo para o número 8: " + fibonacci(8)); // true
console.log("Exemplo para o número 13: " + fibonacci(13)); // true
console.log("Exemplo para o número 21: " + fibonacci(21)); // true
console.log("Exemplo para o número 34: " + fibonacci(34)); // true

console.log("Números que devem dar false:");
console.log("Exemplo para o número 200: " + fibonacci(200)); // false
console.log("Exemplo para o número 1000: " + fibonacci(1000)); // false
console.log("Exemplo para o número 30654: " + fibonacci(30654)); // false
