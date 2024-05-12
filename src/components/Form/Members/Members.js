import React from "react";
import Member from "./Member/Member";
import "./Members.module.css";
import {MEMBERS} from "../../../data/membersList";

const Members = () => {
  //rendering the members list
  const MEMBERS_LIST = MEMBERS.map((member) => (
    <Member key={member.id} name={member.name} id={member.id} />
  ));

  return (
    <fieldset>
      <legend>Options:</legend>
      <ul>{MEMBERS_LIST}</ul>
    </fieldset>
  );
};

export default Members;
