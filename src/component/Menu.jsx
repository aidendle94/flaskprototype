import React, { Component } from "react";
import "./component_css/Menu_css.css";
import Card from "./Card";
import Content from "./Classes/Content";

class Menu extends Component {
  state = {
    Content: [],
    name: "John",
  };
  addHandler = (event) => {
    const id = Math.floor(Math.random() * 10000);
    const content = new Content("Sushi", " Sushi is like fish tacos", id);
    const Contents = [...this.state.Content];
    Contents.push(content);
    this.setState({
      Content: Contents,
    });
    console.log(this.state.Content[0]);
    console.log(this.props);
  };
  render() {
    return (
      <div>
        {this.state.Content.map((c) => {
          return (
            <div>
              <Card ContentObject={c} Key={c.id} />
            </div>
          );
        })}

        <input type="button" onClick={this.addHandler} value="Add" />
      </div>
    );
  }
}

export default Menu;
