import React from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { isLogin,logout } from "../../actions/authSlice";
import { useSelector,useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const loginUser = useSelector(isLogin)
  const dispatch = useDispatch()

  const logoutUser = () => {
     dispatch(logout(false))
  }

  const user = null;

  return(
    <AppBar className={classes.AppBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          component={Link}
          to="/"
          variant="h2"
          align="center"
        >
          <p>Logo</p>
        </Typography>
        <div>
            {loginUser && 
            <SearchBar />
            }
        </div>

        <Toolbar className={classes.toolbar}>
          {loginUser ? (
            <div className={classes.profile}>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={() => logoutUser()}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="secondary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
}; 

export default Navbar;
