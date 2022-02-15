import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#7CBCFD",
    },
  },
});

// theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
