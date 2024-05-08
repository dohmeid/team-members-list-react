import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.buttonsContainer}>
      <button type="button" className={classes.cancel}>
        Cancel
      </button>
      <button type="submit" className={classes.save}>
        SAVE
      </button>
    </div>
  );
};

export default Footer;
