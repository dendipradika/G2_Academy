import React, { Component } from 'react';

class Td5 extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <td>{this.props.tdLabel}</td>
        <td>{this.props.tdLabel2}</td>
        <td>{this.props.tdLabel3}</td>
        <td>{this.props.tdLabel4}</td>
        <td>{this.props.tdLabel5}</td>
      </>
     );
  }
}
 
export default Td5;