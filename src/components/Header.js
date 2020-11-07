import React from "react";
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

    render() {
      return (
        <div>
            <img className="App-logo" src="https://i.ibb.co/fXg9HgB/2-22657-smiley-face-black-and-white-smiley-face-clipart.png" alt="spite-house-smiley" width="200"/>
            <h1>SPITE HOUSE</h1>
            <br></br>
            <NavLink exact to="/">Home</NavLink> |
            <NavLink exact to="/app/v1/reviews">View All Reviews</NavLink> | 
            <NavLink exact to="/app/v1/reviews/new">New Review</NavLink>
        </div>
      );
    }
  }

  export default Header