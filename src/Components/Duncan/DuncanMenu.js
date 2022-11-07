import React from "react";

/* STATELESS CHILD COMPONENT */
const DuncanMenu = ({ onChange, onClick }) => {
  return (
    <div>
      <hr />
      <b>
        {" "}
        Please enter the name for the order.{" "}
      </b>

      <div>
        <input id="duncan_name" placeholder="Name" onChange={onChange} />
        <br></br>
        <br></br>
        <div></div>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default DuncanMenu;
