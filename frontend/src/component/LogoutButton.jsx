import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const theme = useTheme();
  return (
    <Button
      style={{
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
      }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
