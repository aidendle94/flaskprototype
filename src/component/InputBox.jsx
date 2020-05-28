import React, { Component } from "react";
class inputBox extends Component {
  state = {};
  render() {
    return (
      <div>
        <input onChange={this.props.Change} type="text"></input>
      </div>
    );
  }
}

export default inputBox;
