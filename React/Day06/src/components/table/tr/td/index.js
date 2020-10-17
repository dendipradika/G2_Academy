import React, { Component } from 'react';
import Input from "../../../input"

class TdShow extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <td align={this.props.tdValign} width={this.props.tdWidth}>{this.props.tdLabel}</td>
        <td align={this.props.tdValign2} width={this.props.tdWidth2}>{this.props.tdLabel2}</td>
        <td><Input type={this.props.type} inputClass={this.props.inputClass} /></td>
      </>
     );
  }
}
 
export default TdShow;