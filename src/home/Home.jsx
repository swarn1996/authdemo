import { Container, Grid, Grow } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getpo } from '../../actions/postsSlice'

import { getProduct } from "../actions/productSlice";
import Products from "../component/products/Products";
import { isLogin } from "../actions/authSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector(isLogin);
  const navigator = useNavigate();

  useEffect(() => {
    dispatch(getProduct());
    if (loginUser === false) {
      navigator("/auth");
    }
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={4}
          item
          xs={12}
          sm={12}
        >
          <Products />
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
