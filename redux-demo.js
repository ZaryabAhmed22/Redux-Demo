const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState()); // >> {counter: 1}
//subcription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//making redux aware of the subcriber
store.subscribe(counterSubscriber);

//Creating and dispatching an action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
