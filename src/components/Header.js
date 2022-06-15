import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";

import Menu from "@mui/material/Menu";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar bg="dark" expand="lg" style={{ height: "60px" }}>
      <Container>
        <Link className="text-light text-decoration-none" to="/">
          Simple Cart
        </Link>

        <Nav className="me-auto">
          <Link to="/" className="text-light text-decoration-none mx-3">
            Home
          </Link>
        </Nav>

        <Badge
          badgeContent={4}
          color="primary"
          style={{ cursor: "pointer" }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </Badge>
      </Container>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div
          className="card_details d-flex justify-content-center align-items-center"
          style={{ width: "24rem", padding: 10, position: "relative" }}
        >
          <i className="fas fa-close smallclose" onClick={handleClose}></i>
          <p style={{ fontSize: 22 }}>Your cart is empty</p>
          <img
            src="./cart.gif"
            alt=""
            className="emptycart_img"
            style={{ width: "5rem", padding: 10 }}
          />
        </div>
      </Menu>
    </Navbar>
  );
}

export default Header;
