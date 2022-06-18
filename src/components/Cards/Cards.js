import { height } from "@mui/system";
import React, { useReducer, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";

import Cardsdata from "../../CardData";
import { ADD } from "../../state/actions/action";

import "../style.css";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const add = (item) => {
    dispatch(ADD(item));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>

      <div className="row d-flex justify-content-center align-item-center">
        {data.map((card,index) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
                key={index + 1}
              >
                <Card.Img
                  variant="top"
                  src={card.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{card.rname}</Card.Title>
                  <Card.Text>Price: Rs. {card.price}</Card.Text>
        
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      onClick={() => add(card)}
                      variant="primary"
                      className="col-lg-12"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
