import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IncDecCartItem from "../../components/IncDecCartItem/IncDecCartItem";
import Summary from "../../components/Summary/Summary";
import { setGetTotals, setRemoveCartItem } from "../../redux/ProductSlice";
import "./CartProduct.css";

const CartProduct = () => {
  // get data from redux
  const { cart, totalAmount } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // console.log(cartItem.length);

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cart.length} items
                </div>
              </div>
            </div>
            {cart.length > 0 ? (
              <>
                {cart.map((item, index) => (
                  <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                      <div className="col-2">
                        <img className="img-fluid" src={item.img} alt="" />
                      </div>
                      <div className="col">
                        <div className="row text-muted">{item.name}</div>
                        <div className="row">Categroy</div>
                      </div>
                      <IncDecCartItem qty={item.qty} id={item.id} />
                      <div className="col">
                        &euro; {item.price * item.qty}
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => {
                            dispatch(setRemoveCartItem(item.id));
                            dispatch(setGetTotals());
                          }}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h4 className="text-danger text-center">Empty Cart</h4>
            )}
            <div className="back-to-shop">
              <a href="#">&leftarrow;</a>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          {/* <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col">ITEMS 3</div>
                <div className="col text-right">&euro; 132.00</div>
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
            </div> */}
          <Summary />
        </div>
      </div>
    </>
  );
};

export default CartProduct;
