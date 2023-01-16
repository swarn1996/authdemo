import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getpo } from '../../actions/postsSlice'

import { getProduct } from '../actions/productSlice'
import Products from '../component/products/Products'

const Home = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
            item xs={12} sm={12}
          >
             <Products />
           
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home