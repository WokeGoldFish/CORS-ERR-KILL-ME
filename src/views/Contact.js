import React, { Component } from "react";
import ContactPost from '../components/ContactPost'

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            contacts:[]
        }
    }

componentDidMount =  async () => {
    const res = await fetch('https://shohablog-django.herokuapp.com/api/')
    console.log(res)
    const data = await res.json();
    
    const myContacts = []
    for(let student of data.students){
        let contact = {
            firstName: student.first_name,
            lastName: student.last_name
        }
        myContacts.push(contact)
    }
    this.setState({contacts:myContacts})
}
  
    render() {
    return (
      <div>
          {this.state.contacts.map((c, i) => <ContactPost key={i} c={c} />)}

      </div>
    )
  }
}
