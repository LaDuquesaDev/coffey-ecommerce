import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  Box,
} from "@mui/material";
import { ProductList } from "./ProductList";
import Filters from "./Filters";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Header } from "./Header";
import { styles } from "../styles/product-catalog";

export const ProductCatalog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={styles.drawer}>
      <Filters />
    </Box>
  );

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={styles.container}>
        <Typography variant="h4" component="h1" gutterBottom sx={styles.title}>
          Catálogo de Productos
        </Typography>
        <Grid container spacing={3}>
          {isMobile && (
            <Grid item xs={12}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={styles.menu}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={12} md={3}>
              <Filters />
            </Grid>
          )}
          <Grid item xs={12} md={9}>
            <ProductList />
          </Grid>
        </Grid>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Container>
    </>
  );
};
