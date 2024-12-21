interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city?: string;
    country?: string;
  };
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.group("basic task 6");
console.log("mango:", mango);
console.log("poly:", poly);
console.groupEnd();
