import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.searchContainer}>
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        type="search"
        id="search"
        name="search"
        aria-label="search for a member"
        placeholder="Find members..."
        tabindex="1"
        onkeypress="searchForm()"
      />
    </div>
  );
};

export default SearchBar;
