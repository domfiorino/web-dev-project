import {loadStripe} from '@stripe/stripe-js';
import environments from "../../environments";

let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(environments.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
};

export default getStripe;
