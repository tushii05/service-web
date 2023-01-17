import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {
        console.warn(username, email, password);
        let result = await fetch("http://localhost:5000/register", {
            method:'post',
            body: JSON.stringify({username,email,password}),
            headers: { 'Content-Type': 'application/json' }
        });
        result = await result.json();
        console.warn(result);
        if(result)
        {
            navigate("/")
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white 
                    justify-content-center from order-2">
                        <h1 className="display-4 fw-bolder mt-5">Hello, Friends</h1>
                        <p className="lead text-center">Enter Details For Register</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Registration</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">username</label>
                                <input type="text" value={username} onChange={(e)=>setName(e.target.value)} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I Agree Terms and Condition</label>
                            </div>
                            <button onClick={collectData} type="button" className="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration