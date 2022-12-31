import React from "react";
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
  return (
    <div className="p-hooks">
      <p>nilai saat ini adalah = {count}</p>
      <button onClick={() => setCount(count + 1)}>update nilai</button>
    </div>
  );
};

export default Hooks;
