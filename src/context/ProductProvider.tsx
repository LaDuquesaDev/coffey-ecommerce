import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Product, Filters, ProductContextType, sortBy } from "../models";
import productsData from "../data/products.json";

interface ProductProviderProps {
  children: ReactNode;
}

const defaultFilters: Filters = {
  priceRange: [0, 400000],
  category: "",
  inStock: false,
  sortBy: "",
};

const defaultContextValue: ProductContextType = {
  products: [],
  filteredProducts: [],
  filters: defaultFilters,
  setFilters: () => {},
};

export const ProductContext =
  createContext<ProductContextType>(defaultContextValue);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products] = useState<Product[]>(productsData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  useEffect(() => {
    let result = products.filter((product) => {
      return (
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1] &&
        (filters.category === "" || product.category === filters.category) &&
        (!filters.inStock || product.inStock)
      );
    });

    if (filters.sortBy === sortBy.price_asc) {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === sortBy.price_desc) {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [filters, products]);

  return (
    <ProductContext.Provider
      value={{ products, filteredProducts, filters, setFilters }}
    >
      {children}
    </ProductContext.Provider>
  );
};
