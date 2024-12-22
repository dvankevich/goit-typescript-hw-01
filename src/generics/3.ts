function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const objectA = { name: "Alice", age: 30 };
const objectB = { job: "FullStack developer", country: "USA" };

const merged = merge(objectA, objectB);

console.group("generics task 3");
console.log("merged:", merged);

console.groupEnd();
