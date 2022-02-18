import React, { ChangeEvent, useState } from "react";
import { Box, Button, styled, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../../api/context";

const classes = {
  login: "login",
};

const StyledBox = styled(Box)(() => ({
  width: "100%",
  [`& .${classes.login}`]: {
    boxShadow: "0 10px 30px #0000ff2b",
    gap: "10px",
    width: "300px",
    padding: "20px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    margin: "30vh auto 0 auto",
  },
}));

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const api = useAPI();

  if (api.user.isAuthenticated) {
    navigate("/Dashboard", { replace: true });
  }

  const handleClick = () => {
    api.user.login(name, password).then((res) => {
      navigate("/Dashboard", { replace: true });
    });
  };

  const handleSignUp = () => {
    const body = {
      username: name,
      email: name,
      emailVerified: true,
      password: password,
      additionalProp1: {},
    };
    api.user.signUp(body).then(() => {
      api.user.login(name, password).then((res) => {
        navigate("/Dashboard", { replace: true });
      });
    });
  };

  return (
    <StyledBox>
      <Box className={classes.login}>
        <TextField
          label="Email"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Box>
          <Button
            variant="contained"
            size="large"
            onClick={handleClick}
            style={{ width: "50%" }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={handleSignUp}
            style={{ width: "50%" }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Login;
