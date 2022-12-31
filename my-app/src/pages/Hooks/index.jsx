import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../Assets/css/hooks.css";

// class Hooks extends Component {
//   state = {
//     count: 0,
//   };

//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   componentDidMount() {
//     document.title = `title changed ${this.state.count}`;
//   }

//   componentDidUpdate() {
//     document.title = `title changed ${this.state.count}`;
//   }

//   componentWillUnmount() {
//     document.title = "React App";
//   }

//   render() {
//     return (
//       <div className="p-hooks">
//         <p>nilai saat ini adalah = {this.state.count}</p>
//         <button onClick={this.onUpdate}>update nilai</button>
//       </div>
//     );
//   }
// }

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `title changed = ${count}`;
    return () => {
      document.title = `React App`;
    };
  });
  return (
    <div className="p-hooks">
      <p>nilai saat ini adalah = {count}</p>
      <button onClick={() => setCount(count + 1)}>update nilai</button>
    </div>
  );
};

export default Hooks;
