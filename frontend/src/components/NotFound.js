import React from "react";
import { Link } from "react-router-dom";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const NotFound = () => {
  return (
    <div className="grid">
      <Box className="card" sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="label-wrapper">Page not found.</div>
          </CardContent>
        </Card>
      </Box>
      <div className="link-container">
        <Link className="back-link" to="/">
          Go back
        </Link>
      </div>
    </div>
  );
};
