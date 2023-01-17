import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    //     if (auth) {
    //         navigate("/")
    //     }
    // })
    const handleLogin = async()=>{
        // console.warn(email, password);
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body:JSON.stringify({email,password}),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json();
        // console.warn(result);
        if (result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/contact")
        }
        else {
            alert("please enter connect details");
        }
    };
    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white 
                    justify-content-center from ">
                        <h1 className="display-4 fw-bolder mt-5">WellCome Back</h1>
                        <p className="lead text-center">Enter To Credentials To Login</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Log-In</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <button onClick={handleLogin} type="button" className="btn btn-primary w-100 mt-4 rounded-pill">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;