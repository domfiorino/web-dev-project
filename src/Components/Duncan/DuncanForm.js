import React, { useEffect, useState } from "react";
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
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  // Add functions to get the hall from the pointer in food item

  return (
    <div>
      <hr />
      <h3> Duncan Grille Menu </h3>
      <small> Hours of Operation are Sun - Thur. (10pm - 12am) </small>
      <div>
        {foods.length > 0 && (
          <ul>
            {foods.map((food) => (
              <div>
                <span>
                  {/* Using getter for food Object to display name */}
                  <li key={food.id}>
                    {food.get("name")} <b>(${food.get("price")})</b>
                    {}{" "}
                  </li>{" "}
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div>
        {/*}  <p> Food by ID: </p> 
        {/* Check that the lesson object exists */}
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
    </div>
  );
};

export default DuncanForm;
