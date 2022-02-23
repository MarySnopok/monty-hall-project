import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import game from "../reducers/game";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Alert from "@mui/material/Alert";
import Input from "@mui/material/Input";
import { Radio } from "@mui/material";

import { API_URL } from "../utils/constants";

export const Game = () => {
  const [simulations, setSimulations] = useState("");
  const [doorChange, setDoorChange] = useState(false);
  const [alertShown, setAlertShown] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setSimulationsCount(simulations));
    setSimulations("");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ simulations, doorChange }),
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("what a hell");
          dispatch(game.actions.setGameResult(data.winCount));
          dispatch(game.actions.setError(null));

          navigate("/end");
        } else {
          dispatch(game.actions.setGameResult(null));
          dispatch(game.actions.setError(data.response));
        }
      });
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    if (simulations === "") {
      setAlertShown("Oops, please add valid parameters.");
    } else if (parseInt(simulations, 10) <= 0 || parseInt(simulations, 10) > 100_000) {
      setAlertShown("Number of simulations should be > 0 and less than 100 000");
    } else {
      onFormSubmit(e);
    }
  };

  return (
    <div className="grid" style={{ minWidth: 275 }}>
      <Box className="card" sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <div className="heading-container">
            <h1>Monty Hall Simulator</h1>
            <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noopener noreferrer" className="back-link">
              Learn more
            </a>
          </div>
          <CardContent>
            <form className="container">
              <label className="new-label" htmlFor="simulation" aria-labelledby="simulations">
                Add number of simulations:
              </label>
              <Input
                inputProps={{ min: 1, max: 100, "data-testid": "simulations" }}
                id="simulations"
                type="number"
                value={simulations}
                onChange={(e) => setSimulations(e.target.value)}
                style={{ fontSize: 16 }}
              />
              <p style={{ marginTop: 30 }}>Do you want to change the door in process?</p>
              <div className="label-wrapper">
                <label className="new-label" htmlFor="doorChangeYes">
                  yes
                </label>
                <Radio
                  inputProps={{ "aria-label": "selection" }}
                  checked={doorChange === true}
                  className="credentials"
                  id="doorChangeYes"
                  type="radio"
                  onChange={() => setDoorChange(true)}
                />
                <label className="new-label" htmlFor="doorChangeNo">
                  no
                </label>
                <Radio
                  inputProps={{ "aria-label": "selection" }}
                  className="credentials"
                  id="doorChangeNo"
                  type="radio"
                  checked={doorChange === false}
                  onChange={() => setDoorChange(false)}
                />
              </div>
              <CardActions>
                <Button
                  onClick={onButtonClick}
                  className="move-btn"
                  type="submit"
                  name="submit"
                  role="button"
                  variant="contained"
                  data-testid="submit-button"
                  style={{ letterSpacing: 2, fontWeight: "normal", marginLeft: -8, marginTop: 40, fontSize: 14 }}
                >
                  Submit
                </Button>
              </CardActions>
              {alertShown !== "" && (
                <div>
                  <Alert data-testid="error-alert" severity="error">
                    {alertShown}
                  </Alert>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
