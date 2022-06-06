import React from "react";

export default function Login({ setUser }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password1.value,
      })

    });

    const data = await res.json();
    if (data.token) {
      setUser ({
        username: e.target.username.value,
        token:data.token
      })
    }
  };

  return (
    <form
      className="col-6 mx-auto"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="mb-3">
        <label htmlfor="exampleInputEmail1">Username</label>
        <input type="text" className="form-control" name="username" />
      </div>
      <div className="mb-3">
        <label htmlfor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" name="password1" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
