import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Pets } from "@mui/icons-material";
import { styles } from "../styles/header";

export const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Pets component="svg" fontSize="large" />
          <Typography variant="h5" component="h1" sx={styles.title}>
            Coffey Pets
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
