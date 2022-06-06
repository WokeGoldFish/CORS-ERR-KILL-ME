import React, { useState, useEffect } from "react";
// react hooks
// useState and useEffect
// all hooks ahve the prefix 'use'
// useState replaces the constructor
// useEffect replaces the componentDidMount

// useStates returns an array of 2 objects: [state, setStateFunction]

export default function NewContact() {
  let [newContact, setContact] = useState([]);
  console.log();

  // useEffect takes in 2 args .. a function and an array of dependencies
  // useEffect(() => {}, [])
  // when you leave the array empty,it mimikcs the componetDidMount .bc it runs once and only once after first rendering
  const getData = async () => {
    const res = await fetch("https://shohablog-django.herokuapp.com/api/");
    const data = await res.json();
    const newContacts = [];
    for (let student of data.students) {
      let newNew = {
        firstName: student.first_name,
        lastName: student.last_name,
      };
      newContacts.push(newNew);
    }
    setContact(newContacts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {newContact.map((c, i) => (
        <h1 key={i}>
          {c.firstName} {c.lastName}
        </h1>
      ))}
    </div>
  );
}
