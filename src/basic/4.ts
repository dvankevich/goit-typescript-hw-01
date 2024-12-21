function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

console.group("basic task 4");
showMessage("function with void type");
console.log("calc function:", calc(10, -5));
try {
  customError();
} catch (err) {
  console.error(err);
}

console.groupEnd();
