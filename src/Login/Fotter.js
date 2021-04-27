import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark text-light">
        <div className="container-fluid bg-dark">
          <nav className="pull-left">
            <ul>
              <li>
                <Link to={`https://www.capgemini.com/in-en/`}>Company</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            CopyRight
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;