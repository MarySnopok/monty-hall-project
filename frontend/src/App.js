import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Game } from "./components/Game";
import { End } from "./components/End";
import { NotFound } from "./components/NotFound";

import game from "./reducers/game";

const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#248e6b",
    },
    secondary: {
      main: "#cb3365",
    },
  },
  typography: {
    fontFamily: "Fira Code",
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/end" element={<End />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};
