import React, { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { getFromLocalStorage } from "../utils/localStorage";
import { Product } from "../utils/types";

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cartData = getFromLocalStorage("cart") || [];
    setCartItems(cartData);
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length > 0 ? (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={`Price: $${item.price}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}
    </>
  );
}
