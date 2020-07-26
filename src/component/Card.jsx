import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card better">
        <div id="menu_css">
          <div>
            {this.props.ContentObject.title}
            {this.props.ContentObject.body}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
