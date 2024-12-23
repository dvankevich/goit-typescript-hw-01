type Tpage = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: { createAt: Date; updateAt: Date };
};

const page1: Tpage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Tpage = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.group("basic task 7");
console.log("page1:", page1);
console.log("page2:", page2);
console.groupEnd();
