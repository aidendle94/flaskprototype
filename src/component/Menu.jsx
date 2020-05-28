import React, { Component } from "react";
import "./component_css/Menu_css.css";
import InputBox from "./InputBox";
import Card from "./Card";
import Content from "./Classes/Content";

class Menu extends Component {
  state = {
    Content: [],
    name: "John",
  };
  changeHandler = (event) => {
    const person = event.target.value;
    this.setState({
      name: person,
    });
    console.log(this.state.name);
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
      <div className="container">
        <div className="jumbotron" id="menu_css">
          <div>
            {this.state.Content.map((p) => {
              return (
                <div>
                  <Card hello={p} Key={p.id} />
                </div>
              );
            })}
          </div>
          <input type="button" onClick={this.addHandler} value="Add" />
        </div>
      </div>
    );
  }
}

export default Menu;
