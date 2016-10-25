import React from 'react';
import autoBind from 'react-autobind';

class LessonList extends React.Component {
 constructor(props) {
    super(props);
    autoBind(this);
  }
 render() {  
    return (
        <h1>List of lessons</h1>
    )
 }
};

export default LessonList;
