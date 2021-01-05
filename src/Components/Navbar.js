import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="Navbar">
          <div className="ui secondary menu">
            <Link to="/" className="items-link">
              <h1>
                Welcome<i class="yellow suitcase icon"></i> Bloggers!
              </h1>
            </Link>
            <div className="right menu">
              <Link className="items-link " to="/">
                Home
              </Link>
              <Link className="items-link" to="/about">
                About
              </Link>
              <Link className="items-link" to="/blogs">
                Blogs
              </Link>
              <Link className="items-link" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
