type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Top = Pick<AllType, "name" | "color">;
type Bottom = Pick<AllType, "position" | "weight">;

function compare(top: Top, bottom: Bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.group("generics task 2");
console.log(
  compare({ name: "button", color: "red" }, { position: 200, weight: 500 })
);

console.groupEnd();
