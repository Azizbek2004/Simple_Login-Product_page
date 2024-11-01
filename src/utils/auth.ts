import { User } from "./types";

export function registerUser(newUser: User): boolean {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some((user: User) => user.email === newUser.email)) {
    return false;
  }
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

export function loginUser(email: string, password: string): boolean {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(
    (user: User) => user.email === email && user.password === password
  );
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    return true;
  }
  return false;
}

export function isAuthenticated(): boolean {
  return localStorage.getItem("currentUser") !== null;
}

export function logoutUser(): void {
  localStorage.removeItem("currentUser");
}
