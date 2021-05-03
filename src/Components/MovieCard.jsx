import React from "react";

//Material UI Components
import {
  Card,
  makeStyles,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "176.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {},
}));

export default function MovieCard(props) {
  const classes = useStyles();
  let thumbnailDetails = props.details;

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() => props.passIdtoParent(thumbnailDetails.imdbID)}
        >
          <CardMedia
            className={classes.media}
            image={thumbnailDetails.Poster}
            title={thumbnailDetails.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h6">
              {thumbnailDetails.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${thumbnailDetails.Year} - ${thumbnailDetails.Type}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
