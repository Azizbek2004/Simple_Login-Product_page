import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    const users = getFromLocalStorage("users") || [];
    const userExists = users.some((u: { email: string }) => u.email === email);

    if (!userExists) {
      const newUser = { email, password };
      users.push(newUser);
      saveToLocalStorage("users", users);
      router.push("/login");
    } else {
      alert("User with this email already exists.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleRegister}
      >
        Go to Login
      </Button>
    </Box>
  );
}
