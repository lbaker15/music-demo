import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="nav">
                    <div class="inner">
                        <Link to="/home">About</Link>
                        <Link to="/featured-events">Featured</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/news">News</Link>
                        <Link to="/contact">Contact</Link>
                 
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Nav;