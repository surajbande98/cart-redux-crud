import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";

import Menu from "@mui/material/Menu";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { REMOVE } from "../state/actions/action";

function Header() {
  const cardsData = useSelector((state) => state.cartReducer.carts);

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const [total,setTotal] = useState(0);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeItem = (id) => {
    dispatch(REMOVE(id));
  } 

  const calTotal = () => {
    let price = 0;

    cardsData.map((e) => price = (e.price * e.qnty) + price);

    setTotal(price);
  };

  useEffect(() => {
    calTotal();
  }, [calTotal]);

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
          badgeContent={cardsData.length}
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
        {cardsData.length ? (
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            <Table>
              <thead>
                  <tr>
                  <th>Dish</th>
                <th>Hotel Name</th>
                  </tr>
       
              </thead>

              <tbody>
                {cardsData.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>
                         <Link to={`/card/${e.id}/details`} onClick={handleClose}>
                         <img
                            src={e.imgdata}
                            style={{ width: "5rem", height: "5rem" }}
                          />
                         </Link>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price: Rs.{e.price * e.qnty}</p>
                          <p>Quantity: {e.qnty}</p>
                          <p>
                            <i
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              className="fas fa-trash smalltrash"
                            ></i>
                          </p>
                        </td>

                        <td className="mt-5" onClick={() => removeItem(e.id)}>
                          <p>
                            <i
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              className="fas fa-trash largetrash"
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </>
                  );
                })}

                <tr>
                <td><p>Total: Rs {total} </p></td>
                </tr>
               
              </tbody>
            </Table>
          </div>
        ) : (
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
        )}
      </Menu>
    </Navbar>
  );
}

export default Header;
