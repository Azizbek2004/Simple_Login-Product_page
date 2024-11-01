export interface User {
  email: string;
  password: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type LocalStorageKeys = "users" | "currentUser" | "products";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
