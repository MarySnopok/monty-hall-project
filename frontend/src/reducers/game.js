import { createSlice } from "@reduxjs/toolkit";

const game = createSlice({
  name: "game",
  initialState: {
    winCount: null,
    simulations: null,
    error: null,
  },
  reducers: {
    setGameResult: (store, action) => {
      store.winCount = action.payload;
    },
    setSimulationsCount: (store, action) => {
      store.simulations = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});

export default game;

export const selectWinCount = (store) => store.game.winCount;
export const selectSimulations = (store) => store.game.simulations;
