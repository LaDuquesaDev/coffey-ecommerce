import { SelectChangeEvent } from "@mui/material";
import { useProductContext } from "../context/useProductContext";
import { sortBy } from "../models";

export const useFilters = () => {
    const { filters, setFilters, products } = useProductContext();

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
      setFilters({ ...filters, priceRange: newValue as [number, number] });
    };
  
    const handleCategoryChange = (event: SelectChangeEvent) => {
      setFilters({ ...filters, category: event.target.value });
    };
  
    const handleInStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({ ...filters, inStock: event.target.checked });
    };
  
    const handleSortChange = (event: SelectChangeEvent) => {
      setFilters({ ...filters, sortBy: event.target.value as sortBy });
    };
  
    const categories = Array.from(new Set(products.map((p) => p.category)));

    return {
      filters,
      setFilters,
      handlePriceChange,
      handleCategoryChange,
      handleInStockChange,
      handleSortChange,
      categories
    };
  }