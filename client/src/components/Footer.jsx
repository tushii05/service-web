import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {MDBIcon} from 'mdbreact'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
    return (
        <div>
            <section id="footer">
                <MDBFooter className='text-center text-lg-start text-white '>
                    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                        <div className='me-5 d-none d-lg-block'>
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <Link to='' className='me-4 text-reset'>
                                <MDBIcon fab icon="facebook-f" />
                            </Link>
                            <Link to='' className='me-4 text-reset'>
                                <MDBIcon fab icon="twitter" />
                            </Link>
                            <Link to='' className='me-4 text-reset'>
                                <MDBIcon fab icon="google" />
                            </Link>
                            <Link to='' className='me-4 text-reset'>
                                <MDBIcon fab icon="instagram" />
                            </Link>
                            <Link to='' className='me-4 text-reset'>
                                <MDBIcon fab icon="linkedin" />
                            </Link>
                            <Link to='' className='me-4 text-reset'>
                                <MDBIcon fab icon="github" />
                            </Link>
                        </div>
                    </section>

                    <section className=''>
                        <MDBContainer className='text-center text-md-start mt-5'>
                            <MDBRow className='mt-3'>
                                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>
                                        <MDBIcon icon="building" className="me-3" />
                                        {/* <MDBIcon far icon="building" /> */}
                                        {/* <MDBIcon fab icon="servicestack" /> */}
                                        Job-Portal
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </MDBCol>

                                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                    <p>
                                        <Link to='#!' className='text-reset'>
                                            Angular
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='#!' className='text-reset'>
                                            React
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='#!' className='text-reset'>
                                            Vue
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='#!' className='text-reset'>
                                            Laravel
                                        </Link>
                                    </p>
                                </MDBCol>

                                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                    <p>
                                        <Link to='#!' className='text-reset'>
                                            Pricing
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='#!' className='text-reset'>
                                            Settings
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='#!' className='text-reset'>
                                            Orders
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='#!' className='text-reset'>
                                            Help
                                        </Link>
                                    </p>
                                </MDBCol>

                                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                    <p>
                                        <MDBIcon icon="home" className="me-2" />
                                        New York, NY 10012, US
                                    </p>
                                    <p>
                                        <MDBIcon icon="envelope" className="me-3" />
                                        info@example.com
                                    </p>
                                    <p>
                                        <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                    </p>
                                    <p>
                                        <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>

                    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        © 2022 Copyright: - 
                        <Link className='text-white' to='/'>
                            job-portal.com
                        </Link>
                    </div>
                </MDBFooter>
            </section>
        </div >
    );
}