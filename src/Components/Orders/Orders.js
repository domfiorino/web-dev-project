import React, { useEffect, useState } from "react";
import { getAllOrderItems } from "../../Common/Services/OrderItemService";

export default function OrdersModule() {
  const [orderItems, setOrderItems] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getAllOrderItems().then((orderItems) => {
      console.log("getAllOrderItems: ", orderItems);
      setOrderItems(orderItems);         
    });

  }, []);

  console.log("order items: ", orderItems);
  // create dictionary to hold user id as keys and array of items as values
  var userOrder = {};
  let userEmail = "";
  let foodName = "";
  // for each OrderItem:
  for (var i = 0; i < orderItems.length; i++) {

    userEmail = orderItems[i].attributes.user;
    foodName = orderItems[i].attributes.food;

    console.log("userEmail: ", userEmail);
    console.log("foodName: ", foodName);

    // if the user email is already added as a key:
    if (userEmail in userOrder){
      // then add the food item to list
      userOrder[userEmail].push(foodName);
    }
    // if user email is not already added as a key
    else{
      // then add email as key and append foodname to list
      userOrder[userEmail] = [foodName];
    }
  }
  console.log("userOrder: ", userOrder);

  return (
    <div>
      
      <h1> Orders </h1>
      <hr/>
      <br>
      </br>
      <div>
      {
        Object.keys(userOrder).map((key, index) => ( 
          <p key={index}> Email: {key} - {userOrder[key]} </p> 
        ))
      }
      </div>
      <hr/>
    </div>
  );
}