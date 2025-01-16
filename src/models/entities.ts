import { sortBy } from "./enums";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
    imageURL: string;
  }
  
  export interface Filters {
    priceRange: [number, number];
    category: string;
    inStock: boolean;
    sortBy: sortBy | "";
  }
  
  export interface ProductContextType {
    products: Product[];
    filteredProducts: Product[];
    filters: Filters;
    setFilters: (filters: Filters) => void;
  }
  
  