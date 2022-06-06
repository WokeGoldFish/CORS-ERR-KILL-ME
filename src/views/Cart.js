import React from "react";

export default function Cart({ cartItems }) {
  console.log(cartItems);
  return (
    <>
      <h5>This is your Cart</h5>
      <div>{cartItems.length === 0 && <h6>Don't Be Cheap -- Buy my Stuff</h6>} </div>
      {cartItems.map((post) => (
        <div className="container">
          <div className="row justify-content-center">
            <div key={post.id}
              className="card text-dark-class"
              style={{ width: "100rem" }}>
              <img className="card-img-top" src={post.picture} />
              <div>{post.name}</div>
              <div>{post.price}</div>
            </div>
          </div>
        </div>
      ))}

      
    </>
  );
}
