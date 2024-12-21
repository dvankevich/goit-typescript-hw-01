let mixedType: string | number;
type Tswitch = "enable" | "disable";
let flag: Tswitch;

console.group("basic task 3");

mixedType = "string";
console.log("mixedType string:", mixedType);
mixedType = 10;
console.log("mixedType number:", mixedType);

flag = "enable";
console.log(flag);
flag = "disable";
console.log(flag);

console.groupEnd();
