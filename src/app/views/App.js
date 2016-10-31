import React from 'react';
import { Link } from 'react-router';
import CreateCourse from './CreateCourse';
import CreateLesson from './CreateLesson';
import CourseList from './CourseList';
import autoBind from 'react-autobind';

require("style!css!app.css");

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
    render() {
        return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/course">Course</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/createcourse">Create Course</Link></li>
                <li><Link to="/createlesson">Create Lesson</Link></li>
                <li><Link to="/lessons">Lessons</Link></li>
                <li><Link to="/lesson">Lesson</Link></li>
            </ul>
            { this.props.children }
        </div>
            )
    }
};

export default App;
