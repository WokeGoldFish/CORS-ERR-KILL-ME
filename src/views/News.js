import React, { Component } from "react";
import Post from "../components/Post";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
        posts: []
    };

  }

  componentDidMount= async () => {
      const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=01a3ceb3c1494a3395a03cd9acbb3565');
      const data = await res.json();
      
      const myPosts=[]
      for(let article of data.articles){
          let post = {
              img:article.urlToImage,
              author:article.author
          }
          myPosts.push(post)
      }
      this.setState({posts:myPosts})
  }



  addPost() {
      let newPost = {img:'https://preview.redd.it/btgxzcrf62431.png?auto=webp&s=95baeed8027c1f526cd3e49ab04ed488e8389911', author: 'not me or you'}
      this.setState({
          posts: [...this.state.posts, newPost]
      })
  }
  render() {

    return (
        <div>
            <h1> home page</h1>
            {this.state.posts.map((p, i) => <Post p={p} key = {i}/> )}
            <button onClick = {() => {this.addPost()}}>Add Post</button>
        </div>
  )}
}
