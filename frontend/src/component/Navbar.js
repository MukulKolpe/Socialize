import { React, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import Modal from "react-modal";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton/LoginButton";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "white",
    fontFamily: "Raleway, Arial",
    alignContent: "left",
    justifyContent: "left",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",

    fontFamily: "Raleway, Arial",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
      borderRadius: "5px",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isAuthenticated, user } = useAuth0();
  const collectData = async () => {
    let name = user.name;
    let email = user.email;
    let image = user.picture;
    let result = await fetch("http://localhost:5000/users/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        image,
      }),
    });

    result = await result.json();
    console.log(result);
  };

  collectData();

  return (
    <AppBar position="static" style={{ background: "#000000" }}>
      <CssBaseline />
      <Toolbar>
        <Typography
          variant="h4"
          className={classes.logo}
          style={{ fontFamily: "Raleway, Arial", fontWeight: "bold" }}
        >
          Socialize
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            {!isAuthenticated ? (
              <div>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
                <LoginButton />
              </div>
            ) : (
              <div>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
                <Link to="/event" className={classes.link}>
                  Organise an event
                </Link>
                <LogoutButton />

                <img
                  style={{
                    borderRadius: "50px",
                    boxSizing: "border-box",
                    height: "40px",
                    width: "40px",
                    overflow: "hidden",
                    marginLeft: "25px",
                    verticalAlign: "middle",
                    cursor: "pointer",
                  }}
                  alt={user.name}
                  src={user.picture}
                />

                {console.log(user.picture)}
              </div>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
