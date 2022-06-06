import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="card" style= {{width: "45rem"}}>
        <img
          className="card-img-top"
          src={this.props.p.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.p.Name}</h5>
          <p>{this.props.p.Price}</p>
        </div>
      </div>
    );
  }
}
