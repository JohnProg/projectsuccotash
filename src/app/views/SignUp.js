import React from 'react';
import autoBind from 'react-autobind';
import SignUpFormContainer from '../containers/SignUpFormContainer';

class Course extends React.Component {
 constructor(props) {
    super(props);
    autoBind(this);
  }
 render() {  
    return (
        <SignUpFormContainer />
    )
 }
};

export default Course;
