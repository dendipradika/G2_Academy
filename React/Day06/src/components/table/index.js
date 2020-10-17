import React, { Component } from 'react';
import Tr from "./tr"
import Td from "./tr/td"

class TableShow extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <table align={this.props.align} width={this.props.width} border={this.props.border}>
          {/* <Tr /> */}
          <Tr tdValign={this.props.tdValign} tdWidth={this.props.tdWidth} tdLabel={this.props.tdLabel} tdValign2={this.props.tdValign2} tdWidth2={this.props.tdWidth2} tdLabel2={this.props.tdLabel2} tdLabel3={this.props.tdLabel3} />
        </table>
      </>
     );
  }
}
 
export default TableShow;