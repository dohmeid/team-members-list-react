import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Members from "./Members/Members";
import Footer from "./Footer/Footer";
import "./Form.module.css";

const Form = () => {
  return (
    <form method="GET">
      <SearchBar />
      <Members />
      <Footer />
    </form>
  );
};

export default Form;
