import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartProduct,
  getAllProduct,
  setGetTotals,
} from "../../redux/ProductSlice";

const AllProduct = () => {
  // data from redux
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.allProduct.products);

  // add to cart product
  const handleAddToCart = (e, item) => {
    e.preventDefault();

    const cartItem = {
      id: item.id,
      name: item.title,
      price: item.price,
      dprice: item.price,
      qty: 1,
      rating: 5,
      img: item.images[1],
    };

    // console.log(cartItem);
    dispatch(addToCartProduct(cartItem));
    dispatch(setGetTotals());
  };

  // api call
  // useEffect(() => {
  //   axios.get("https://dummyjson.com/products").then((res) => {
  //     dispatch(getAllProduct(res.data.products));
  //     //   console.log(res.data.products);
  //   });
  // }, []);

  return (
    <>
      <MDBContainer>
        <MDBRow>
          {product.map((item, index) => (
            <MDBCol size="md-4 mt-5" key={index}>
              <MDBCard className="mt-3">
                <MDBCardImage
                  src={
                    item.images[1] ??
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                  }
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>${item.price}</MDBCardText>
                  <MDBCardText>{item.stock}</MDBCardText>
                  <MDBBtn href="#" onClick={(e) => handleAddToCart(e, item)}>
                    Add To Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default AllProduct;
