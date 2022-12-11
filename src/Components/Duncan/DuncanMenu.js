import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import getStripe from "../../Common/Services/StripeService";
import environments from "../../environments";
import Parse from "parse";

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
       customerEmail: Parse.User.current().attributes.email,
     });
     console.warn(error.message);

   }

  return (
    <div>
      <hr />
      <b>
        {" "}
        Please enter the email for the order, or your account email will be used.{" "}
      </b>

      <div>
        <input id="duncan_email" placeholder="email" onChange={onChange} />
        <br></br>
        <br></br>
        <div></div>
        
        {/* <button type="submit" onClick={onClick}>
          Submit */}
        <button onClick={onClick}>
          Checkout  
        </button>
      </div>
    </div>
  );
};

export default DuncanMenu;
