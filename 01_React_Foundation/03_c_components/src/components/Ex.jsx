import React from "react";
import Ex2 from "./Ex2";
const Ex = (props) => {
  console.log("working ex");

  return (
    <>
      <div>Main Hn Example {props.name}</div>
      <Ex2 user={props.name} />
    </>
  );
};

export default Ex;
