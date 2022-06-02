import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function IndividualPost() {
  const [post, setPost] = useState({});

  const { post_id } = useParams();

  const getPost = async () => {
      const res = await fetch(`http://127.0.0.1:8000/api/posts/${post_id}`)
      const data = await res.json()
      console.log(data)
      if (data.status === 'ok') {
          setPost(data.post)
      }
  }
  const deletePost = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/delete/${post_id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    console.log(data)
  }

  
  useEffect(() => {
      getPost()
  }, [])
  return (
      <>
    <div className="card text-dark-class text-decoration-none"
    >
      <img className="card-img-top" src={post.picture} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{post.author}</h5>
      </div>
    </div>
    <button className = 'btn btn-primary'> UpDate </button>
    <button className = 'btn btn-danger'> Delete </button>
    
    </>
  );
}
