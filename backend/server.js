import express from "express";

import { montyHallSimulator } from "./src/montyHallSimulator";
import { MAXIMUM_SIMULATIONS } from "./constants";
import cors from "cors";

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  const numSimulations = parseInt(req.body.simulations);
  const doorChange = req.body.doorChange;

  if (!doorChange) {
    res.status(400).json({
      response: "wrong request: missing data",
      status: "error",
    });
  }

  if (Number.isNaN(numSimulations) || numSimulations < 1 || numSimulations > MAXIMUM_SIMULATIONS || Math.round(numSimulations) !== numSimulations) {
    res.status(400).json({
      response: `wrong request: inappropriate amount of simulations, must be positive integer less than ${MAXIMUM_SIMULATIONS}`,
      status: "error",
    });
  }

  const winCount = montyHallSimulator(numSimulations, doorChange);

  res.status(201).json({ winCount, status: "success" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
