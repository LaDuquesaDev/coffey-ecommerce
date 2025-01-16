import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Product } from "../models";
import { useProductCard } from "../hooks/useProductCard";
import { styles } from "../styles/product-card";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { handleAddToCart } = useProductCard();

  return (
    <Card sx={styles.container}>
      <CardMedia
        component="img"
        height="140"
        image={product.imageURL}
        alt={product.name}
      />
      <CardContent sx={styles.cardContent}>
        <Typography gutterBottom variant="h6" component="h2">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.description}
        >
          {product.description}
        </Typography>
        <Box sx={{ mt: "auto" }}>
          <Typography variant="h6" color="text.primary" sx={styles.price}>
            {product.price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddToCart(product.name)}
            fullWidth
          >
            Agregar al Carrito
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
