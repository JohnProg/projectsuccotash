import React from 'react';
import autoBind from 'react-autobind';

class CourseList extends React.Component {
 constructor(props) {
    super(props);
    autoBind(this);
  }
 render() {  
    return (
        <h1>List of courses</h1>
    )
 }
};

export default CourseList;
