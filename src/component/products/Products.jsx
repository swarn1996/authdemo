import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector  } from "react-redux";


// import { selectAllPosts } from '../../actions/postsSlice';
import { selectAllProducts } from '../../actions/productSlice';

import useStyles from './styles';
import Product from './product/Product';


const Products = () => {
  const Products = useSelector(selectAllProducts);

    const classes  = useStyles();
  return (
    !Products.length ? <CircularProgress /> 
   : <Grid className={classes.container} container alignItems="stretch" spacing={3} > 
       {
        Products.map((product,index)=>(
          <Grid key={index} item xs={12} sm={6}>
            <Product product={product} />
            </Grid>
        ))
       }
   </Grid> 
  )
}

export default Products