import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import Img from "gatsby-image"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Link to={props.link}>
          <Img fluid={props.featuredImage} style={{ marginBottom: "1.5rem" }} />
        </Link>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.date}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.readingTime + " minute read"}
        </Typography>
        <Typography variant="body2" component="p">
          {props.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
          <Link to={props.link} style={{ textShadow: "none", backgroundImage: "none" }}>
            <Button size="small">
              Read Post
            </Button>
          </Link>
      </CardActions>
    </Card>
  );
}
