import React from 'react';
import { Link } from 'react-router';
import NewCourse from './NewCourse';
import NewLesson from './NewLesson';
import CourseList from './CourseList';
import autoBind from 'react-autobind';
import Navbar from '../components/layout/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
    render() {
        return (
        <div>
        <Navbar />
        <div className="main-container">
            { this.props.children }
        </div>
        </div>
        )
    }
};

export default App;
