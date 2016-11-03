import React from 'react';
import autoBind from 'react-autobind';

class Lesson extends React.Component {
 constructor(props) {
    super(props);
    autoBind(this);
  }
 render() {  
    return (
        <h1>Lesson Page</h1>
    )
 }
};

export default Lesson;
