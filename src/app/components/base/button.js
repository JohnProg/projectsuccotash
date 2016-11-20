import React from 'react'

class Button extends React.Component {

    render() {
        return (
          <button>
            <span>
              {this.props.children}
            </span>
          </button>
        );
    }
  }

export default Button;