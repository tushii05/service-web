import React from 'react'
import "./Home"
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels The Fresh Bussiness Perspective</h1>
                            <p className="lead text-center fs-4 mb-5 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                                labore optio dolor suscipit nesciunt numquam ea aliquid doloremque delectus. Eligendi!
                            </p>
                            <div className='button d-flex justify-content-center'>
                                <button className='btn btn-light me-4 rounded-pill px-4 py-2'>Get Quotes</button>
                                <button  className='btn btn-outline-light me-4 rounded-pill px-4 py-2'><NavLink to="/service" className="con">Our Services</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
        </div>
    )
}

export default Home