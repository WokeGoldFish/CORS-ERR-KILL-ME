import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function IndividualPost(props) {
  const [post, setPost] = useState({});
  const { setCartItems } = props
  const { post_id } = useParams();


  const [likes, setLikes] = useState(0);
  
  const [review, setReview] = useState('')


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

  const addReview = async () => {
    let xReview = {
      
      review: review
    }
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
        <Link to={`/cart`} className="btn btn-primary mx-1 my-1" onClick={() => { addItemToCart(post) }}> Add to Cart </Link>
      </div>

      <div className="container ">
        <div className="row">
          <div className="d-flex justify-content-center ">
            <h2 className={likes >= 0 ? 'positive' : 'negative'}>{likes}</h2>
          </div>
          <div className="row">
            <div className=" d-flex button justify-content-center ">
              <button className="btn btn-danger mx-4 my-1" onClick={() => setLikes(likes - 1)}>Dislike</button>
              <button className="btn btn-success my-1" onClick={() => setLikes(likes + 1)}>Big Fan</button>
            </div>
          </div>
        </div>
      </div>



      <form>
        <div className="container justify-content-center">
          <div classname="form-group row mb-3">
            <label htmlfor="comment">Review</label>
            <textarea class="form-control" id="review" rows="3" value={review} onSubmit={(e) => addReview(e.target.value)} ></textarea>
          </div>



          <button type ="submit" className="btn btn-success">Submit</button>
        </div>
      </form>



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