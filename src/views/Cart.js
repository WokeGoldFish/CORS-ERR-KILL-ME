import React, {useState, useEffect} from 'react'
import Product from '../components/Product'


export default function Cart() {

    const [posts, setPosts] = useState([])

    const getPosts = async() => {
        const res = await fetch('http://127.0.0.1:8000/api/posts/')
        const data = await res.json()
        console.log(data)
        if (data.status === 'ok') {
            setPosts(data.posts)
        }
    }
    
    useEffect (() => {getPosts()},[])
    
    return (
        <div className='container'>
            <div className='row mx-auto col-4'>
            {posts.map((p, i) => <Product key ={i} post={p} index={i}/> )}
        </div>
        </div>
  )
}
