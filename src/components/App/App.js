import React, { Component } from "react";
import { createStore } from "redux";
import HelloWorld from "../../routes/HelloWorld";
import reducer from "../../reducers";
import logo from "../../logo.svg";
import "./App.css";

const initialState = { term: "Redux" };
const store = createStore(reducer, initialState);

class App extends Component {
  state = store.getState();
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <HelloWorld term={this.state.term} />
      </div>
    );
  }
}

export default App;
