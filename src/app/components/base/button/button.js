import React from 'react'

import './button.scss';


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