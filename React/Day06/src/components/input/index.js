import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <input type={this.props.type} className={this.props.inputClass} />
      );
  }
}
 
export default Input;