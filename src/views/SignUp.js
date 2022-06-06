import React from 'react'

export default function SignUp() {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:8000/api/signup/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password1: e.target.password1.value,
                password2: e.target.password2.value,
            })

        })
        
        
        
        const data = await res.json();
        console.log(data)
    }







    return (
        <form className='col-6 mx-auto' onSubmit={(e) => {handleSubmit(e)}}>
            <div className='mb-3'>
                <label htmlfor="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" name="username"/>
                
            </div>
            <div className="mb-3">
                <label htmlfor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control"name="email"/>
                
            </div>
            <div className="mb-3">
                <label htmlfor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name="password1"/>
            </div>
            <div className="mb-3">
                <label htmlfor="exampleInputPassword1">Confirm Password</label>
                <input type="password" className="form-control" name="password2"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
