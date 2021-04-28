import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid  bg-dark text-light">
        <div className="row">
          <div className="col-sm-3 text-center"><Link to="/about" className="text-light">About Us</Link></div>
          <div className="col-sm-4 text-center">
            <ul className="social list-inline">
              <li className="list-inline-item">Contact Us: </li>
              <li className="list-inline-item"><Link to="#" href="#" className="social-link"><i className="fa fa-facebook-f"></i></Link></li>
              <li className="list-inline-item"><Link to="#" href="#" className="social-link"><i className="fa fa-twitter"></i></Link></li>
              <li className="list-inline-item"><Link to="#" href="#" className="social-link"><i className="fa fa-instagram"></i></Link></li>
              <li className="list-inline-item"><Link to="#" href="#" className="social-link"><i className="fa fa-linkedin"></i></Link></li>
            </ul>
          </div>
          <div className="col-sm-5 text-right"> &copy; {new Date().getFullYear()}{" "} CopyRight </div>
        </div>
      </div>
    );
  }
}

export default Footer;