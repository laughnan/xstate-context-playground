import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import pink from "@material-ui/core/colors/pink";
import { createMuiTheme } from "@material-ui/core/styles";

import ExperienceContextProvider from "./ExperienceContextProvider";
import Dashboard from "./components/Dashboard";
import TargetingContextProvider from "./TargetingContextProvider";

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: pink
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TargetingContextProvider>
        <ExperienceContextProvider>
          <Dashboard />
        </ExperienceContextProvider>
      </TargetingContextProvider>
    </ThemeProvider>
  );
}
