import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { addUser ,isLogin} from "../actions/authSlice";
import { useNavigate } from "react-router-dom";




const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector(isLogin)

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function redirectToHome() {
    console.log("i am here")
    navigate('/');
  }

  useEffect(()=> {
     if(loginUser === true){

        redirectToHome()
     }
  },[loginUser])



  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.email !== '' && formData.password !== ''){
        dispatch(addUser(formData))
    }else{
        alert("please fill given fields")
    }
   
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const switchMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            {/* <Grid container justifyContent="flex-end" >
              <Grid item>
                 <Button onClick={switchMode}>
                    {isSignUp ? 'Already have account? Sign In' : 'Don`t have an account? Sign Up'}
                 </Button>
              </Grid>
            </Grid> */}
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
