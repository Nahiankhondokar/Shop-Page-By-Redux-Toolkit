import {
  MDBBtn,
  MDBContainer,
  MDBInputGroup,
  MDBNavbar,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.products.cart);
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <Link to="/all-product">All Product</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand>
            <Link to="/cart-product">Cart Product</Link>
          </MDBNavbarBrand>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <MDBBtn href="#">Cart({cart.length})</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
