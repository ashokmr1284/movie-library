import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";

import Divider from "@material-ui/core/Divider";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: "absolute",
    right: "5px",
    top: "5px",
  },
  divider: {
    margin: "10px 0",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MovieDetailsView(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setShow(false);
  };

  return (
    <div>
      <Dialog
        open={props.show}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {props.details.Title ? (
          <>
            <DialogTitle id="alert-dialog-slide-title">
              <b>Title:</b> {props.details.Title}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                className={classes.closeButton}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <b>Plot:</b> {props.details.Plot}
                <Divider className={classes.divider} />
                <b>Actors:</b> {props.details.Actors}
                <Divider className={classes.divider} />
                <b>Genre:</b> {props.details.Genre}
                <Divider className={classes.divider} />
                <b>Language:</b> {props.details.Language}
                <Divider className={classes.divider} />
                <b>Rated:</b> {props.details.Rated}
                <Divider className={classes.divider} />
                <b>Director:</b> {props.details.Director}
                <Divider className={classes.divider} />
                <b>Writer:</b> {props.details.Writer}
                <Divider className={classes.divider} />
                <b>Year:</b> {props.details.Year}
                <Divider className={classes.divider} />
                <b>Production:</b> {props.details.Production}
                <Divider className={classes.divider} />
                <b>BoxOffice:</b> {props.details.BoxOffice}
                <Divider className={classes.divider} />
                <b>Country:</b> {props.details.Country}
                <Divider className={classes.divider} />
                <b>imdbRating:</b> {props.details.imdbRating}
                <Divider className={classes.divider} />
                <b>imdbVotes:</b> {props.details.imdbVotes}
              </DialogContentText>
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions> */}
          </>
        ) : (
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <CircularProgress />
            </DialogContentText>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
