import React from "react";
import classes from "./Form.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Members from "./Members/Members";
import Footer from "./Footer/Footer";

const Form = () => {
  return (
    <form className={classes.form} method="GET">
      <SearchBar />
      <Members />
      <Footer />
    </form>
  );
};

export default Form;
