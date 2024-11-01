import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Box, Link } from "@mui/material";
import { useRouter } from "next/router";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query.redirected) {
      setWarning(true);
    }
  }, [router.query]);

  const handleLogin = () => {
    const users = getFromLocalStorage("users") || [];
    const user = users.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (user) {
      saveToLocalStorage("currentUser", user);
      router.push("/products");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      {warning && (
        <Typography variant="body2" color="error" gutterBottom>
          You need to log in first to view the products page.
        </Typography>
      )}

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
        onClick={handleLogin}
        sx={{ mt: 2 }}
      >
        Login
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <Link href="/register" color="primary" underline="hover">
          Register here
        </Link>
      </Typography>
    </Box>
  );
}
