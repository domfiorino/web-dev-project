import React, { useEffect, useState } from "react";
import Parse from "parse";
import { Navigate } from "react-router-dom";
import { getAllFoods, getFoodById, getAllFoodsByDormId } from "../../Common/Services/FoodService";
import { createOrderItem } from "../../Common/Services/OrderItemService";

import DuncanMenu from "./DuncanMenu";
import getStripe from "../../Common/Services/StripeService";
import environments from "../../environments";

/* STATEFUL PARENT COMPONENT */
const DuncanForm = ({event}) => {
  // Variables in the state to hold data
  const [foods, setFoods] = useState([]);
  const [food, setFood] = useState([]);
  const [name, setName] = useState();
  const [orderItem, setOrderItem] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    // getAllFoods().then((foods) => {
    //   console.log(foods);
    //   setFoods(foods);         
    // });
    let dormId = "vt1IOReUiq"; //Duncan's id
    let dormPointer = {
      __type: 'Pointer',
      className: 'Dorm',
      objectId: dormId
    }
    getAllFoodsByDormId(dormPointer).then((foods) => {
      console.log(foods);
      setFoods(foods);
            
    });

  }, []);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // get food item ids and email
    let userId = Parse.User.current().id;
    console.log("id for order: " + userId);
    let userPointer = {
      __type: 'Pointer',
      className: '_User',
      objectId: userId
    }

    var checkboxes = document.getElementsByName('food-checkbox');
    var result = "";
    // for each checkbox: 
    for (var i = 0; i < checkboxes.length; i++) {
      // if the checkbox for the item is checked: 
      if (checkboxes[i].checked) {
        // create a new OrderItem object with userEmail and pointer to food item  
        let foodPointer = {
          __type: 'Pointer',
          className: 'Food',
          objectId: checkboxes[i].id
        }
        createOrderItem(foodPointer, userPointer).then((orderItem) => {
          console.log(orderItem);
          setFoods(orderItem);
                
        });
      }
    }
    handleCheckout(e);


  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    // e.preventDefault();
    console.log("e.target: ", e.target);
  };

  async function handleCheckout(event){
    event.preventDefault();
    const stripe = await getStripe();

    const {error} = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: environments.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      customerEmail: Parse.User.current().attributes.email,
    });
    console.warn(error.message);

  }

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
                  <input type="checkbox" id={food.id} value={food.get("name")} name="food-checkbox" onChange={onChangeHandler}></input>
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
