import React, { useEffect } from "react";

/* STATELESS CHILD COMPONENT */
const DuncanMenu = ({ onChange, onClick, event }) => {

  return (
    <div>
      <hr />
      <b>
        {" "}
        Please enter the email for the order.{" "}
      </b>
      <div>
        <input id="duncan_email" placeholder="email" onChange={onChange} />
        <br></br>
        <br></br>
        <div></div>
        <button onClick={onClick}>
          Checkout  
        </button>
      </div>
    </div>
  );
};

export default DuncanMenu;
