import React, { Component } from 'react';

class TdShow2 extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <td height={this.props.tdHeight} colspan={this.props.tdColspan} align={this.props.tdAlign}>{this.props.tdLabel}</td>
      </>
     );
  }
}
 
export default TdShow2;