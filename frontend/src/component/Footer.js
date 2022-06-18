import React from "react";
import { makeStyles, Link} from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    color: "white",
    backgroundColor: '#000000' ,
    width: "100%",
    height:"20%",
    position: "absolute",
    bottom: 0 
  },  
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "100%",
    marginLeft: "5%",
    marginRight: "5%",
    fontFamily: "Raleway, Arial", bottom: 0,
    "&:hover": {
    borderBottom: "1px solid white",
      borderRadius: "5px",
    }}
    
});

const Footer = () => {
  const classes = useStyles();
  return (
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
  );
};

export default Footer;