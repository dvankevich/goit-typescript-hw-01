enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean =>
  day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;

console.group("basic task 5");
console.log("Monday isWeekend", isWeekend(0));
console.log("Saturday isWeekend", isWeekend(5));

console.groupEnd();
