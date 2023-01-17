import React from 'react'
import logo from '../assets/images2.jpg'

const Contact = () => {
    return (
        <div>
            <div id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">
                                Have some <b>Question?</b>
                            </h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={logo} alt="images" className='w-75 mt-5' />
                        </div>
                        <div className="col-md-6">
                            <form action=''>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input type="name" className="form-control" id="name" placeholder="jolly pal" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Type Your Message' rows="5" ></textarea>
                                </div>
                                <button type='submit' className='btn btn-outline-primary rounded-pill px-4'>Send Message
{/* ---------------------------------------------------------------------icons----------------------------------------------------- */}
                                <i className='fa fa-paper-plane ms-2'></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact