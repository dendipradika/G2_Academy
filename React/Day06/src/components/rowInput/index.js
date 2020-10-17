import React, { Component } from 'react';
import Input from "../input"

class RowInput extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <label> {this.props.labelInput} </label>
        <Input type={this.props.type} />
      </>
     );
  }
}
 
export default RowInput;