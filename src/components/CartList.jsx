import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActionCreator";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { NavBar } from "./NavBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default function CartList() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemoveFromCart(item) {
    console.log(item);
    dispatch(removeFromCart(item));
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    margin: "0",
    backgroundColor: "rgb(248, 198, 70)",
  }));

  return (
    <>
      <NavBar />

      <div className="container-xl">
        <Box sx={{ flexGrow: 1 }}>
          {cartItems.length > 0 && (
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Item>
                  <div className="cart-titel">
                    <h1>Cart</h1>
                  </div>
                </Item>
              </Grid>
            </Grid>
          )}

          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Grid container spacing={3} justifyContent="space-evenly">
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <>
                      <div className="line"></div>
                      <Grid item xs={4}>
                        <Item>
                          <div className="cont-image-name">
                            <img
                              style={{ width: "1rem" }}
                              src={item.image_url}
                              alt="item"
                            />
                          </div>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <div className="product-name">
                            <p>{item.name}</p>
                          </div>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <IconButton
                            aria-label="add to favorites"
                            type="button"
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            <DeleteForeverOutlinedIcon />
                          </IconButton>
                        </Item>
                      </Grid>
                    </>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Item>
                      <div className="empty">
                        <h4 className="text-danger2">The Cart is empty</h4>
                      </div>
                    </Item>
                  </Grid>
                )}
              </Grid>
            </Grid>
            {cartItems.length > 0 && (
              <Grid item xs={6} md={4}>
                <Item>
                  <div className="line-total"></div>
                  <div className="total-title">TOTAL</div>
                  <div className="total-items">items:{cartItems.length}</div>
                  <div className="btn-checkout">
                    <button className="btn btn-danger">Checkout</button>
                  </div>
                </Item>
              </Grid>
            )}
          </Grid>
        </Box>
      </div>
    </>
  );
}
