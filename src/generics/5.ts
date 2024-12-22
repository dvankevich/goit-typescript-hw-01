export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type TRoleDescription = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: TRoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

console.group("generics task 5");
console.log("RoleDescription:", RoleDescription);

console.groupEnd();
