import React from 'react';
import autoBind from 'react-autobind';

class CreateLesson extends React.Component {
 constructor(props) {
    super(props);
    autoBind(this);
  }
 render() {  
    return (
        <h1>Add a lesson</h1>
    )
 }
};

export default CreateLesson;
