import { height } from "@mui/system";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Cardsdata from "../../CardData";

import "../style.css";

const Cards = () => {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>

      <div className="row d-flex justify-content-center align-item-center">
        {Cardsdata.map((card, id) => {
          return (
            <>
              <Card style={{ width: "22rem",border:"none"}} className="mx-2 mt-4 card_style" key={id}>
                <Card.Img variant="top" src={card.imgdata} style={{height:'16rem'}} className="mt-3" />
                <Card.Body>
                  <Card.Title>{card.rname}</Card.Title>
                  <Card.Text>
                   Price: Rs. {card.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button variant="primary" className="col-lg-12">Add to Cart</Button>
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
