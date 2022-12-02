const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 5,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
      break;
    default:
      return state;
      break;
  }
};

// store
const store = createStore(rootReducer);
console.log(store.getState());

// dispatching action
store.dispatch({ type: "ADD_AGE" });
console.log(store.getState());

// subscription
