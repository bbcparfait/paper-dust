interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const MINIMUM_AGE = 18;

function createUser(name: string, age: number): User {
  return {
    name,
    age,
    isActive: age >= MINIMUM_AGE,
  };
}

// Welcome our first user
const alice = createUser("Alice", 25);
console.log(`Hello, ${alice.name}!`);
