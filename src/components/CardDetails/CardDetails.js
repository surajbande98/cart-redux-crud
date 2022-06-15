import React from "react";
import Table from "react-bootstrap/Table";

import "../style.css";

const CardDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Details</h2>

        <section className="container mt-3">
          <div className="item_details">
            <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" />
            </div>

            <div className="details">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>Restaurant</strong>: Hyd Biryani house
                      </p>
                      <p>
                        <strong>Price</strong>: Rs. 300
                      </p>
                      <p>
                        <strong>Dishes</strong>: North, South indian, Biryani
                      </p>
                      <p>
                        <strong>Total</strong>: Rs. 200
                      </p>
                    </td>

                    <td>
                    <p>
                        <strong>Rating</strong>: <span className="rating">
                        3.5 ☆ </span> 
                      </p>
                      <p>
                        <strong>Order review</strong>: order deleivered on time
                      </p>
                      <p>
                        <strong>Remove</strong>: <i style={{fontSize: 20}} className="fas fa-trash"></i>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
