import React from "react";

/* STATELESS CHILD COMPONENT */
const DuncanMenu = ({ onChange, onClick }) => {
  return (
    <div>
      <hr />
      <b>
        {" "}
        Please enter the food item you would like to order, followed by your
        name.{" "}
      </b>

      <form>
        <input placeholder="Food" onChange={onChange} />

        <input placeholder="Name" onChange={onChange} />
        <br></br>
        <br></br>
        <div></div>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DuncanMenu;
