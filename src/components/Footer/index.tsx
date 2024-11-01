import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 3, textAlign: "center", backgroundColor: "#f4f6f8" }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
