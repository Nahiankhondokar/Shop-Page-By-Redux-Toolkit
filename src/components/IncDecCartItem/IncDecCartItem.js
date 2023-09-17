import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  setDecCartItem,
  setGetTotals,
  setIncCartItem,
  setRemoveCartItem,
} from "../../redux/ProductSlice";

const IncDecCartItem = ({ qty, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col">
        {qty > 1 ? (
          <button
            className="btn btn-sm btn-info"
            onClick={() => {
              dispatch(setDecCartItem(id));
              dispatch(setGetTotals());
            }}
          >
            -
          </button>
        ) : (
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              dispatch(setRemoveCartItem(id));
              dispatch(setGetTotals());
            }}
          >
            <BsFillTrashFill />
          </button>
        )}
        <a href="#" className="border">
          {qty}
        </a>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            dispatch(setIncCartItem(id));
            dispatch(setGetTotals());
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default IncDecCartItem;
