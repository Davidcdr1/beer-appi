import React from "react";
import { useDispatch, useSelector } from "react-redux";
import beersByName from "../redux/actions/beerByNameAction";
import { addToCart } from "../redux/actions/cartActionCreator";
import { addToDetail } from "../redux/actions/detailActionsCreator";
import { useState } from "react";
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
import { Link } from "react-router-dom";

function SearchBeers() {
  const dispatch = useDispatch();
  const searchBeers = useSelector((store) => store.beers);
  const [searchName, setSearchName] = useState("");

  function handleClick() {
    dispatch();
  }

  function handleAddToCart(searchBeer) {
    console.log(searchBeer);
    dispatch(addToCart(searchBeer));
  }

  function handleAddToDetail(searchBeer) {
    dispatch(addToDetail(searchBeer));
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 360,
      marginBottom: 10,
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
      <div className="content-search">
        <div>
          <h1>Search Beer</h1>
        </div>
      </div>
      <div className="input-search">
        <input
          type="text"
          value={searchName}
          onChange={(event) => {
            setSearchName(event.target.value);
          }}
        />
        <button
          className="btn btn-success "
          disabled={!searchName}
          onClick={() => dispatch(beersByName(searchName))}
        >
          Load Beers
        </button>
      </div>
      <div className="card-search">
        {searchBeers.map((searchBeer) => (
          <Card className={classes.root}>
            <CardHeader title={searchBeer.name} />
            <div className="cont-img-randoom">
              <Link to="/detail">
                <IconButton
                  type="button"
                  onClick={() => handleAddToDetail(searchBeer)}
                >
                  <CardMedia
                    className={classes.media}
                    image={searchBeer.image_url}
                    title="Paella dish"
                  />
                </IconButton>
              </Link>
            </div>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {searchBeer.tagline}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="share"
                onClick={() => handleAddToCart(searchBeer)}
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
                <Typography paragraph>{searchBeer.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </>
  );
}

export default SearchBeers;
