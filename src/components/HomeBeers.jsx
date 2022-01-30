import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadBeers } from "../redux/actions/homeBeersActionsCreators";
import { addToCart } from "../redux/actions/cartActionCreator";
import { NavBar } from "./NavBar";
import cart from "../img/shopping-cart.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { addToDetail } from "../redux/actions/detailActionsCreator";

export default function HomeBeers() {
  const beers = useSelector((state) => state.homeBeers);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 260,
      height: 410,
    },
    media: {
      height: 0,
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

  function handlePrev() {
    setPage(page > 1 ? page - 1 : 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  function handleAddToCart(beer) {
    dispatch(addToCart(beer));
  }

  function handleAddToDetail(beer) {
    dispatch(addToDetail(beer));
  }

  useEffect(() => {
    dispatch(loadBeers(page, perPage));
  }, [page, perPage]);

  const pagination = (
    <>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
        data-testid="paginator"
      >
        <button
          data-testid="prev-button"
          type="button"
          className="btn btn-dark m-2"
          onClick={handlePrev}
        >
          {"<<"}
        </button>
        {"  "}
        <span data-testid="page-number">{page}</span>
        {"  "}
        <button
          data-testid="next-button"
          type="button"
          className="btn btn-dark m-2"
          onClick={handleNext}
        >
          {">>"}
        </button>
        <select
          className="form-select"
          name="itemsPerPage"
          data-testid="select-page"
          value={perPage}
          onChange={(event) => setPerPage(+event.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </>
  );

  return (
    <>
      <NavBar />
      <div className="titel-home">
        <h2>Beers List</h2>
      </div>
      <hr />
      {beers.length > 0 && pagination}
      <hr />
      <div className="container-xl">
        <div className="row row-cols-4">
          {beers.map((beer) => (
            <div className="col-3">
              <div className="cont-homebeer">
                <Card className={classes.root}>
                  <CardHeader title={beer.name} />
                  <div className="content-img">
                    <Link to="/detail">
                      <div className="img-product">
                        <IconButton
                          type="button"
                          onClick={() => handleAddToDetail(beer)}
                        >
                          <CardMedia
                            component="img"
                            height="194"
                            image={beer.image_url}
                            style={{ width: "2rem", height: "8rem" }}
                            alt="empty image"
                            onClick={() => handleAddToDetail(beer)}
                          />
                        </IconButton>
                      </div>
                    </Link>
                  </div>
                  <CardContent>
                    <div className="cont-tagline">
                      <Typography>
                        <h5>{beer.tagline}</h5>
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="add to cart"
                      onClick={() => handleAddToCart(beer)}
                    >
                      <img src={cart} style={{ width: "1.5rem" }}></img>
                    </IconButton>
                  </CardActions>
                  <Card></Card>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
