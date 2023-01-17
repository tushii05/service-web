import React from 'react'
import logo from "../assets/images1.jpg"
import {NavLink} from 'react-router-dom'

function About() {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5 ">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={logo} alt="About" className='w-75 mt-5' />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <div className="display-6 mb-2">Who <b>We</b> Are</div>
                            <hr className='w-50'/>
                            <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Modi et voluptatem tempore nihil autem sunt officia dicta, totam voluptate possimus cum.
                                Amet eum nemo non animi sunt inventore autem a blanditiis sapiente dolores vitae porro optio,
                                accusantium magnam cumque!</p>
                                <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                                <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                                    <i className='fa fa-address-card me-2'></i>
                                    <NavLink to="/contact" className="con">Contact Us</NavLink></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;