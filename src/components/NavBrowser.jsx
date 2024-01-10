import React from "react";
import { Link } from "react-router-dom";
import "./styleNav.css";
const Nav = () => {
    return(
        <div class="topnav" id="myTopnav">
            <Link to="/">Home</Link>
            <Link to="/taskList">Task Lists</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Nav;