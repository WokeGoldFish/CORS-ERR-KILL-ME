import React from "react";
import { Link } from "react-router-dom";

export default function Product({ post }) {
  return (
    <Link
      to={`/cart/${post.id}`}
      className="card text-dark-class text-decoration-none"
      
    >
      <img className="card-img-top" src={post.picture} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{post.author}</h5>
      </div>
    </Link>
  );
}
