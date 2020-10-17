import React, { Component } from 'react';
import Td from "./td"
import Td5 from "./td/td5"

class TrShow extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <tr>
          <Td tdValign={this.props.tdValign} tdWidth={this.props.tdWidth} tdLabel={this.props.tdLabel} tdValign2={this.props.tdValign2} tdWidth2={this.props.tdWidth2} tdLabel2={this.props.tdLabel2} tdLabel3={this.props.tdLabel3} tdLabel4={this.props.tdLabel4} tdLabel5={this.props.tdLabel5} tdHeight={this.props.tdHeight} tdColspan={this.props.tdColspan} tdAlign={this.props.tdAlign} type={this.props.type} inputClass={this.props.inputClass} />
        </tr>
      </>
     );
  }
}
 
export default TrShow;