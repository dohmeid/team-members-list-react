import React from "react";
import "./Member.module.css";

const Member = (props) => {
  return (
    <li>
      <i className="fa fa-user" aria-hidden="true"></i>
      <label htmlFor={props.id}>{props.name}</label>
      <input type="checkbox" id={props.id} value={props.name} />
    </li>
  );
};

export default Member;
