interface User {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
}

type UserRole = "admin" | "member";

const MINIMUM_AGE = 18;

function createUser(
  name: string,
  age: number,
  role: UserRole = "member",
): User {
  if (!name.trim()) {
    throw new Error("Name is required");
  }

  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: age >= MINIMUM_AGE,
  };
}

// Create a new user
const alice = createUser("Alice", 25);

console.log(alice);
