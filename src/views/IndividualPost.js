import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function IndividualPost(props) {
  const [post, setPost] = useState({});
  
  const {setCartItems} = props

  const { post_id } = useParams();

  const getPost = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${post_id}`);
    const data = await res.json();
    console.log(data);
    if (data.status === "ok") {
      setPost(data.post);
    }
  };

  const addItemToCart = (post) => {
    setCartItems((previousState) => {
      return [...previousState, post]
    })
  }






  useEffect(() => {
    getPost();
  }, []);
  
  return (
    <>
      <div
        className="card text-dark-class text-decoration-none container"
        style={{ width: "40rem" }}
      >
        <img className="card-img-top" src={post.picture} />
        <div className="card-body">
          <h5 className="card-title">{post.name}</h5>
          <p>{post.price}</p>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <button className="btn btn-primary mx-5 my-5" onClick = {() => {addItemToCart(post)}}> Add to Cart </button>
        <button className="btn btn-danger mx-5 my-5" onClick > Go Back </button>
      </div>
    </>
  );
}




  // const deletePost = async () => {
  //   const res = await fetch(`http://127.0.0.1:8000/api/delete/${post_id}`, {
  //     method: "DELETE",
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };