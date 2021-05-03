import React, { useState, useEffect } from "react";

//Material UI Components
import { Container, makeStyles, Grid, Paper } from "@material-ui/core";
//import Pagination from "@material-ui/lab/Pagination";

//Sub Components
import Header from "./Header";
import MovieCard from "./MovieCard";
import MovieDetailsView from "./MovieDetailsView";
import CircularProgress from "@material-ui/core/CircularProgress";

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  paddingTop30: {
    paddingTop: "30px",
  },
  dateHolder: {
    marginTop: "85px",
    background: "#00e5ff",
    padding: "4px 15px",
    borderRadius: "10px 10px 0 0",
    fontSize: "13px",
    fontWeight: "500",
  },
  mainContainer: {
    marginTop: "10px",
    padding: "24px",
    //backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  title: {
    flexGrow: 1,
  },
  navBar: {
    "& li": {
      width: "250px",
    },
  },
  saveButtonHolder: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: "20px",
  },
  centerAlign: {
    textAlign: "center",
  },
  loadingHolder: {
    width: "40px",
    margin: "10px auto",
  },
}));

export default function App(props) {
  const [movieList, setMovieList] = useState([]);
  //const [page, handleChange] = useState(1);

  const [movieDetails, setMovieDetails] = useState({});
  const [modelOpen, setModelOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState("");

  useEffect(() => {
    //callSearchApi("indian");
  }, []);

  const classes = useStyles();

  const showDetials = (id) => {
    setModelOpen(true);

    let apiUrl = `https://www.omdbapi.com/?i=${id}&apikey=1c55c7b0`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      });
  };

  const callSearchApi = (searchTerm) => {
    if (searchTerm.length > 0) {
      setLoading(true);
      let apiUrl = `https://www.omdbapi.com/?s=${searchTerm}&apikey=1c55c7b0`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.Search) {
            setPageError("");
            setMovieList(data.Search);
          } else {
            setMovieList([]);
            setPageError(data.Error);
          }
        })
        .catch((error) => {});
    } else {
      setMovieList([]);
    }
    setLoading(false);
  };
  return (
    <div className={classes.root}>
      <Header handleSearchProp={callSearchApi} handleclear={setMovieList} />
      {movieList && movieList.length > 0 ? (
        <Container maxWidth="lg" className={classes.mainContainer}>
          <Grid container spacing={3}>
            {movieList.map((item) => (
              <Grid key={item.imdbID} item xs={2}>
                <MovieCard details={item} passIdtoParent={showDetials} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : loading ? (
        <Container maxWidth="lg" className={classes.mainContainer}>
          <Grid container spacing={3}>
            <Grid item alignContent="center" alignItems="center" xs={12}>
              <Paper className={classes.loadingHolder} elevation={0}>
                <CircularProgress className={classes.centerAlign} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : pageError ? (
        <Container maxWidth="lg" className={classes.mainContainer}>
          <Grid container spacing={3}>
            <p>{pageError}</p>
          </Grid>
        </Container>
      ) : (
        <></>
      )}
      {/* <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} /> */}
      <MovieDetailsView
        details={movieDetails}
        show={modelOpen}
        setShow={setModelOpen}
      />
    </div>
  );
}
