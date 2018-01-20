import React, { Component } from 'react';

class Qpanel extends Component {
  render() {
    return (
      <div className="Qpanel">
        <p><span className="bigQ">&ldquo;</span> {this.props.Qtext}<span className="Qauthor"><br />- {this.props.Qauthor}</span></p>
      </div>
    );
  }
}

export default Qpanel;
