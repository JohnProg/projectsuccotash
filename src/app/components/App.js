import React from 'react';
import { Link } from 'react-router';
import CreateCourse from './CreateCourse';
import CreateLesson from './CreateLesson';
import CourseList from './CourseList';
import autoBind from 'react-autobind';

import Navbar from './layout/navbar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
    render() {
        return (
        <div>
        <Navbar>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/course">Course</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/createcourse">Create Course</Link></li>
                <li><Link to="/createlesson">Create Lesson</Link></li>
                <li><Link to="/lessons">Lessons</Link></li>
                <li><Link to="/lesson">Lesson</Link></li>
            </ul>
        </Navbar>
        <div className="mainContainer">
            { this.props.children }
        </div>
        </div>
        )
    }
};

export default App;
