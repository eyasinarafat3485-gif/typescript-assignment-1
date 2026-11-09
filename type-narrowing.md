Type Narrowing in TypeScript

Introduction

When I started learning TypeScript, I sometimes got confused when working with multiple data types. For example, a variable can hold either a string or a number. But both types do not support the same operations. This is where Type Narrowing becomes useful. It helps TypeScript understand the exact type of a value before using it.

What is Type Narrowing?

Type Narrowing means checking a variable's type and making its possible types more specific. TypeScript provides different ways to do this. Some common methods are typeof, instanceof, and the in operator.

1. Using typeof

We can use typeof to check primitive types like string, number, and boolean.

function printValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toString();
}

Here, TypeScript understands whether the value is a string or number.

2. Using instanceof

The instanceof operator checks whether an object belongs to a particular class.

class Dog {
    bark(): string {
        return "Woof!";
    }
}

function makeSound(animal: Dog | Date): string {
    if (animal instanceof Dog) {
        return animal.bark();
    }
    return animal.toDateString();
}

Here, TypeScript checks whether the object is an instance of the Dog class.

3. Using the in Operator

The in operator checks whether a property exists inside an object.

type Admin = { name: string; role: string };
type User = { name: string; email: string };

function getInfo(person: Admin | User): string {
    if ("role" in person) {
        return person.role;
    }
    return person.email;
}

Here, TypeScript checks whether the object has a role property.

Conclusion

Type Narrowing is a useful feature for writing safer TypeScript code. It helps us work with different types without making unnecessary assumptions. I think understanding typeof, instanceof, and the in operator is important for every beginner learning TypeScript.