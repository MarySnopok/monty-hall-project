import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const End = () => {
  const winCount = useSelector((store) => store.game.winCount);
  const simulations = useSelector((store) => store.game.simulations);
  return (
    <div className="grid">
      <Box className="card" sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="label-wrapper">
              You won a car {winCount} times out of {simulations} games.
            </div>
          </CardContent>
        </Card>
      </Box>
      <div className="link-container">
        <Link className="back-link" to="/">
          Play again!
        </Link>
      </div>
    </div>
  );
};
