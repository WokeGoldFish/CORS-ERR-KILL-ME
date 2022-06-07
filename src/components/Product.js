import React from "react";
import { Link } from "react-router-dom";

export default function Product({ post }) {
  return (
    <Link to={`/product/${post.id}`} className="card text-decoration-none class text-dark">
      <img className="card-img-top" src={post.picture} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{post.name}</h5>
        <p>{post.price}</p>
        
      </div>
    </Link>
  );
}
