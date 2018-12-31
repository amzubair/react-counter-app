import React, { Component } from "react";
import Counter from "./Counter";
class App extends Component {
  render() {
    return (
      <div>
        <Counter init={0} />
        <Counter init={-10} />
        <Counter init={70} />
        <Counter />
      </div>
    );
  }
}

export default App;
