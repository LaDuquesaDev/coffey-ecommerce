import React from "react";
import {
  Box,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useFilters } from "../hooks/useFilters";
import { styles } from "../styles/filters";

const Filters = () => {
  const {
    filters,
    handlePriceChange,
    handleCategoryChange,
    handleInStockChange,
    handleSortChange,
    categories,
  } = useFilters();

  return (
    <Box sx={styles.container}>
      <FormControl fullWidth sx={styles.section}>
        <InputLabel>Categoría</InputLabel>
        <Select value={filters.category} onChange={handleCategoryChange}>
          <MenuItem value="">Todas</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={styles.section}>
        <InputLabel>Rango de Precio</InputLabel>
        <Slider
          value={filters.priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={400000}
          step={1000}
        />
      </Box>
      <FormControlLabel
        control={
          <Checkbox checked={filters.inStock} onChange={handleInStockChange} />
        }
        label="Solo en Stock"
        sx={styles.section}
      />
      <FormControl fullWidth sx={styles.section}>
        <InputLabel>Ordenar por</InputLabel>
        <Select value={filters.sortBy} onChange={handleSortChange}>
          <MenuItem value="">Sin ordenar</MenuItem>
          <MenuItem value="price_asc">Precio: Menor a Mayor</MenuItem>
          <MenuItem value="price_desc">Precio: Mayor a Menor</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
