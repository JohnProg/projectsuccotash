import React from 'react';
import autoBind from 'react-autobind';

class Course extends React.Component {
 constructor(props) {
    super(props);
    autoBind(this);
  }
 render() {  
    return (
        <h1>Course Page</h1>
    )
 }
};

export default Course;

