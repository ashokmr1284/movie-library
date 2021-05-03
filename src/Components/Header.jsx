import React, { useState } from "react";

import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TheatersIcon from "@material-ui/icons/Theaters";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

// Styles
const useStyles = makeStyles((theme) => ({
  titleHolder: {
    backgroundColor: "#383838",
    color: "#fff",
  },
  toolbarHolder: {
    padding: "30px",
    display: "block",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    flexGrow: 1,
    "& span": {},
  },
  subTitle: {
    fontSize: "14px",
    fontWeight: "normal",
    margin: "5px 0 10px 0",
    color: "#c9c9c9",
  },
  navBar: {
    "& li": {
      width: "250px",
    },
  },
  padding10: {
    "& label": {
      padding: "10px",
    },
    padding: "10px",
  },
  searchIcon: {
    backgroundColor: "#ffffff",
    width: "250px",
    margin: "0 auto",
    borderRadius: "3px",
  },
  addIcon: {
    position: "relative",
    top: "5px",
    left: "-8px",
  },
  clearIcon: {
    position: "relative",
    top: "5px",
    right: "-8px",
    visibility: "hidden",
    cursor: "pointer",
  },
  displayBlock: {
    visibility: "visible",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermError, setSearchTermError] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    var sln = value.length;
    if (sln < 3) {
      setSearchTermError("Minimum 3 characters required");
    } else {
      setSearchTermError("");
    }
    props.handleSearchProp(e.target.value);
  };

  const handleclear = () => {
    setSearchTerm("");
    setSearchTermError("");
    props.handleclear([]);
  };

  return (
    <div>
      <AppBar className={classes.titleHolder} position="relative">
        <Toolbar variant="regular" className={classes.toolbarHolder}>
          <Typography variant="h6" className={classes.title}>
            <TheatersIcon />
            <span>My WatchList</span>
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            Search to add Movies or TV Shows to your WatchList
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <AddIcon color="disabled" className={classes.addIcon} />
              <TextField
                placeholder="Search for a movie or TV show.."
                className={classes.searchInput}
                inputProps={{ "aria-label": "Search for a movie or TV show.." }}
                onChange={(e) => handleSearch(e)}
                value={searchTerm}
                required
                error={searchTermError ? true : false}
                helperText={searchTermError}
              />

              <HighlightOffIcon
                color="disabled"
                onClick={handleclear}
                className={`${classes.clearIcon} ${
                  !searchTermError && searchTerm ? classes.displayBlock : ""
                }`}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
