import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { ProductProvider } from "./context/ProductProvider";
import { ProductCatalog } from "./components/ProductCatalog";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductProvider>
        <ProductCatalog />
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
