import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// pick a date util library
import MomentUtils from "@date-io/moment";
import MovieDetailsView from "./MovieDetailsView";

//Route Components
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00e5ff",
    },
  },
});

export default function AppContainer() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/movieDetail" component={MovieDetailsView} />
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}
