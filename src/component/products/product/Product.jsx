import React from "react";
import {
  Card,
  Button,
  Typography,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useStyles from "./styles";

const Product = ({ product }) => {

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product.thumbnail}
        title={product.title}
      />
      <div className={classes.overlay2}>
        <Button
          style={{ color: "#fff" }}
          size="small"
          onClick={() => {}}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" text="textSecondary">
        {product.brand}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {product.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h4" color="textSecondary" component="p">
          Price {product.price}
        </Typography>
      </CardContent>
      
      {/* <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {}}
        >
          <ThumbUpAltIcon fontSize="small" />
          Like &nbsp;
          {product.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {}}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default Product;
