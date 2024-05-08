import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.buttonsContainer}>
      <button type="button" className={classes.cancel} tabindex="9">
        Cancel
      </button>
      <button type="submit" className={classes.save} tabindex="10">
        SAVE
      </button>
    </div>
  );
};

export default Footer;
