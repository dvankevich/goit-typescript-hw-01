type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

const params: Params = {
  email: "data@starfleet.mil",
  firstName: "Data",
  lastName: "Android",
  phone: "555-17-01",
};

console.group("generics task 6");
console.log("params:", params);

console.groupEnd();
