import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAllFoods, getFoodById } from "../../Common/Services/FoodService";
import DuncanMenu from "./DuncanMenu";

/* STATEFUL PARENT COMPONENT */
const DuncanForm = () => {
  // Variables in the state to hold data
  const [foods, setFoods] = useState([]);
  const [food, setFood] = useState([]);
  const [name, setName] = useState();

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllFoods().then((foods) => {
      console.log(foods);
      setFoods(foods);
    });

    // getById("OXsgE8Mhjc").then((food) => {
    //   console.log(food);
    //   setLesson(food);
    // });
  }, []);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // get food item and name
    //let food = document.getElementById("duncan_checkbox");
    let name = document.getElementById("duncan_name").value;

    //console.log("food items: " + food);
    console.log("name for order: " + name);

    // alert user of their order
    alert("Thank you for your order, " + name + "!");

  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  // Add functions to get the hall from the pointer in food item

  return (
    <form>
      <hr />
      {/* <h3> Duncan Grille Menu </h3> */}
      <small> Hours of Operation are Sun - Thur. (10pm - 12am) </small>
      <div>
        {foods.length > 0 && (
          <div>
            {foods.map((food) => (
              <div id="duncan_checkbox">
                  <input type="checkbox" id={food.id}></input>
                  {/* Using getter for food Object to display name */}
                  <label key={food.id}>
                    {food.get("name")} <b>(${food.get("price")})</b>
                    {}{" "}
                  </label>{" "} 
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {/*}  <p> Food by ID: </p> 
        {/* Check that the food object exists */}
        {Object.keys(food).length > 0 && (
          <ul>
            {/* Using getter for food Object to display name */}
            {foods.map((food) => (
              <li key={"1" + food.id}> {food.id} </li>
            ))}
          </ul>
        )}
      </div>
      {/* Stateless Child component passing up events from form */}
      <DuncanMenu onClick={onClickHandler} onChange={onChangeHandler} />
    </form>
  );
};

export default DuncanForm;
