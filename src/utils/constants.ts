import { Product } from "./types";

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "This is a description of Product 1.",
    price: 29.99,
  },
  {
    id: "2",
    name: "Product 2",
    description: "This is a description of Product 2.",
    price: 39.99,
  },
  {
    id: "3",
    name: "Product 3",
    description: "This is a description of Product 3.",
    price: 19.99,
  },
  {
    id: "4",
    name: "Product 4",
    description: "This is a description of Product 4.",
    price: 49.99,
  },
  {
    id: "5",
    name: "Product 5",
    description: "This is a description of Product 5.",
    price: 59.99,
  },
];

export const LOCAL_STORAGE_KEYS = {
  CART: "cart",
  USERS: "users",
  CURRENT_USER: "currentUser",
};
