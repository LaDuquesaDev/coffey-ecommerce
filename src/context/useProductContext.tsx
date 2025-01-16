import { useContext } from "react";
import { ProductContext } from "./ProductProvider";

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("ProductContext must be used within a ProductProvider");
  }
  return context;
};
