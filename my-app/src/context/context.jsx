import { Component, createContext } from "react";
import actionType from "../redux/reducer/globalActionType";

export const RootContext = createContext();
const Provider = RootContext.Provider;

// provider
const GlobalProvider = (Children) => {
  return class ParentComp extends Component {
    state = {
      totalOrder: 5,
    };

    dispatch = (action) => {
      if (action.type === actionType.PLUS_ORDER) {
        this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
      } else if (action.type === actionType.MINUS_ORDER) {
        if (this.state.totalOrder > 0) {
          this.setState({
            totalOrder: this.state.totalOrder - 1,
          });
        }
      }
    };

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

// consumer

export const Consumer = RootContext.Consumer;

export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
