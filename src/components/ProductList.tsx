import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useProductContext } from "../context/useProductContext";

export const ProductList = () => {
  const { filteredProducts } = useProductContext();

  return (
    <Grid container spacing={2}>
      {filteredProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
