import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD, REMOVE, REMOVE_ONE } from "../../state/actions/action";

import "../style.css";

const CardDetails = () => {
  const [dish, setDish] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();

  const cartsData = useSelector((state) => state.cartReducer.carts);

  const filterDish = () => {
    return cartsData.filter((item) => item.id == id);
  };

  useEffect(() => {
    setDish(filterDish());
  }, [cartsData]);

  const removeItem = (id) => {
    dispatch(REMOVE(id));
  };

  const add = (item) => {
    dispatch(ADD(item));
  };
  const removeOne = (item) => {
    dispatch(REMOVE_ONE(item));
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Details</h2>

        <section className="container mt-3">
          {dish.map((item) => {
            return (
              <div className="item_details">
                <div className="items_img">
                  <img src={item.imgdata} />
                </div>

                <div className="details">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong>: {item.rname}
                          </p>
                          <p>
                            <strong>Price</strong>: {item.price}
                          </p>
                          <p>
                            <strong>Dishes</strong>: {item.address}
                          </p>
                          <p>
                            <strong>Total</strong>: Rs. {item.price * item.qnty}
                          </p>
                          <p>
                            {item.qnty === 0 ? (
                              <div className="button_div d-flex justify-content-center">
                                <Button
                                  onClick={() => add(item)}
                                  variant="primary"
                                  className="col-lg-12"
                                >
                                  Add to Cart
                                </Button>
                              </div>
                            ) : (
                              <div
                                className="mt-5 d-flex justify-content-around align-items-center"
                                style={{
                                  width: 100,
                                  cursor: "pointer",
                                  backgroundColor: "#ddd",
                                  color: "#111",
                                }}
                              >
                                <span
                                  onClick={() => removeOne(item)}
                                  style={{ fontSize: 24 }}
                                >
                                  -
                                </span>
                                <span style={{ fontSize: 22 }}>
                                  {item.qnty}
                                </span>
                                <span
                                  onClick={() => add(item)}
                                  style={{ fontSize: 24 }}
                                >
                                  +
                                </span>
                              </div>
                            )}
                          </p>
                        </td>

                        <td>
                          <p>
                            <strong>Rating</strong>:{" "}
                            <span className="rating">{item.rating} ☆ </span>
                          </p>
                          <p>
                            <strong>Order review</strong>: {item.somedata}
                          </p>
                          <p>
                            <strong>Remove</strong>:
                            <i
                              onClick={() => removeItem(item.id)}
                              style={{ fontSize: 20 }}
                              className="fas fa-trash"
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default CardDetails;
