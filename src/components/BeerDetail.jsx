import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavBar } from "./NavBar";
import { addToCart } from "../redux/actions/cartActionCreator";
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

function BeerDetail() {
  const detailsItem = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    console.log(item);
    dispatch(
      addToCart({
        description: item.description,
        id: item.id,
        name: item.name,
        image_url: item.image_url,
      })
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 360,
    },
    media: {
      width: 50,
      height: 100,
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
      <div className="cont-beer-detail">
        <Card className={classes.root}>
          <CardHeader title={detailsItem.name} />
          <div className="cont-img-randoom">
            <CardMedia
              className={classes.media}
              image={detailsItem.image_url}
              title="Paella dish"
            />
          </div>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {detailsItem.tagline}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="share"
              onClick={() => handleAddToCart(detailsItem)}
            >
              <img src={cart} style={{ width: "1.5rem" }} alt="cart"></img>
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
              <Typography paragraph>{detailsItem.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div className="food">
        <h1> Food Pairing</h1>
      </div>
      <div className="food-p">
        <p>{detailsItem.food_pairing}</p>
      </div>
    </>
  );
}
export default BeerDetail;
