import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h4">Welcome to MyApp</Typography>
      <Typography variant="body1">
        Explore our products and register to enjoy a personalized experience!
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link href="/products" passHref>
          <Button variant="contained" color="primary">
            View Products
          </Button>
        </Link>
        <Link href="/register" passHref>
          <Button variant="outlined" color="primary">
            Register
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
