import React from "react";
import {Link} from "react-router-dom";
import {NavStyle} from "./Nav-Style";


function Nav(){
    return (
      <NavStyle>
        <div className = "top-nav">
          <Link className = "top-nav-link"to = "/rick-and-morty"> Home </Link>
          <Link className = "top-nav-link"to= "/Characters">Characters</Link>
          <Link className = "top-nav-link"to="/QuoteGenerator">Quote Generator </Link>
          </div>
      </NavStyle>
    );
}

export default Nav;