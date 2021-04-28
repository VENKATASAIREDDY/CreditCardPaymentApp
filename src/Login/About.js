import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Navbar>
                <Nav.Link href={`/`}><i className="bi bi-house-door home-icon text-primary">Home</i></Nav.Link>        
            </Navbar>
            <div class="bg-light">
                <div class="container ">
                    <div class="row align-items-center py-5">
                        <div class="col-lg-12">
                            <h1 class="display-4">Welcome to Credit Card Payment App</h1>
                            <p class="lead text-muted mb-1">Credit Card Payment Application is used to pay your credit card bills and make contact less transactions and keep you safe from covid</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="bg-dark text-light">
                <div class="container py-5">
                    <div class="row ">
                        <div class="col-lg-8">
                            <h2 class="text-center font-weight-light">Our team</h2>
                            <p class="font-italic text-center text-light">Team of six who worked for developing this project</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row text-center bg-dark">
                <div class="col-xl-3">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">P Venkata Sai Reddy</h5><span class="small text-uppercase text-muted">Designer of Customer and Statements</span>
                        <ul class="social mb-0 list-inline mt-3">
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-facebook-f"></i></Link></li>
                            <li class="list-inline-item"><Link href="#" class="social-link"><i class="fa fa-twitter"></i></Link></li>
                            <li class="list-inline-item"><Link href="#" class="social-link"><i class="fa fa-instagram"></i></Link></li>
                            <li class="list-inline-item"><Link href="#" class="social-link"><i class="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">G Naveen</h5><span class="small text-uppercase text-muted">Designer of Transactions</span>
                        <ul class="social mb-0 list-inline mt-3">
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-facebook-f"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-twitter"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-instagram"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>




                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">Shambhavi</h5><span class="small text-uppercase text-muted">Designer of Login</span>
                        <ul class="social mb-0 list-inline mt-3">
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-facebook-f"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-twitter"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-instagram"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>




                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">Pranava Charitra</h5><span class="small text-uppercase text-muted">Designer of Payments</span>
                        <ul class="social mb-0 list-inline mt-3">
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-facebook-f"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-twitter"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-instagram"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>




                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">Abhilash Reddy</h5><span class="small text-uppercase text-muted">designer of Credit cards</span>
                        <ul class="social mb-0 list-inline mt-3">
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-facebook-f"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-twitter"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-instagram"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">Himavanth</h5><span class="small text-uppercase text-muted">Designer of Accounts</span>
                        <ul class="social mb-0 list-inline mt-3">
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-facebook-f"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-twitter"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-instagram"></i></Link></li>
                            <li class="list-inline-item"><Link to="#" href="#" class="social-link"><i class="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default About;