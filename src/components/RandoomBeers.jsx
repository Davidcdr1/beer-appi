import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  randoomBeersLtABV,
  randoomBeersGtABV,
} from "../redux/actions/randoomBeersActions";
import { addToCart } from "../redux/actions/cartActionCreator";
import { addToDetail } from "../redux/actions/detailActionsCreator";
import { NavBar } from "./NavBar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import cart from "../img/shopping-cart.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function RandoomBeers() {
  const dispatch = useDispatch();
  const randoomBeers = useSelector((store) => store.randoomBeers);

  function handleClick() {
    dispatch();
  }

  function handleAddToCart(randoomBeer) {
    console.log(randoomBeer);
    dispatch(addToCart(randoomBeer));
  }

  function handleAddToDetail(randoomBeer) {
    dispatch(addToDetail(randoomBeer));
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 360,
    },
    media: {
      width: 50,
      height: 190,
      paddingTop: "56.25%", // 16:9
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
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <NavBar />
      <div className="content-random">
        <div>
          <h1>Randoom Beer</h1>
        </div>
      </div>
      <div className="cont-buttons">
        <button
          className="btn btn-success m-2"
          type="button"
          onClick={() => dispatch(randoomBeersLtABV())}
        >
          non-alcoholic
        </button>
        <button
          className="btn btn-danger m-2"
          type="button"
          onClick={() => dispatch(randoomBeersGtABV())}
        >
          alcoholic
        </button>
      </div>

      <div className="cont-beer-randoom">
        {randoomBeers.map((randoomBeer) => (
          <Card className={classes.root}>
            <CardHeader title={randoomBeer.name} />
            <div className="cont-img-randoom">
              <Link to="/detail">
                <IconButton
                  type="button"
                  onClick={() => handleAddToDetail(randoomBeer)}
                >
                  <CardMedia
                    className={classes.media}
                    image={randoomBeer.image_url}
                    title="empty image"
                  />
                </IconButton>
              </Link>
            </div>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {randoomBeer.tagline}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="share"
                onClick={() => handleAddToCart(randoomBeer)}
              >
                <img src={cart} style={{ width: "1.5rem" }}></img>
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{randoomBeer.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </>
  );
}
