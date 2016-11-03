import React from 'react';
import autoBind from 'react-autobind';

class CreateCourse extends React.Component {
 constructor(props) {
    super(props);
    autoBind(this);
  }
 render() {  
    return (
        <h1>Create a course</h1>
    )
 }
};

export default CreateCourse;
