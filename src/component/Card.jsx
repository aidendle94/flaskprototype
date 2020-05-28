import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.hello.title}
        {this.props.hello.body}
      </div>
    );
  }
}

export default Card;
