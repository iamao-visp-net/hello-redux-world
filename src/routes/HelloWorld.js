import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <p>Hello World {this.props.term}</p>
      </div>
    );
  }
}

export default HelloWorld;
