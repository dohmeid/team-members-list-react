import React from "react";
import classes from "./Member.module.css";

const Member = (props) => {
  return (
    <li className={classes.member}>
      <i className="fa fa-user" aria-hidden="true"></i>
      <label for={props.id}>{props.name}</label>
      <input type="checkbox" name={props.id} value={props.name} tabindex={props.id} />
    </li>
  );
};

export default Member;
