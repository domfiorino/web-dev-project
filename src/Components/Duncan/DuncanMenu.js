import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import getStripe from "../lib/getStripe";
import environments from "../../environments";

/* STATELESS CHILD COMPONENT */

const DuncanMenu = ({ onChange, onClick, event }) => {
 
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
      customerEmail: 'crimsonyaseen@gmail.com',
    });
    console.warn(error.message);
    
  }


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
        <button onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default DuncanMenu;
