import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { selectSimulations, selectWinCount } from "reducers/game";

export const End = () => {
  const winCount = useSelector(selectWinCount);
  const simulations = useSelector(selectSimulations);
  return (
    <div className="grid">
      <Box className="card" sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="label-wrapper" data-testid="test-id">
              You won a car
              <span arial-label="win count" data-testid="win-count">
                {winCount}
              </span>
              times out of
              <span arial-label="number of simulations" data-testid="simulations-count">
                {simulations}
              </span>
              games.
            </div>
          </CardContent>
        </Card>
      </Box>
      <div className="link-container">
        <Link className="back-link" to="/">
          Run new simulation!
        </Link>
      </div>
    </div>
  );
};
