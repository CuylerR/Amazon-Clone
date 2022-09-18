import React from 'react';
import { getBasketTotal } from './reducer';
import './Subtotal.css';
//import CurrencyFormat from "react-currency-format;"
import { useStateValue } from "/.StateProvider";
import { getBasketTotal } from "./reducer";


function Subtotal() {
  return (
  <div className="subtotal">
    <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket.length} items): <strong></strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains

                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

/>
    <button>Proceed to Checkout</button>
  </div>
  );
}

export default Subtotal;