import React from 'react';
import { render } from 'react-dom';

class DummyComponent extends React.Component {
 render() { 
  return <div>Hello, world.</div>;
 }
}

render(
	//we'll probably render a wrapper for react-router here
  <DummyComponent />,
  document.getElementById('app')
);