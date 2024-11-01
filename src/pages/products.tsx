import React, { useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import ProductCard from "../components/ProductCard";
import ProtectedRoute from "../components/ProtectedRoutes";
import { SAMPLE_PRODUCTS } from "../utils/constants";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute>
      {" "}
      <div style={{ padding: "20px" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          style={{ marginBottom: "20px" }}
        >
          Our Products
        </Typography>

        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: "30px" }}
        />

        <Grid container spacing={4}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))
          ) : (
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ marginTop: "20px" }}
            >
              No products found matching "{searchTerm}"
            </Typography>
          )}
        </Grid>
      </div>
    </ProtectedRoute>
  );
}
