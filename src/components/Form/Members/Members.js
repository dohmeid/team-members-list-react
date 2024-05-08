import React from "react";
import classes from "./Members.module.css";
import Member from "./Member/Member";

const members = [
  {
    id: 1,
    name: "Carolien Bloeme",
  },
  {
    id: 2,
    name: "Sun Jun",
  },
  {
    id: 3,
    name: "Song Bao",
  },
  {
    id: 4,
    name: "Olivia Arribas",
  },
  {
    id: 5,
    name: "Bonginkosi Mdladlana",
  },
  {
    id: 6,
    name: "Arina Belomestnykh",
  },
  {
    id: 7,
    name: "aqueline Likoki",
  },
];

const Members = () => {

  //rendering the members list
  const membersList = members.map((member) => (
    <Member key={member.id} name={member.name} />
  ));

  return (
    <fieldset className={classes.checkboxesContainer}>
      <legend>Options:</legend>
      <ul>{membersList}</ul>
    </fieldset>
  );
};

export default Members;
