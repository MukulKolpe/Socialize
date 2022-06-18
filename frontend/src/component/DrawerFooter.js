import React from 'react'
import { makeStyles, Link,useTheme,useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    backgroundColor: '#000000' ,
    width: "100%",
    height:"20%",
    bottom: 0,
    padding: 8
  },  
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "100%",
    fontFamily: "Raleway, Arial", bottom: 0,
    "&:hover": {
    borderBottom: "1px solid white",
      borderRadius: "5px",
    }}
    
});
const DrawerFooter = () => {
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
  )
}

export default DrawerFooter