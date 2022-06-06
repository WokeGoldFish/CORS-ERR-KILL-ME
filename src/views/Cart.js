import React from "react";

export default function Cart({ cartItems }) {
  console.log(cartItems);
  return (
    <>
      <h5>This is your Cart</h5>
      <div>{cartItems.length === 0 && <h6> Cart is Empty</h6>} </div>
      {cartItems.map((post) => (
        <div className="container">
          <div className="row mx-auto">
            <div key={post.id}
              className="card text-dark-class col-12 col-lg-4"
              style={{ width: "10rem" }}>
              <img className="card-img-top" src={post.picture} />
              <div>{post.name}</div>
              <div>{post.price}</div>
            </div>
          </div>
        </div>
      ))}

      {/* <div
        className="card text-dark-class text-decoration-none container"
        style={{ width: "40rem" }}
      >
        <img className="card-img-top" src={post.picture} />
        <div className="card-body">
          <h5 className="card-title">{post.name}</h5>
          <p>{post.price}</p>
        </div>
      </div> */}
    </>
  );
}
