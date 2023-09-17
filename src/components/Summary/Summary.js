import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const { cart, totalAmount, totalQTY } = useSelector(
    (state) => state.products
  );

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col">Product Items : {cart.length} </div>
          <div className="col">Total Items : {totalQTY} </div>
          <div className="col">Total Amount : ${totalAmount} </div>
          {/* <div className="col text-right">&euro; ${totalAmount}</div> */}
        </div>
        <form>
          <p>SHIPPING</p>
          <select>
            <option className="text-muted">
              Standard-Delivery- &euro;5.00
            </option>
          </select>
          <p>GIVE CODE</p>
          <input id="code" placeholder="Enter your code" />
        </form>
        <div className="row">
          <div className="col">TOTAL PRICE</div>
          <div className="col text-right">&euro; 137.00</div>
        </div>
        <button className="btn">CHECKOUT</button>
      </div>
    </>
  );
};

export default Summary;
