import React from "react";
import Member from "./Member/Member";
import "./Members.module.css";

const MEMBERS = [
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
