import React from 'react';
import { Link } from 'react-router';
import CreateCourse from './CreateCourse';
import CreateLesson from './CreateLesson';
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
        <Navbar/>
        <div className="mainContainer">
            { this.props.children }
        </div>
        </div>
        )
    }
};

export default App;
