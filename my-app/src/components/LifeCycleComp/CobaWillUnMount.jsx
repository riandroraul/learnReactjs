import React, { Component } from "react";
import LifeCycleComp from ".";

class CobaWillUnMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showComp: false,
      });
    }, 2000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return this.state.showComp ? <LifeCycleComp /> : null;
  }
}

export default CobaWillUnMount;
