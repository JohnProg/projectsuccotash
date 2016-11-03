import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
 render() {  
    return (
        <div className="navigation-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/course">Course</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/createcourse">Create Course</Link></li>
                <li><Link to="/createlesson">Create Lesson</Link></li>
                <li><Link to="/lessons">Lessons</Link></li>
                <li><Link to="/lesson">Lesson</Link></li>
            </ul>
        </div>
    )
 }
};

export default Navbar;