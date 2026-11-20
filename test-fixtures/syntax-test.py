
from dataclasses import dataclass


@dataclass
class User:
    name: str
    age: int
    active: bool = True


def create_user(name: str, age: int) -> User:
    if age < 0:
        raise ValueError("Age cannot be negative")

    return User(name=name, age=age)


# Create a user
alice = create_user("Alice", 25)
print(alice)
