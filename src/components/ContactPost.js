
import React, { Component } from 'react'

export default class ContactPost extends Component {
  render() {
    return (
      <div className='card'>
        <div className="card-body">
            <h5 className="card-title">{this.props.c.firstName}</h5>
            <h5 className="card-title">{this.props.c.lastName}</h5>
        </div>

      </div>
    )
  }
}
