import React, { useEffect, useState } from "react";
import { getAllFoods } from "../../Common/Services/FoodService";
import HomeForm from "./HomeForm";

/* STATEFUL PARENT COMPONENT */
const HomeList = () => {
  // Variables in the state to hold data
  const [foods, setFoods] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllFoods().then((foods) => {
      console.log(foods);
      setFoods(foods);
    });

  }, []);

  return (
    <div>
      <hr />
      <h2> Welcome to the Grille! </h2>
      <h3> Here are some of our most popular items: </h3>
      {/* Stateless Child component passing up events from form */}
      <HomeForm data={foods} />
      <h4>
        {" "}
        To order from the late night grille, and check out prices, please head
        over to the Duncan Grille Link above.{" "}
      </h4>
    </div>
  );
};

export default HomeList;
