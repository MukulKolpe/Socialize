import React from "react";
import { makeStyles, Link,useTheme,useMediaQuery} from "@material-ui/core";
import DrawerComponentFooter from "./DrawerFooter";

const useStyles = makeStyles({
  footer: {
    color: "white",
    backgroundColor: '#000000' ,
    width: "100%",
    height:"100px",
    bottom: 0,
    padding: 8,
  },  
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "100%",
    marginLeft: "10%",
    fontFamily: "Raleway, Arial", bottom: 0,
    "&:hover": {
    borderBottom: "1px solid white",
      borderRadius: "5px",
    }}
    
});

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
    {isMobile ? (
      <DrawerComponentFooter />
    ) : (
      <div className={classes.footer}>
            <Link to="/" className = {classes.link}>
              Contact Us
            </Link>
            <Link to="/" className = {classes.link}>
             About Us
            </Link>            
            <Link to="/" className = {classes.link}>
              Privacy Policy
            </Link>
            <Link to="/" className = {classes.link}>
              Cookie Policy
            </Link>
            <Link to="/" className = {classes.link}>
              Help
            </Link>
            <Link to="/" className = {classes.link}>
               Terms Of Service
            </Link>
  </div>
    )}
    </div>
    
  
  );
};

export default Footer;